from sqlalchemy.dialects.postgresql import UUID
import uuid
import enum

from server import db

class EnumUsersRole(enum.Enum):
    ADMIN = "admin"
    BUYER = "buyer"

class User(db.Model):
    __tablename__ = 'users' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String)
    email = db.Column(db.String)
    role = db.Column(db.Enum(EnumUsersRole))

    def __init__(self, name, email, role):
        self.name = name
        self.email = email
        self.role = role

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)