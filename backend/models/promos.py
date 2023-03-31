from sqlalchemy.dialects.postgresql import UUID
import uuid
import enum

from server import db

class EnumPromoType(enum.Enum):
    PERCENTAGE = "percentage"
    AMOUNT = "amount"

class Promo(db.Model):
    __tablename__ = 'promos' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = db.Column(db.String)
    description = db.Column(db.Text)
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    value = db.Column(db.Integer)
    type = db.Column(db.Enum(EnumPromoType))

    def __init__(self, code, description, start_date, type, end_date, value):
        self.code = code
        self.description = description
        self.start_date = start_date
        self.end_date = end_date
        self.value = value
        self.type = type

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)