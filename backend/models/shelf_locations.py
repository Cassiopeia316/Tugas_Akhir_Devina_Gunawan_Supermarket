from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime

from server import db

class ShelfLocation(db.Model):
    __tablename__ = 'shelf_locations' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    elabel_code = db.Column(db.String)
    created_at = db.Column(db.DateTime())
    # product = db.relationship("Product")

    def __init__(self, elabel_code):
        self.elabel_code = elabel_code
        self.created_at = datetime.utcnow()

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)