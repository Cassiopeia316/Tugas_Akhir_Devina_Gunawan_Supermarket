from sqlalchemy.dialects.postgresql import UUID
import uuid
import enum

from server import db

class EnumShelfPosition(enum.Enum):
    LEFT = "left"
    RIGHT = "right"

class ShelfLocation(db.Model):
    __tablename__ = 'shelf_locations' #untuk mengganti judul / nama tabel

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = db.Column(db.String)
    floor = db.Column(db.Integer)
    aisle = db.Column(db.Integer)
    position = db.Column(db.Enum(EnumShelfPosition))
    row = db.Column(db.Integer)
    column = db.Column(db.Integer)

    def __init__(self, code, floor, aisle, position, row, column):
        self.code = code
        self.floor = floor
        self.aisle = aisle
        self.position = position
        self.row = row
        self.column = column

    # def __repr__(self):
    #     return '<id {}>'.format(self.id)