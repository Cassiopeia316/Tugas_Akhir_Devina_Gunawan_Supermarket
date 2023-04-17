from flask import request, abort
from server import app, db
from models.users import User
from flask_cors import cross_origin

import jwt
import datetime

@app.route("/v1/signin", methods=["POST"])
@cross_origin()
def signin():
    body = request.get_json()
    email = body["email"]
    password = body["password"]

    user = User.query.filter_by(email=email).first()
    if user is None:
        return abort(404, "Email is not registered")

    is_password_matched = user.check_password(password) # true / false
    if not is_password_matched:
        return abort(401, "Wrong Password")

    # create jwt token
    token = jwt.encode({'id' : str(user.id), 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], "HS256")
    return {
        'name'  : user.name,
        'token' : token
        }

@app.route("/v1/signup", methods=["POST"])
@cross_origin()
def signup():
    body = request.get_json()

    name = body["name"]
    email = body["email"]
    role = body["role"]
    password = body["password"]
    
    user = User(
        name = name, 
        email = email,
        role = role, 
        password = password,
        )

    db.session.add(user)
    db.session.commit()

    return {
        "id" : user.id,
        "name" : user.name,
        "email" : user.email,
        "role" : user.role.value,
        "password" : user.password
    }
