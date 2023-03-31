from sqlalchemy.dialects.postgresql import UUID
import uuid

from server import db

class Category(db.Model):
    __tablename__ = 'categories' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'id {self.id} name {self.name}'