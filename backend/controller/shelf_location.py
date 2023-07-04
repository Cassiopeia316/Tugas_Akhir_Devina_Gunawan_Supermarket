from flask import request, abort
from server import app, db
from flask_cors import cross_origin

from models.shelf_locations import ShelfLocation
from models.products import Product
from models.product_shelflocation import ProductShelfLocationMapping

@app.route("/v1/elabelcode", methods=["POST", "GET"])
@cross_origin()
def create_elable_posititon():
    if request.method == "POST":
        body = request.get_json()

        elabel_code = body["elabel_code"]

        shelflocation = ShelfLocation(
            elabel_code = elabel_code,
            )

        db.session.add(shelflocation)
        db.session.commit()

        return {
            "id" : shelflocation.id,
            "elabel_code" : shelflocation.elabel_code,
        }
    
    if request.method == "GET":
        args = request.args
        # query = ShelfLocation.query
        # query = ShelfLocation.query.join(Product).add_columns(Product.name)
        query = ProductShelfLocationMapping.query

        limit = 10
        if args.get("limit", "") != "":
            limit = int(args.get("limit"))

        offset = 0
        if args.get("offset", "") != "":
            offset = int(args.get("offset"))

        # print(query)
        # epaperList = query.order_by(ShelfLocation.elabel_code).paginate(page=offset, per_page=limit, error_out=False)
        epaperList = query.order_by(ProductShelfLocationMapping.elabel_code).paginate(page=offset, per_page=limit, error_out=False)

        print("hai")
        print(query)
        response = {
            "data": [],
            "hasPrevPage": epaperList.has_prev,
            "hasNextPage": epaperList.has_next,
        }

        for shelflocation in epaperList:
            # queryproduct = ShelfLocation.query.join(Product)
            # print("hihi")
            # print(queryproduct)
            # queryproduct = queryproduct.filter(Product.shelf_location_id == shelflocation.id)
            # print("hee")
            # print(queryproduct)
            # # mappingshelfandproducts = queryproduct.order_by(ShelfLocation.elabel_code)
            # # for mappingshelfandproduct in mappingshelfandproducts:
            # # print(mappingshelfandproducts)
            # queryproduct = ShelfLocation.query.join(Product)
            response["data"].append({
                "id" : shelflocation.id,
                "elabel_code" : shelflocation.elabel_code,
                "product_name" : shelflocation.product_name
                # "product" : shelflocation.product.name
            })
        return response


@app.route("/v1/elabelcode/dropdown", methods=["GET"])
@cross_origin()
def elable_posititon_dropdown():
    if request.method == "GET":
        # query = ShelfLocation.query.all()
        query = ShelfLocation.query.join(Product, isouter = True).filter(Product.shelf_location_id == None)
        print(query)

        response = {
            "data": []
        }

        for shelflocation in query:
            # is_shelf_used = query.filter(ShelfLocation.elabel_code == Product.shelf.elabel_code).first() is not None

        # for shelflocation in query:
            response["data"].append({
                "id" : shelflocation.id,
                "elabel_code" : shelflocation.elabel_code
            })
        return response    

# @app.route("/v1/elabelcode/dropdown", methods=["GET"])
# @cross_origin()
# def elable_posititon_dropdown():
#     # args = request.args
#     query = ShelfLocation.query.join(Product)

#     # print(query)

#     response = {
#         "data": [],
#     }

#     for shelflocation in query:
#         response["data"].append({
#             "id" : shelflocation.id,
#             "elabel_code" : shelflocation.elabel_code
#         })
#     return response 
    
# @app.route("/admin/v1/products/category/<string:id>", methods=["DELETE"])
# @cross_origin()
# def delete(id):
#     category = Category.query.filter_by(id = id).first()
#     if category is None:
#         return abort(404, "not found")

#     if request.method == "DELETE":
#         db.session.delete(category)
#         db.session.commit()

#         return "data berhasil dihapus"