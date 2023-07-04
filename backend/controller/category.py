from flask import request, abort
from server import app, db
from flask_cors import cross_origin

from models.categories import Category

@app.route("/v1/products/category", methods=["POST", "GET"])
@cross_origin()
def create_category():
    if request.method == "POST":
        body = request.get_json()

        name = body["name"]

        category = Category(
            name = name,
            )

        db.session.add(category)
        db.session.commit()

        return {
            "id" : category.id,
            "name" : category.name,
        }
    
    if request.method == "GET":
        # service (yg bawah) ---------------------------
        query = Category.query
        categorylist = query.order_by(Category.name)

        # serializer (yg bawah) ------------------------
        # response = []
        response = {
            "data": []
        }
        for category in categorylist:
            response["data"].append({
                "id": category.id,
                "name": category.name,
            })
        return response
    
@app.route("/admin/v1/products/category/<string:id>", methods=["DELETE"])
@cross_origin()
def delete(id):
    category = Category.query.filter_by(id = id).first()
    if category is None:
        return abort(404, "not found")

    if request.method == "DELETE":
        db.session.delete(category)
        db.session.commit()

        return "data berhasil dihapus"

        # return {
        #     "id" : category.id,
        #     "name" : category.name,
        # }