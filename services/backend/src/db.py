from sqlmodel import SQLModel, Session, create_engine
from models import *


sqlite_file_name = "glitter.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session() -> Session:
    return Session(engine)


def main():
    create_db_and_tables()


if __name__ == "__main__":
    main()
