from flask import request, abort
from server import app, db
from models.categories import Category
from models.shelf_locations import ShelfLocation
from models.products import Product
from flask_cors import cross_origin

import imgkit
import sys
import cv2

import random
import time
import numpy as np

@app.route("/v1/products", methods=["POST", "GET"])
@cross_origin()
def create_product():
    if request.method == "POST":
        body = request.get_json()

        name = body["name"]

        description = body["description"] #body.get("description")  (kalo ga wajib bikinnya bisa kyk gini)

        category_id = body["category_id"]
        category = Category.query.filter_by(id = category_id).first() # None / <#Category>
        print(category)
        if category is None:
            return abort(400, "Bad request")

        shelf_location_id = body["shelf_location_id"]
        shelf_location = ShelfLocation.query.filter_by(id = shelf_location_id).first()
        if shelf_location is None:
            return abort(400, "Bad request")

        price = body["price"]

        stock = body["stock"]
        # SELECT * FROM CATEGORIES WHERE ID = category_id


        product = Product(
            code = Product.generate_code(),
            name = name, 
            description = description,
            category_id = category.id, 
            shelf_location_id = shelf_location.id,
            price = price,
            stock = stock,
            )

        db.session.add(product)
        db.session.commit()

        html_template_string = app.config['SERVICE_TEMPLATE'].render(product_name = name, 
                                                                     product_price = price,
                                                                     category_name = category.name)
        imgkit.from_string(html_template_string, 'hi.jpg', options=app.config['IMGKIT_CONFIG'], config=app.config['IMAGE_CONFIG'])

        img = cv2.imread("hi.jpg")
        # print(img)
        # img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img = cv2.resize(img, (296, 128))
        grayimg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # print(grayimg.shape)
        string = ""

        i = 0
        # print(grayimg.shape)

        w, h = grayimg.shape
        q = ""

        for x in range(h):
            for y in range(w - 1, -1, -1):
                if grayimg[y, x] > 127: #127-255 putih, 0-126 hitam
                    string += "1" #putih
                else:
                    string += "0" #hitam
                
                if (len(string) == 8): #dikumpulin sampai 8 digit, terus mau dijadiin hexdesimal
                    # hexdecimal = hex(int(string, 2)).upper()
                    number = str(int(string, 2))
                    if (len(q) > 0):
                        q += ","
                    q = q + number #hasil yang mau di print e paper
                    string = ""
                    # z += 1
                    
        
        # print(len(q))
        result = app.config['MQTT_CLIENT'].publish(app.config['MQTT_TOPIC'], q)
        # print(z)

        return {
            "data": {
                "id" : product.id,
                "code" : product.code,
                "name" : product.name,
                "description" : product.description,
                "category_id" : product.category_id, 
                "shelf_location_id" : product.shelf_location_id,
                "price" : product.price,
                "stock" : product.stock,
            },
        }
    
    # name
    # description
    # localhost:5000/admin/v1/products?name=DIARY&description=test
    if request.method == "GET":
        args = request.args

        # service (yg bawah) ---------------------------
        query = Product.query.join(Category).join(ShelfLocation, isouter=True)
        
        name = ""
        if args.get("name", "") != "":
            name = args.get("name")
            query = query.filter(Product.name == name)

        description = ""
        if args.get("description", "") != "":
            description = args.get("description")
            query = query.filter(Product.description == description)

        category_id = ""
        if args.get("category_id", "") != "":
            category_id = args.get("category_id")
            # query = query.filter_by(category_id = category_id) # inoi kalau di product ada kolom category id
            query = query.filter(Category.id == category_id) # inoi kalau di category bagian id
        
        product_id =""
        if args.get("product_id", "") != "":
            product_id = args.get("product_id")
            query = query.filter(Product.id == product_id)
        
        
        limit = 10
        if args.get("limit", "") != "":
            limit = int(args.get("limit"))

        # 0 itu first page 
        offset = 0
        if args.get("offset", "") != "":
            offset = int(args.get("offset"))

        print(query)
        # productList = query.order_by(Product.created_at).limit(limit).offset((offset - 1) * limit)
        productList = query.order_by(Product.created_at).paginate(page=offset, per_page=limit, error_out=False)
        # serializer (yg bawah) ------------------------
        response = {
            "data": [],
            "hasPrevPage": productList.has_prev,
            "hasNextPage": productList.has_next,
        }
        for product in productList:
            # category = getattr(product, "category", None)
            # print(getattr(category, 'subcategory', None))
            response["data"].append({
                "id"   : product.id,
                "code" : product.code,
                "name" : product.name,
                "description" : product.description,

                # ini 1
                # "category_id" : product.category_id,
                # "category_name": product.category.name,

                # ini 2
                "category": {
                    "id": product.category.id,
                    "name":  product.category.name,
                },
                "shelf": {
                    "id" : product.shelf_location_id,
                    # "code" : product.shelf_location.code,
                    "floor" : product.shelf_location.floor,
                    "aisle" : product.shelf_location.aisle,
                    "position" : product.shelf_location.position.value,
                    # "row" : product.shelf_location.row,
                    # "column" : product.shelf_location.column
                },
                "shelf_location_id" : product.shelf_location_id,
                "price" : product.price,
                "stock" : product.stock
            })
        return response


@app.route("/v1/products/<string:id>", methods=["PUT", "DELETE"])
@cross_origin()
def update(id):
    # args = request.args
    # query = Product.query.join(Category).join(ShelfLocation, isouter=True)
    
    # name = ""
    # if args.get("name", "") != "":
    #     name = args.get("name")
    #     query = query.filter_by(name = name)

    product = Product.query.filter_by(id = id).first()
    if product is None:
        return abort(404, "not found")

    if request.method == "PUT":
        body = request.get_json()

        name = body["name"]
        description = body["description"]

        category_id = body["category_id"]
        category = Category.query.filter_by(id = category_id).first() #first disini artinya untuk ngambil data paling pertama dari hasil filter
        if category is None:
            return abort(400, "Bad request")

        shelf_location_id = body["shelf_location_id"]
        shelf_location = ShelfLocation.query.filter_by(id = shelf_location_id).first()
        if shelf_location is None:
            return abort(400, "Bad request")

        price = body["price"]
        stock = body["stock"]

        product.name = name
        product.description = description
        product.category_id = category.id
        product.shelf_location_id = shelf_location.id
        product.price = price
        product.stock = stock
        
        db.session.add(product)
        db.session.commit()

        return {
            "id" : product.id,
            "code" : product.code,
            "name" : product.name,
            "description" : product.description,
            "category_id" : product.category_id, 
            "shelf_location_id" : product.shelf_location_id,
            "price" : product.price,
            "stock" : product.stock
        }
    
    if request.method == "DELETE":
        db.session.delete(product)
        db.session.commit()

        return "data berhasil di delete"