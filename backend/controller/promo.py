from flask import request, abort, send_file
from server import app, db
from flask_cors import cross_origin

from datetime import date

from models.products import Product
from models.promos import Promo
from models.promo_product_mappings import PromoProductMapping

#--------------------------------------------
import imgkit
import qrcode
import cv2
import os
folder = "D:\Binus_ASO_Semester_8\qrcode\promo"
#--------------------------------------------

@app.route("/v1/promos", methods=["POST", "GET"])
@cross_origin()
def create_promo():
    if request.method == "POST":
        body = request.get_json()

        description = body["description"]
        start_date = body["start_date"]
        end_date = body["end_date"]
        value = body["value"]

        promo = Promo(
            code = Promo.generate_code(),
            description = description,
            start_date = start_date, 
            end_date = end_date,
            value = value
        )

        db.session.add(promo)
        db.session.commit()

        return {
            "data": {
                "id": promo.id,
                "code" : promo.code,
                "description" : promo.description,
                "start_date" : promo.start_date, 
                "end_date" : promo.end_date,
                "value" : promo.value
            }
        }
    
    if request.method == "GET":
        args = request.args
        query = Promo.query
        promo_id =""
        if args.get("promo_id", "") != "":
            promo_id = args.get("promo_id")
            query = query.filter(Promo.id == promo_id)

        promoList = query.order_by(Promo.start_date).all()

        response = {
            "data": []
        }
        for promo in promoList:
            # query = Promo.query
            current_date = date.today()
            if current_date >= promo.end_date:
                isExpired = True
            else :
                isExpired = False

            if current_date >= promo.start_date and current_date <= promo.end_date:
                isActive = True
            else :
                isActive = False

            response["data"].append({
                "id": promo.id,
                "code" : promo.code,
                "description" : promo.description,
                "start_date" : promo.start_date, 
                "end_date" : promo.end_date,
                "value" : promo.value,
                "isExpired" : isExpired,
                "isActive" : isActive
            })
        return response

@app.route("/v1/promos/<string:id>", methods=["DELETE"])
@cross_origin()
def delete_promo(id):
    promo = Promo.query.filter_by(id = id).first()
    if promo is None:
        return abort(404, "not found")
    
    if request.method == "DELETE":
        db.session.delete(promo)
        db.session.commit()
        return "data berhasil dihapus"

