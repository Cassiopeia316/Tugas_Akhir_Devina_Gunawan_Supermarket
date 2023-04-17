from sqlalchemy.dialects.postgresql import UUID
import uuid
import enum

from server import db, bcrypt

class EnumUsersRole(enum.Enum):
    admin = "admin"
    buyer = "buyer"

class User(db.Model):
    __tablename__ = 'users' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String)
    email = db.Column(db.String)
    role = db.Column(db.Enum(EnumUsersRole))
    password = db.Column(db.String)

    def __init__(self, name, email, role, password):
        self.name = name
        self.email = email
        self.role = role
        self.password = bcrypt.generate_password_hash(password, 10).decode('utf-8')

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password) # returns True