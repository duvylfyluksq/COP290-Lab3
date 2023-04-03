# Connect to the database
# Connect to the database
from typing import Union, List
import os
import json
import pymysql
from models import User, Movie, Tvshow, Review, Comment, MovieId, ShowId
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


def addUser(User: User) -> None:
    assert User.user_id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO `user` (username,password,watchlist_movies,watchlist_shows,bio,pfp,interests) VALUES " \
              f"(%s, %s, %s, %s,%s,%s,%s)"
        cursor.execute(sql, (User.username, User.password,
                       json.dumps(User.watchlist_movies), json.dumps(User.watchlist_shows), User.bio, User.pfp, json.dumps(User.interests)))
        connection.commit()
        User.user_id = cursor.lastrowid


def editUsername(User: User, username) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `username` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (username, User.user_id))
        connection.commit()


def editPassword(User: User, password) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `password` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (password, User.user_id))
        connection.commit()


def editBio(User: User, bio) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `bio` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (bio, User.user_id))
        connection.commit()


def editInterests(User: User, interests) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `interests` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (json.dumps(interests), User.user_id))
        connection.commit()


def sort_rating_movies(order: bool):
    if order is None:
        order = False
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `rating` DESC"""
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
        sql = """SELECT * FROM `tvshow` ORDER BY `rating` DESC"""
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
        sql = """SELECT * FROM `review` ORDER BY `rating` DESC"""
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
        sql = """SELECT * FROM `review` ORDER BY `date` DESC"""
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
        sql = """SELECT * FROM `tvshow` ORDER BY `date` DESC"""
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
        sql = """SELECT * FROM `movie` ORDER BY `date` DESC"""
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


def getReview_forMovie(Movie: Movie) -> List[Review]:
    assert Movie.movie_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `movie_id`=%s"""
        cursor.execute(sql, (Movie.movie_id,))
        r = cursor.fetchall()
        L = []
        for i in r:
            L.append(Review.from_dict(i))
        return L


