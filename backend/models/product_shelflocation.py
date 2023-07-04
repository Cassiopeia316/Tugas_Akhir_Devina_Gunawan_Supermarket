from sqlalchemy.dialects.postgresql import UUID
import uuid

from server import db
# from models.promos import Promo
# from models.products import Product
from datetime import datetime

class ProductShelfLocationMapping(db.Model):
    __tablename__ = 'product_shelflocation' #untuk mengganti judul / nama tabel

    product_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_name = db.Column(db.String)
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    elabel_code = db.Column(db.String)
    created_at = created_at = db.Column(db.DateTime())

    def __init__(self, product_id, product_name, id, elabel_code, created_at):
        self.product_id = product_id
        self.product_name = product_name
        self.id = id
        self.elabel_code = elabel_code
        self.created_at = datetime.utcnow()


    # def __repr__(self):
    #     return '<id {}>'.format(self.id)