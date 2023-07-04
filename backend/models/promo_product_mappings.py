from sqlalchemy.dialects.postgresql import UUID
import uuid

from server import db
from models.promos import Promo
from models.products import Product

class PromoProductMapping(db.Model):
    __tablename__ = 'promo_product_mappings' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    promo_id = db.Column(UUID(as_uuid=True), db.ForeignKey(Promo.id))
    product_id = db.Column(UUID(as_uuid=True), db.ForeignKey(Product.id))
    promo = db.relationship("Promo")
    product = db.relationship("Product")

    def __init__(self, promo_id, product_id):
        self.promo_id = promo_id
        self.product_id = product_id

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)