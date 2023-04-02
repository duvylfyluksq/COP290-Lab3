# Connect to the database
from typing import Optional
import os

import pymysql

from models import comment, movie, shows, review, title, user, user_id

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

connection = pymysql.connect(
    host=db_host,
    user=db_user,
    password=db_password,
    database=db_name,
    cursorclass=pymysql.cursors.DictCursor,
)

# -------------------------------------------------------------------------------------------------------------------------------
def add_user(User: user) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO User (username,password,watchlist_movies,watchlist_shows,bio,pfp,interests) VALUES " \
              f"(%s, %s, %s, %s,%s,%s,%s)"
        cursor.execute(sql, (User.username, User.password,
                       User.watchlist_movie, User.watchlist_show, User.bio, User.pfp, User.interests))
        connection.commit()
        User.user_id = cursor.lastrowid

def edit_username(User: user,newname) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET username = %s WHERE user_id = %d"
        cursor.execute(sql, (newname, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid

def edit_password(User: user, password) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET password = %s WHERE user_id = %d"
        cursor.execute(sql, (password, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid

def edit_bio(User: user,newbio) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET bio = %s WHERE user_id = %d"
        cursor.execute(sql, (newbio, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid
def edit_pfp(User: user,newpfp) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET pfp = %s WHERE user_id = %d"
        cursor.execute(sql, (newpfp, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid
def edit_interests(User:user, newinterest):
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User Set Interest = %s WHERE user_id = %d "
        cursor.execute(sql,(newinterest,User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid

def add_comment(Comment: comment) -> None:
    assert Comment.comment_id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO comment (comment_id,review_id,user_id,content)" \
              f"(%d,%d,%d,%s)"
        cursor.execute(sql, (Comment.comment_id, Comment.review_id,
                       Comment.user_id, Comment.content))
    connection.commit()
    Comment.comment_id = cursor.lastrowid


def add_review(Review: review) -> None:
    assert Review.id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO review (movie_id,user_id,likes,rating,content) VALUES " \
              f"( %s ,%s , %s, %s,%s)"
        cursor.execute(sql, (Review.review_id, Review.movie_id,
                       Review.user_id, Review.likes, review.rating, Review.content))
    connection.commit()
    Review.review_id = cursor.lastrowid


def get_reviews_fromMovie(Movie: movie) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'movie_id'=%d"""
        cursor.execture(sql, (Movie.movie_id))
        r = cursor.fetchone()
        if r is None:
            return None
        return review.from_dict(r)


def get_reviews_fromShow(Shows: shows) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'show_id'=%d"""
        cursor.execture(sql, (Shows.show_id))
        r = cursor.fetchone()
        if r is None:
            return None
        return review.from_dict(r)


def get_reviews_fromUser(User: user) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'user_id'=%d"""
        cursor.execture(sql, (User.user_id))
        r = cursor.fetchone()
        if r is None:
            return None
        return review.from_dict(r)





 # -------------------------------------------------------------------------------------------------------------------------------------------------------


def get_category_from_id(id: int) -> Optional[Category]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `category` WHERE `id`=%d"""
        cursor.execute(sql, (id))
        r = cursor.fetchone()
        if r is None:
            return None
        return Category.from_dict(r)


def get_category_from_name(name: str) -> Optional[Category]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `category` WHERE `name`=%s"""
        cursor.execute(sql, (name))
        r = cursor.fetchone()
        if r is None:
            return None
        return Category.from_dict(r)


def add_category(category: Category) -> None:
    assert category.id is None
    c = get_category_from_name(category.name)
    if c is not None:
        category.id = c.id
        return

    with connection.cursor() as cursor:
        sql = f"INSERT INTO category (name) VALUES (%s)"
        cursor.execute(sql, (category.name))
        connection.commit()
        category.id = cursor.lastrowid


def get_tag_from_id(id: int) -> Optional[Tag]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tag` WHERE `id`=%d"""
        cursor.execute(sql, (id))
        r = cursor.fetchone()
        if r is None:
            return None
        return Tag.from_dict(r)


def get_tag_from_name(name: str) -> Optional[Tag]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tag` WHERE `name`=%s"""
        cursor.execute(sql, (name))
        r = cursor.fetchone()
        if r is None:
            return None
        return Tag.from_dict(r)


def add_tag(tag: Tag) -> None:
    assert tag.id is None
    t = get_tag_from_name(tag.name)
    if t is not None:
        tag.id = t.id
        return

    with connection.cursor() as cursor:
        sql = f"INSERT INTO tag (name) VALUES (%s)"
        cursor.execute(sql, (tag.name))
        connection.commit()
        tag.id = cursor.lastrowid


def add_pet(pet: Pet) -> None:
    assert pet.id is None
    if pet.category.id is None:
        add_category(pet.category)
    for tag in pet.tags:
        if tag.id is None:
            add_tag(tag)

    with connection.cursor() as cursor:
        sql = f"INSERT INTO pet (name, photo_urls, category_id, status) VALUES " \
              f"(%s, %s, %s, %s)"
        cursor.execute(sql, (pet.name, pet.photo_urls,
                       pet.category.id, pet.status))
        connection.commit()
        pet.id = cursor.lastrowid

        sql = f"INSERT INTO pet_tag (pet_id, tag_id) VALUES (%s, %s)"
        for tag in pet.tags:
            cursor.execute(sql, (pet.id, tag.id))
        connection.commit()
