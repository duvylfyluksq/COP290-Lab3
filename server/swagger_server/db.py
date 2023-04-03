# Connect to the database
# Connect to the database
from typing import Union, List, Optional
import os
import json
import pymysql
from models import User, Movie, Tvshow, Review, Comment, MovieId, ShowId

connection = pymysql.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME"),
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


def editUsername(User: User, username: str) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `username` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (username, User.user_id))
        connection.commit()


def editPassword(User: User, password: str) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `password` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (password, User.user_id))
        connection.commit()


def editBio(User: User, bio: str) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `bio` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (bio, User.user_id))
        connection.commit()


def editInterests(User: User, interests: List[str]) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `interests` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (json.load(interests), User.user_id))
        connection.commit()


def sortLikes_Review(order: Optional[bool]) -> List[Review]:
    if order is None:
        order = False
    with connection.cursor() as cursor:
        L = []
        sql = """SELECT * FROM `review`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [(Review.from_dict(i), sum(json.loads(i['likes']).values()))
             for i in r]
        L = sorted(L, key=lambda x: x[1], reverse=(not order))
        return [i for (i, _) in L]


def sortRecent_Review(order: Optional[bool]) -> List[Review]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` ORDER BY `creation_time` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Review.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortRating_Movie(order: Optional[bool]) -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `rating` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Movie.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortRating_Tvshow(order: Optional[bool]) -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `rating` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Tvshow.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortRecent_Movie(order: Optional[bool]) -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `release_date` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Movie.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortRecent_Tvshow(order: Optional[bool]) -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `release_date` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Tvshow.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortLex_Movie(order: Optional[bool]) -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `title` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Movie.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortLex_Tvshow(order: Optional[bool]) -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `title` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        L = [Tvshow.from_dict(i) for i in r]
        if order:
            L.reverse()
        return L


def sortPop_Movie(order: Optional[bool]) -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT `movie_id`, COUNT(*) as `review_count` FROM `review` GROUP BY `movie_id`"""
        cursor.execute(sql)
        review_counts = {i['movie_id']: i['review_count']
                         for i in cursor.fetchall()}
        sql = """SELECT * FROM `movie`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        movies = [Movie.from_dict(i) for i in r]
        movies_with_review_counts = [
            (i, review_counts.get(i.movie_id, 0)) for i in movies]
        L = sorted(
            movies_with_review_counts, key=lambda x: x[1], reverse=True)
        if order:
            L.reverse()
        return [i for (i, _) in L]


def sortPop_Tvshow(order: Optional[bool]) -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT `show_id`, COUNT(*) as `review_count` FROM `review` GROUP BY `show_id`"""
        cursor.execute(sql)
        review_counts = {i['show_id']: i['review_count']
                         for i in cursor.fetchall()}
        sql = """SELECT * FROM `tvshow`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        shows = [Tvshow.from_dict(i) for i in r]
        shows_with_review_counts = [
            (i, review_counts.get(i.movie_id, 0)) for i in shows]
        L = sorted(
            shows_with_review_counts, key=lambda x: x[1], reverse=True)
        if order:
            L.reverse()
        return [i for (i, _) in L]


def getReviews_forMovie(Movie: Movie) -> List[Review]:
    assert Movie.movie_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `movie_id`=%s"""
        cursor.execute(sql, (Movie.movie_id,))
        r = cursor.fetchall()
        return [Review.from_dict(i) for i in r]


def getReviews_forShow(Tvshow: Tvshow) -> List[Review]:
    assert Tvshow.show_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `show_id`=%s"""
        cursor.execute(sql, (Tvshow.show_id,))
        r = cursor.fetchall()
        return [Review.from_dict(i) for i in r]


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


def getReviews_forUser(User: User) -> List[Review]:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchall()
        return [Review.from_dict(i) for i in r]


def getComments_fromReview(Review: Review) -> List[Comment]:
    assert Review.review_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `comment` where `review_id`=%s"""
        cursor.execute(sql, (Review.review_id,))
        r = cursor.fetchall()
        return [Comment.from_dict(i) for i in r]


def checkLogin(username: str, password: str) -> bool:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `user` where `username`=%s"""
        cursor.execute(sql, (username,))
        r = cursor.fetchone()
        if r is not None and r['password'] == password:
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


def filterGenre(genres: List[str]) -> List[Union[Movie, Tvshow]]:
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` WHERE JSON_CONTAINS_ANY(%s, `genres`)"""
        for i in range(1, len(genres)):
            sql += """ OR JSON_CONTAINS_ANY(%s, `genres`)"""
        cursor.execute(sql, genres)
        r = cursor.fetchall()
        for i in r:
            L.append(Movie.from_dict(i))
        sql = """SELECT * FROM `tvshow` WHERE JSON_CONTAINS_ANY(%s, `genres`)"""
        for i in range(1, len(genres)):
            sql += """ OR JSON_CONTAINS_ANY(%s, `genres`)"""
        cursor.execute(sql, genres)
        r = cursor.fetchall()
        for i in r:
            L.append(Tvshow.from_dict(i))
    return L
