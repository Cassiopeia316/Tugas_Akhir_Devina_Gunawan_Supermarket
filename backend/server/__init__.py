from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

from jinja2 import Template
import imgkit

DIR = os.getcwd()
JINJA_TEMPLATE_STRING = open("newtemplate.html", 'r').read()

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL') #DATABASE_URI akan dipakai di SQLALCHEMY, buat ngambil yang ada di env pake os.getenv
app.config['SERVICE_TEMPLATE'] = Template(JINJA_TEMPLATE_STRING)
app.config['IMAGE_CONFIG'] = imgkit.config(wkhtmltoimage=DIR + '/wkhtmltopdf/bin/wkhtmltoimage.exe')
app.config['IMGKIT_CONFIG'] = {
  'quiet': '',
  "width": os.getenv('LCD_WIDTH'),
  "height": os.getenv('LCD_HEIGHT')
}

db = SQLAlchemy(app)
# from models import price #bisa juga models.name
# from models import product

import models

@app.route("/")
def hello():
  return "Hello World!"

# @app.route("/a/a")
# def getdata():
#   html_template_string = app.config['SERVICE_TEMPLATE'].render(name = "John")
#   imgkit.from_string(html_template_string, 'hi.jpg', options=app.config['IMGKIT_CONFIG'], config=app.config['IMAGE_CONFIG'])
#   return "Get Data"


# @app.route("/testproduct")
# def epaper():
#   query = Product.query.all().first()
#   response = []
#   for product in query:
#       response.append({
#           "id": product.id,
#           "name": product.name,
#       })
#   html_template_string = app.config['SERVICE_TEMPLATE'].render(product_name = product.name)
#   imgkit.from_string(html_template_string, 'hi.jpg', options=app.config['IMGKIT_CONFIG'], config=app.config['IMAGE_CONFIG'])
#   return "Get Data"
  



# @app.route("/admin/v1/categories")
# def get_categories():
#   categories = models.categories.Category.query.all() # SELECT * FROM categories; -> <#Category>
#   response = []
#   for category in categories:
#     response.append({
#       "id": category.id,
#       "name": category.name,
#     })

#   return response

# @app.route('/admin/v1/categories', methods=["POST"])
# def create_category():
#   return

import controller
