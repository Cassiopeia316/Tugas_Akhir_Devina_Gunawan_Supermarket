from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime

from server import db
from models.products import Product
from models.users import User

class ItemLog(db.Model):
    __tablename__ = 'item_logs' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_id = db.Column(UUID(as_uuid=True), db.ForeignKey(Product.id))
    stock = db.Column(db.Integer)
    retur_date = db.Column(db.Date)
    created_by = db.Column(UUID(as_uuid=True), db.ForeignKey(User.id))
    created_at = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, product_id, stock, retur_date, created_by, created_at):
        self.product_id = product_id
        self.stock = stock
        self.retur_date = retur_date
        self.created_by = created_by
        self.created_at = created_at


    # def __repr__(self):
    #     return '<id {}>'.format(self.id)