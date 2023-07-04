from sqlalchemy.dialects.postgresql import UUID
import uuid
import random  
import string
from datetime import datetime

from server import db
from models.categories import Category
from models.shelf_locations import ShelfLocation

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = db.Column(db.String)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    category = db.relationship("Category")
    category_id = db.Column(UUID(as_uuid=True), db.ForeignKey(Category.id))
    shelf_location = db.relationship("ShelfLocation")
    shelf_location_id = db.Column(UUID(as_uuid=True), db.ForeignKey(ShelfLocation.id), unique=True)
    price = db.Column(db.Integer)
    stock = db.Column(db.Integer)
    # created_at = db.Column(db.DateTime, default=datetime.now())
    created_at = db.Column(db.DateTime())


    def __init__(self, code, name, description, category_id, shelf_location_id, price, stock):
        self.code = code
        self.name = name
        self.description = description
        self.category_id = category_id
        self.shelf_location_id = shelf_location_id
        self.price = price
        self.stock = stock
        self.created_at = datetime.utcnow()

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)

    @staticmethod
    def generate_code():
        length = 12
        is_found = True
        while is_found:
            sample_string =  string.ascii_letters + string.digits
            result = ''.join((random.choice(sample_string)) for x in range(length))
            is_found = Product.query.filter_by(code = result).first() is not None # select * from products where code = result limit 1
        return result