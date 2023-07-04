from sqlalchemy.dialects.postgresql import UUID
import uuid

from server import db

class EpaperProductMapping(db.Model):
    __tablename__ = 'promo_product_mappings' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    shelflocation_id = db.relationship("ShelfLocation")
    product_id = db.relationship("products")

    def __init__(self, shelflocation_id, product_id):
        self.shelflocation_id = shelflocation_id
        self.product_id = product_id

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)