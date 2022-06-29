from typing import Optional
from sqlmodel import Field, Relationship, SQLModel


class Tag(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    posts: list["Post"] = Relationship(back_populates="tags", link_model="TagOnPost")


class Post(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    essay: bool

    tags: list[Tag] = Relationship(back_populates="posts", link_model="TagOnPost")


class TagOnPost(SQLModel, table=True):
    tag_id: Optional[int] = Field(default=None, foreign_key="tag.id", primary_key=True)
    post_id: Optional[int] = Field(
        default=None, foreign_key="post.id", primary_key=True
    )
