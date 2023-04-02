# Connect to the database
# Connect to the database
from typing import Optional, Union
import os
import json
import pymysql
from models import comment, movie, tvshow, review, user, user_id
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
        watchlist_movies = json.dumps(User.watchlist_movies)
        watchlist_shows = json.dumps(User.watchlist_shows)
        cursor.execute(sql, (User.username, User.password,
                       watchlist_movies, watchlist_shows, User.bio, User.pfp, User.interests))
        connection.commit()
        User.user_id = cursor.lastrowid


def edit_username(User: user, newname) -> None:
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


def sort_rating_movies(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'movie' ORDER BY 'rating' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(movie.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def sort_rating_shows(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'shows' ORDER BY 'rating' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(tvshow.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def sort_rating_reviews(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' ORDER BY 'rating' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(review.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def sort_most_recent_reviews(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' ORDER BY 'date' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(review.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def sort_most_recent_shows(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'tvshow' ORDER BY 'date' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(tvshow.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def sort_most_recent_movies(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'movie' ORDER BY 'date' DESC"""
        cursor.execture(sql)
        r = cursor.fetchall()
        if r is None:
            return None
        l = []
        for a in r:
            l.append(movie.from_dict(a))
        if order is True:
            return l.reverse()
        return l


def edit_bio(User: user, newbio) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET bio = %s WHERE user_id = %d"
        cursor.execute(sql, (newbio, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid


def edit_pfp(User: user, newpfp) -> None:
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User SET pfp = %s WHERE user_id = %d"
        cursor.execute(sql, (newpfp, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid


def edit_interests(User: user, newinterest):
    assert User.id is None
    with connection.cursor() as cursor:
        sql = f"UPDATE User Set Interest = %s WHERE user_id = %d "
        cursor.execute(sql, (newinterest, User.user_id))
        connection.commit()
        User.user_id = cursor.lastrowid


def get_review_for_movie(Movie: movie):
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'movie_id'=%d"""
        cursor.execture(sql, (Movie.movie_id))
        r = cursor.fetchall()
        if r is None:
            return None
        else:
            l = []
            for a in r:
                l.append(review.from_dict(a))
            return l


def get_review_for_show(Show: tvshow):
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'show_id'=%d"""
        cursor.execture(sql, (Show.show_id))
        r = cursor.fetchall()

        if r is None:
            return None
        l = []
        for a in r:
            l.append(review.from_dict(a))
        return l


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


def get_reviews_fromMovie(Movie: movie):
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'movie_id'=%d"""
        cursor.execture(sql, (Movie.movie_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r


def get_reviews_fromShow(Shows: tvshow) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'show_id'=%d"""
        cursor.execture(sql, (Shows.show_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r


def get_reviews_fromUser(User: user) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'user_id'=%d"""
        cursor.execture(sql, (User.user_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r


def get_comments_fromReview(Review: review) -> Optional[comment]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'comment' where 'review_id'=%d"""
        cursor.execture(sql, (Review.review_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r


def check_login(username, password) -> bool:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'User' where 'username'=%s"""
        cursor.execute(sql, (username))
        r = cursor.fetchone()
        if r is None:
            return False
        else:
            if r['password'] == password:
                return True
            else:
                return False


def count_likes_review(Review: review) -> int:
    count = 0
    for key in Review.likes:
        if Review.likes[key] == 1:
            count += 1
    return count


def count_likes_user(User: user) -> int:
    count = 0
    with connection.cursor() as cursor:
        sql = """SELECT 'likes' FROM 'review'"""
        cursor.execute(sql)
        r = cursor.fetchall()
        if r is None:
            return 0
        else:
            for key in r:
                if key in r:
                    if r[key] == True:
                        count += 1
    return count


def count_comments(Review: review) -> int:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'comment' where 'review_id'=%d"""
        cursor.execture(sql, (Review.review_id))
        r = cursor.fetchone()
        if r is None:
            return 0
        else:
            return len(r)


def count_posts(User: user):
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'review' where 'user_id'=%d"""
        cursor.execture(sql, (User.user_id))
        r = cursor.fetchone()
        if r is None:
            return 0
        else:
            return len(r)
# function to match prefix for autocomplete


def autocomplete_search(prefix):
    with connection.cursor() as cursor:
        sql = """SELECT * FROM 'movie' where 'title' LIKE %s"""
        cursor.execute(sql, (prefix + '%'))
        r = cursor.fetchall()
        if r is None:
            return None
        else:
            return r


def add_or_delete_fromWatchlist(User: user, title: Union[movie, tvshow]):
    if isinstance(title, movie):
        with connection.cursor() as cursor:
            sql = """SELECT 'watchlist_movies' FROM user WHERE 'user_id'=%d"""
            cursor.execute(sql, (User.user_id))
            r = cursor.fetchone()
            d = json.dumps(r[0]) if r else {}
            if ((title.movie_id in d) and d[title.movie_id]):
                d[title.movie_id] = not d[title.movie_id]
            else:
                d[title.movie_id] = True
            sql = """UPDATE user SET 'watchlist_shows' = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()
    elif isinstance(title, tvshow):
        with connection.cursor() as cursor:
            sql = """SELECT 'watchlist_shows' FROM user WHERE 'user_id'=%d"""
            cursor.execute(sql, (User.user_id))
            r = cursor.fetchone()
            d = json.dumps(r[0]) if r else {}
            if ((title.show_id in d) and d[title.show_id]):
                d[title.show_id] = not d[title.show_id]
            else:
                d[title.show_id] = True
            sql = """UPDATE user SET 'watchlist_shows' = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()


def delete_fromWatchlist(User: user, title: Union[movie, tvshow]):
    if isinstance(title, movie):
        with connection.cursor() as cursor:
            sql = """SELECT 'watchlist_movies' FROM user WHERE 'user_id'=%d"""
            cursor.execute(sql, (User.user_id))
            r = cursor.fetchone()
            d = json.dumps(r[0]) if r else {}
            d[title.movie_id] = False
            sql = """UPDATE user SET 'watchlist_shows' = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()
    elif isinstance(title, tvshow):
        with connection.cursor() as cursor:
            sql = """SELECT 'watchlist_shows' FROM user WHERE 'user_id'=%d"""
            cursor.execute(sql, (User.user_id))
            r = cursor.fetchone()
            d = json.dumps(r[0]) if r else {}
            d[title.show_id] = False
            sql = """UPDATE user SET 'watchlist_shows' = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()


def get_watchlist_fromUser(User: user):
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT 'watchlist_movies' FROM user WHERE 'user_id'=%d"""
        cursor.execute(sql, (User.user_id))
        r = cursor.fetchone()
        d = json.dumps(r[0]) if r else {}
        for i in d:
            if (d[i]):
                L.append(i)
        sql = """SELECT 'watchlist_shows' FROM user WHERE 'user_id'=%d"""
        cursor.execute(sql, (User.user_id))
        r = cursor.fetchone()
        d = json.dumps(r[0]) if r else {}
        for i in d:
            if (d[i]):
                L.append(i)
    return L

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