def getReview_forShow(Tvshow: Tvshow) -> List[Review]:
    assert Tvshow.show_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `show_id`=%s"""
        cursor.execute(sql, (Tvshow.show_id,))
        r = cursor.fetchall()
        L = []
        for i in r:
            L.append(Review.from_dict(i))
        return L


def addComment(Comment: Comment) -> None:
    assert Comment.comment_id is None
    with connection.cursor() as cursor:
        sql = "INSERT INTO `comment` (review_id, user_id, content) VALUES (%s, %s, %s)"
        cursor.execute(
            sql, (Comment.review_id, Comment.user_id, Comment.content))
        connection.commit()
        Comment.comment_id = cursor.lastrowid


def addReview(Review: Review) -> None:
    assert Review.review_id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO review (title,movie_id,show_id,user_id,likes,rating,content,creation_time) VALUES " \
              f"(%s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (Review.title, Review.movie_id, Review.show_id, Review.user_id,
                             Review.likes, Review.rating, Review.content, Review.creation_time))
    connection.commit()
    Review.review_id = cursor.lastrowid


"""
def get_reviews_fromMovie(Movie: movie):
    with connection.cursor() as cursor:
        sql = SELECT * FROM `review` where `movie_id`=%d
        cursor.execture(sql, (Movie.movie_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r


def get_reviews_fromShow(Shows: tvshow) -> Optional[review]:
    with connection.cursor() as cursor:
        sql = SELECT * FROM `review` where `show_id`=%d
        cursor.execture(sql, (Shows.show_id))
        r = cursor.fetchall()
        if r is None:
            return None
        return r
"""


def getReviews_fromUser(User: User) -> List[Review]:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchall()
        L = []
        for i in r:
            L.append(Review.from_dict(i))
        return L


def getComments_fromReview(Review: Review) -> List[Comment]:
    assert Review.review_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `comment` where `review_id`=%s"""
        cursor.execute(sql, (Review.review_id,))
        r = cursor.fetchall()
        L = []
        for i in r:
            L.append(Comment.from_dict(i))
        return L


def checkLogin(username: str, password: str) -> bool:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `user` where `username`=%s"""
        cursor.execute(sql, (username,))
        r = cursor.fetchone()
        if r is None:
            return False
        else:
            if r['password'] == password:
                return True
            else:
                return False


def LikeOrUnlike(Review: Review, User: User) -> None:
    assert Review.review_id is not None and User.user_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT `likes` FROM `review` WHERE `review_id`=%s"""
        cursor.execute(sql, (Review.review_id,))
        r = cursor.fetchone()
        d = json.loads(r[0]) if r else {}
        if (User.user_id in d.keys() and d[User.user_id]):
            d[User.user_id] = False
        else:
            d[User.user_id] = True
        sql = """UPDATE `review` SET `likes` = %s WHERE `review_id` = %s"""
        cursor.execute(sql, (json.dumps(d), Review.review_id))
        connection.commit()


""" won't this be handled later?
def countLikes_Review(Review: Review) -> int:
    count = 0
    for key in Review.likes:
        if Review.likes[key] == 1:
            count += 1
    return count
"""


def countLikes_User(User: User) -> int:
    count = 0
    with connection.cursor() as cursor:
        sql = """SELECT `likes` FROM `review`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            d = json.loads(i[0]) if i[0] else {}
            if User.user_id in d.keys():
                if d[User.user_id] == True:
                    count += 1
    return count


def countComments_User(User: User) -> int:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `comment` where `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchall()
        return len(r)


def countReviews_User(User: User) -> int:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchall()
        return len(r)


def Search(prefix: str) -> List[Union(Movie, Tvshow)]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` WHERE `title` LIKE %s
                 UNION ALL
                 SELECT * FROM `tvshow` WHERE `title` LIKE %s"""
        cursor.execute(sql, (prefix + '%', prefix + '%'))
        r = cursor.fetchall()
        L = []
        for i in r:
            if 'season' in i.keys():
                L.append(Tvshow.from_dict(i))
            else:
                L.append(Movie.from_dict(i))
        return L


def addOrDelete_fromWatchlist(User: User, title: Union[Movie, Tvshow]) -> None:
    assert User.user_id is not None
    if isinstance(title, Movie):
        assert title.movie_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_movies` FROM user WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = json.loads(r[0]) if r else {}
            if ((title.movie_id in d) and d[title.movie_id]):
                d[title.movie_id] = not d[title.movie_id]
            else:
                d[title.movie_id] = True
            sql = """UPDATE user SET `watchlist_movies` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()
    elif isinstance(title, Tvshow):
        assert title.show_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_shows` FROM `user` WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = json.loads(r[0]) if r else {}
            if ((title.show_id in d) and d[title.show_id]):
                d[title.show_id] = not d[title.show_id]
            else:
                d[title.show_id] = True
            sql = """UPDATE user SET `watchlist_shows` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            connection.commit()


def delete_fromWatchlist(User: User, title: Union[Movie, Tvshow]) -> None:
    assert User.user_id is not None
    if isinstance(title, Movie):
        assert title.movie_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_movies` FROM `user` WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = json.loads(r[0]) if r else {}
            if (d):
                d[title.movie_id] = False
                sql = """UPDATE user SET `watchlist_movies` = %s WHERE `user_id` = %s"""
                cursor.execute(sql, (json.dumps(d), User.user_id))
                connection.commit()
    elif isinstance(title, Tvshow):
        assert title.show_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_shows` FROM `user` WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = json.loads(r[0]) if r else {}
            if (d):
                d[title.show_id] = False
                sql = """UPDATE user SET `watchlist_shows` = %s WHERE `user_id` = %s"""
                cursor.execute(sql, (json.dumps(d), User.user_id))
                connection.commit()


def getWatchlist_fromUser(User: User) -> List[Union[MovieId, ShowId]]:
    assert User.user_id is not None
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT `watchlist_movies` FROM `user` WHERE `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchone()
        d = json.loads(r[0]) if r else {}
        for i in d:
            if (d[i]):
                L.append(i)
        sql = """SELECT `watchlist_shows` FROM `user` WHERE `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchone()
        d = json.loads(r[0]) if r else {}
        for i in d:
            if (d[i]):
                L.append(i)
    return L

# -----------------------------------------------------------------------------------------------------------------------
