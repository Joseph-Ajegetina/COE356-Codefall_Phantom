from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    password = Column(String(64))

    def __init__(self, name=None, password=None):
        assert name is not None
        assert password is not None

        self.name = name
        self.password = password 

    def __repr__(self):
        return '<User %r>' % (self.name)
