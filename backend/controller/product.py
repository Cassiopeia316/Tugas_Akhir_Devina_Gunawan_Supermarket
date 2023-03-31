from flask import request, abort
from server import app, db
from models.categories import Category
from models.shelf_locations import ShelfLocation
from models.products import Product

import imgkit
import sys
import cv2

@app.route("/admin/v1/products", methods=["POST", "GET"])
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

        html_template_string = app.config['SERVICE_TEMPLATE'].render(product_name = name)
        imgkit.from_string(html_template_string, 'hi.jpg', options=app.config['IMGKIT_CONFIG'], config=app.config['IMAGE_CONFIG'])

        img = cv2.imread("hi.jpg")
        grayimg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        print(grayimg.shape)

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
    
    # name
    # description
    # localhost:5000/admin/v1/products?name=DIARY&description=test
    if request.method == "GET":
        args = request.args

        # service (yg bawah) ---------------------------
        query = Product.query
        
        name = ""
        if args.get("name") is not None:
            name = args.get("name")
            query = query.filter_by(name = name)

        description = ""
        if args.get("description") is not None:
            description = args.get("description")
            query = query.filter_by(description = description)

        limit = 10
        if args.get("limit") is not None:
            limit = args.get("limit")

        # 0 itu first page 
        offset = 0
        if args.get("offset") is not None:
            offset = args.get("offset")

        productList = query.limit(limit).offset(offset * limit).all()
        # serializer (yg bawah) ------------------------
        response = []
        for product in productList:
            response.append({
                "code" : product.code,
                "name" : product.name,
                "description" : product.description,
                "category_id" : product.category_id, 
                "shelf_location_id" : product.shelf_location_id,
                "price" : product.price,
                "stock" : product.stock
            })
        return response


@app.route("/admin/v1/products/<string:id>", methods=["PUT", "DELETE"])
def update(id):
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