@app.route("/v1/promosproductsmapping", methods=["POST", "GET"])
@cross_origin()
def create_promoproductmapping():
    if request.method == "POST":
        body = request.get_json()

        promo_id = body["promo_id"]
        product_id = body["product_id"]

        promoproductmapping = PromoProductMapping(
            promo_id = promo_id,
            product_id = product_id
        )

        db.session.add(promoproductmapping)
        db.session.commit()

        #------------------------------------------ test upload promo epaper ------------------------------
        promo_price = 0
        price_after_promo = promoproductmapping.product.price
        description_promo = ""

        querypromo = PromoProductMapping.query.join(Product).join(Promo)
        querypromo = querypromo.filter(Product.id == promoproductmapping.product.id)
        mappingpromoproducts = querypromo.order_by(Promo.value.desc())
        inc = 0

        for mappingpromoproduct in mappingpromoproducts:
            start_date_promo = mappingpromoproduct.promo.start_date
            end_date_promo = mappingpromoproduct.promo.end_date
            current_date = date.today()
            if current_date >= start_date_promo and current_date <= end_date_promo:
                discount = mappingpromoproduct.promo.value
                discount_value = (price_after_promo*discount)/100
                promo_price = promo_price + discount_value
                price_after_promo = price_after_promo - discount_value
                if inc == 0 :
                    description_promo =  str(discount) + "%"
                    print(description_promo)
                else :
                    description_promo = description_promo + "  +  " + str(discount) + "%" 
                inc += 1
        
        
        
        img = qrcode.make(str(promoproductmapping.id)) 
        os.mkdir(folder + "/" + str(promoproductmapping.id))
        img.save(folder + "/" + str(promoproductmapping.id) +'.png')

        logimage = str(promoproductmapping.id)
        html_template_string_promo = app.config['SERVICE_TEMPLATE_PROMO'].render(product_name = promoproductmapping.product.name,
                                                                                 product_category = promoproductmapping.product.category.name,
                                                                                 product_price = promoproductmapping.product.price,
                                                                                 product_price_after_promo = price_after_promo,
                                                                                 description_promo = description_promo,
                                                                                 imagepromoqr = logimage
                                                                                )
        imgkit.from_string(html_template_string_promo, 'newpromotest.jpg', options=app.config['IMGKIT_CONFIG_PROMO'], config=app.config['IMAGE_CONFIG_PROMO'])

        img = cv2.imread("newpromotest.jpg")
        img = cv2.resize(img, (296, 128))
        grayimg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        string = ""

        i = 0

        w, h = grayimg.shape
        q = ""

        for x in range(h):
            for y in range(w - 1, -1, -1):
                if grayimg[y, x] > 127: 
                    string += "1" 
                else:
                    string += "0"
                
                if (len(string) == 8): 
                    number = str(int(string, 2))
                    if (len(q) > 0):
                        q += ","
                    q = q + number 
                    string = ""
                    
        result = app.config['MQTT_CLIENT'].publish(app.config['MQTT_TOPIC'], q)

        #------------------------------------------ test upload promo epaper ------------------------------

        return {
            "data": {
                "id": promoproductmapping.id,
                "promo_id" : promoproductmapping.promo_id,
                "product_id" : promoproductmapping.product_id
            }
        }
    
    if request.method == "GET":
        # query = PromoProductMapping.query.all()

        args = request.args

        query = PromoProductMapping.query.join(Promo).join(Product)

        promo_id = ""
        if args.get("promo_id", "") != "":
            promo_id = args.get("promo_id")
            print("ini promo id")
            print(promo_id)
            # query = query.filter(PromoProductMapping.promo_id == promo_id)
            query = query.filter(Promo.id == promo_id)

            # query = query.filter_by(promo_id = promo_id)
            # query = query.filter(PromoProductMapping.promo_id == promo_id) 
        
        print(query)

        promoList = query.order_by(Promo.id).all()

        response = {
            "data": []
        }

        for promoproductmapping in promoList:
            response["data"].append({
                "id": promoproductmapping.id,
                "promo_id" : promoproductmapping.promo_id,
                "product_id" : promoproductmapping.product_id,
                "promo": {
                    "id": promoproductmapping.promo.id,
                    "code" : promoproductmapping.promo.code,
                    "description" : promoproductmapping.promo.description,
                    "start_date" : promoproductmapping.promo.start_date, 
                    "end_date" : promoproductmapping.promo.end_date,
                    "value" : promoproductmapping.promo.value
                },
                "product": {
                    "id": promoproductmapping.product.id,
                    "code" : promoproductmapping.product.code,
                    "name" : promoproductmapping.product.name,
                    "description" : promoproductmapping.product.description,
                    "category": {
                        "id": promoproductmapping.product.category.id,
                        "name":  promoproductmapping.product.category.name,
                    },
                    "shelf": {
                        "id" : promoproductmapping.product.shelf_location_id,
                        "elabel_code" : promoproductmapping.product.shelf_location.elabel_code
                    },
                    "shelf_location_id" : promoproductmapping.product.shelf_location_id,
                    "price" : promoproductmapping.product.price,
                    "stock" : promoproductmapping.product.stock
                },
            })
        return response
    
@app.route("/v1/promosproductsmapping/<string:id>", methods=["DELETE"])
@cross_origin()
def delete_promoproductmapping(id):
    promoproductmapping = PromoProductMapping.query.filter_by(id = id).first()
    if promoproductmapping is None:
        return abort(404, "not found")
    
    if request.method == "DELETE":
        db.session.delete(promoproductmapping)
        db.session.commit()
        return "data berhasil dihapus"

@app.route("/v1/promosproductsmapping/image/<string:id>", methods=["GET"])
@cross_origin()
def promoimage(id):
    loc = folder + '/' + id + ".png"
    file1 = open(folder + '/' + id + ".png", "r")
    return send_file(loc)