from typing import Union, List, Optional, Tuple
import datetime
import os
import json
import pymysql
from swagger_server.models import User, Movie, Tvshow, Review, Comment, MovieId, ShowId, Title

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="fmd",
    cursorclass=pymysql.cursors.DictCursor,
)
# -------------------------------------------------------------------------------------------------------------------------------


def getUser(Id: int) -> User:
    assert Id is not None
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `user` WHERE `user_id` = %s"
        cursor.execute(sql, (Id,))
        r = cursor.fetchone()
        r['watchlist_movies'] = json.loads(r['watchlist_movies'])
        r['watchlist_shows'] = json.loads(r['watchlist_shows'])
        r['interests'] = json.loads(r['interests'])
        return (User.from_dict(r))


def getMovie(Id: int) -> Movie:
    assert Id is not None
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `movie` WHERE `movie_id` = %s"
        cursor.execute(sql, (Id,))
        r = cursor.fetchone()
        r['genres'] = json.loads(r['genres'])
        r['cast'] = json.loads(r['cast'])
        r['movie_id'] = {'id': r['movie_id']}
        r['release_date'] = r['release_date'].strftime("%Y-%m-%d")
        return Movie.from_dict(r)


def getAllMovies() -> List[Movie]:
    L = []
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `movie`"
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            L.append(Movie.from_dict(i))
    return L


def getAllTvshows() -> List[Tvshow]:
    L = []
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `tvshow`"
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            L.append(Tvshow.from_dict(i))
    return L


def getTvshow(Id: int) -> Tvshow:
    assert Id is not None
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `tvshow` WHERE `show_id` = %s"
        cursor.execute(sql, (Id,))
        r = cursor.fetchone()
        r['genres'] = json.loads(r['genres'])
        r['cast'] = json.loads(r['cast'])
        r['show_id'] = {'id': r['show_id']}
        r['release_date'] = r['release_date'].strftime("%Y-%m-%d")
        return Tvshow.from_dict(r)


def getReview(Id: int) -> Review:
    assert Id is not None
    with connection.cursor() as cursor:
        sql = f"SELECT * FROM `review` WHERE `review_id` = %s"
        cursor.execute(sql, (Id,))
        r = cursor.fetchone()
        r['likes'] = json.loads(r['likes'])
        r['show_id'] = {'id': r['show_id']}
        r['movie_id'] = {'id': r['movie_id']}
        r['creation_time'] = r['creation_time'].strftime("%Y-%m-%d %H:%M:%S")
        return (Review.from_dict(r))


def addUser(User: User) -> None:
    assert User.user_id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO `user` (username,password,watchlist_movies,watchlist_shows,bio,pfp,interests) VALUES " \
              f"(%s, %s, %s, %s,%s,%s,%s)"
        cursor.execute(sql, (User.username, User.password,
                       json.dumps(User.watchlist_movies), json.dumps(User.watchlist_shows), User.bio, User.pfp, json.dumps(User.interests)))
        User.user_id = cursor.lastrowid
        connection.commit()


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


def editPfp(User: User, pfp: str) -> None:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = f"UPDATE `user` SET `pfp` = %s WHERE `user_id` = %s"
        cursor.execute(sql, (pfp, User.user_id))
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
        cursor.execute(sql, (json.dumps(interests), User.user_id))
        connection.commit()


def sortLikes_Review_User(user_id: int) -> List[Review]:
    L = getReviews_forUser(getUser(user_id))
    return sorted(L, key=lambda x: sum(x.likes.values()), reverse=True)


def sortRecent_Review_User(user_id: int) -> List[Review]:
    L = getReviews_forUser(getUser(user_id))
    return sorted(L, key=lambda x: x.creation_time, reverse=True)


def sortLikes_Review_Title(id: Union[MovieId, ShowId]) -> List[Review]:
    L = []
    if (isinstance(id, MovieId)):
        L = getReviews_forMovie(getMovie(id.id))
    elif (isinstance(id, ShowId)):
        L = getReviews_forShow(getTvshow(id.id))
    return sorted(L, key=lambda x: sum((x.likes).values()), reverse=True)


def sortRecent_Review_Title(id: Union[MovieId, ShowId]) -> List[Review]:
    L = []
    if (isinstance(id, MovieId)):
        L = getReviews_forMovie(getMovie(id.id))
    elif (isinstance(id, ShowId)):
        L = getReviews_forShow(getTvshow(id.id))

    return sorted(L, key=lambda x: x.creation_time, reverse=True)


def sortReviewUser(user_id: int, sort_type: str, sort_order: Optional[bool]) -> List[Review]:
    L = []
    if (sort_type == "Recent"):
        L = sortRecent_Review_User(user_id)
    elif (sort_type == "Likes"):
        L = sortLikes_Review_User(user_id)
    elif (sort_type is None):
        L = getReviews_forUser(getUser(user_id))
    if (sort_order):
        L.reverse()
    return L


def sortReviewTitle(id: Union[ShowId, MovieId], sort_type: str, sort_order: Optional[bool]) -> List[Review]:
    L = []
    if (sort_type == "Recent"):
        L = sortRecent_Review_Title(id)
    elif (sort_type == "Likes"):
        L = sortLikes_Review_Title(id)
    elif (sort_type is None):
        if (isinstance(id, MovieId)):
            L = getReviews_forMovie(getMovie(id.id))
        elif (isinstance(id, ShowId)):
            L = getReviews_forShow(getTvshow(id.id))
    if (sort_order):
        L.reverse()
    return L


def sortRating_Movie() -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `rating` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Movie.from_dict(i) for i in r]
        return L


def sortRating_Tvshow() -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `rating` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Tvshow.from_dict(i) for i in r]
        return L


def mergeRating(a: List[Movie], b: List[Tvshow]) -> List[Union[Movie, Tvshow]]:
    return (sorted(a+b, key=lambda x: x.rating, reverse=True))


def sortRecent_Movie() -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `release_date` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Movie.from_dict(i) for i in r]
        return L


def sortRecent_Tvshow() -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `release_date` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Tvshow.from_dict(i) for i in r]
        return L


def mergeRecent(a: List[Movie], b: List[Tvshow]) -> List[Union[Movie, Tvshow]]:
    return (sorted(a+b, key=lambda x: x.release_date, reverse=True))


def sortLex_Movie() -> List[Movie]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` ORDER BY `title` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Movie.from_dict(i) for i in r]
        return L


def sortLex_Tvshow() -> List[Tvshow]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `tvshow` ORDER BY `title` DESC"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        L = [Tvshow.from_dict(i) for i in r]
        return L


def mergeLex(a: List[Movie], b: List[Tvshow]) -> List[Union[Movie, Tvshow]]:
    return (sorted(a+b, key=lambda x: x.title, reverse=True))


def sortPop_Movie() -> List[Tuple[Movie, int]]:
    with connection.cursor() as cursor:
        sql = """SELECT `movie_id`, COUNT(*) as `review_count` FROM `review` GROUP BY `movie_id`"""
        cursor.execute(sql)
        review_counts = {int(i['movie_id']): i['review_count']
                         for i in cursor.fetchall() if i['movie_id'] is not None}
        sql = """SELECT * FROM `movie`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        movies = [Movie.from_dict(i) for i in r]
        movies_with_review_counts = [
            (i, review_counts.get(i.movie_id.id, 0)) for i in movies]
        L = sorted(
            movies_with_review_counts, key=lambda x: x[1], reverse=True)
        return L


def sortPop_Tvshow() -> List[Tuple[Tvshow, int]]:
    with connection.cursor() as cursor:
        sql = """SELECT `show_id`, COUNT(*) as `review_count` FROM `review` GROUP BY `show_id`"""
        cursor.execute(sql)
        review_counts = {int(i['show_id']): i['review_count']
                         for i in cursor.fetchall() if i['show_id'] is not None}
        sql = """SELECT * FROM `tvshow`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
        shows = [Tvshow.from_dict(i) for i in r]
        shows_with_review_counts = [
            (i, review_counts.get(i.show_id.id, 0)) for i in shows]
        L = sorted(
            shows_with_review_counts, key=lambda x: x[1], reverse=True)
        return L


def mergePop(a: List[Tuple[Movie, int]], b: List[Tuple[Tvshow, int]]) -> List[Tuple[Union[Movie, Tvshow], int]]:
    return (sorted(a+b, key=lambda x: x[1], reverse=True))


def sortBrowse(sort_type: str, sort_order: Optional[bool]) -> List[Union[Movie, Tvshow]]:
    if (sort_type == "Rat"):
        L = mergeRating(sortRating_Movie(), sortRating_Tvshow())
    elif (sort_type == "Rel"):
        L = mergeRecent(sortRecent_Movie(), sortRating_Tvshow())
    elif (sort_type == "Lex"):
        L = mergeLex(sortLex_Movie(), sortLex_Tvshow())
    elif (sort_type == "Pop"):
        L = mergePop(sortPop_Movie(), sortPop_Tvshow())
        L = [i for i, _ in L]
    elif (sort_type is None):
        L = getAllMovies()+getAllTvshows()
    else:
        raise TypeError
    if (sort_order):
        L.reverse()

    return L


def getReviews_forMovie(Movie: Movie) -> List[Review]:
    assert Movie.movie_id.id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `movie_id`=%s"""
        cursor.execute(sql, (Movie.movie_id.id,))
        r = cursor.fetchall()
        for i in r:
            i['likes'] = json.loads(i['likes'])
            i['show_id'] = {'id': i['show_id']}
            i['movie_id'] = {'id': i['movie_id']}
            i['creation_time'] = i['creation_time'].strftime(
                "%Y-%m-%d %H:%M:%S")
        return [Review.from_dict(i) for i in r]


def getReviews_forShow(Tvshow: Tvshow) -> List[Review]:
    assert Tvshow.show_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `show_id`=%s"""
        cursor.execute(sql, (Tvshow.show_id.id,))
        r = cursor.fetchall()
        for i in r:
            i['likes'] = json.loads(i['likes'])
            i['show_id'] = {'id': i['show_id']}
            i['movie_id'] = {'id': i['movie_id']}
            i['creation_time'] = i['creation_time'].strftime(
                "%Y-%m-%d %H:%M:%S")
        return [Review.from_dict(i) for i in r]


def addComment(Comment: Comment) -> None:
    assert Comment.comment_id is None
    with connection.cursor() as cursor:
        sql = "INSERT INTO `comment` (review_id, user_id, content) VALUES (%s, %s, %s)"
        cursor.execute(
            sql, (Comment.review_id, Comment.user_id, Comment.content))
        Comment.comment_id = cursor.lastrowid
        connection.commit()


def addReview(Review: Review) -> None:
    assert Review.review_id is None
    with connection.cursor() as cursor:
        sql = f"INSERT INTO review (title,movie_id,show_id,user_id,likes,rating,content,creation_time) VALUES " \
              f"(%s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (Review.title, Review.movie_id, Review.show_id, Review.user_id,
                             json.dumps(Review.likes), Review.rating, Review.content, Review.creation_time))
        Review.review_id = cursor.lastrowid
        connection.commit()


def getReviews_forUser(User: User) -> List[Review]:
    assert User.user_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `review` where `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchall()
        for i in r:
            i['likes'] = json.loads(i['likes'])
            i['show_id'] = {'id': i['show_id']}
            i['movie_id'] = {'id': i['movie_id']}
            i['creation_time'] = i['creation_time'].strftime(
                "%Y-%m-%d %H:%M:%S")
        return [Review.from_dict(i) for i in r]


def getComments_fromReview(Review: Review) -> List[Comment]:
    assert Review.review_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `comment` where `review_id`=%s"""
        cursor.execute(sql, (Review.review_id,))
        r = cursor.fetchall()
        return [Comment.from_dict(i) for i in r]


def checkLogin(username: str, password: str) -> Tuple[bool, Optional[User]]:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `user` where `username`=%s"""
        cursor.execute(sql, (username,))
        r = cursor.fetchone()
        if r is not None and r['password'] == password:
            r['watchlist_movies'] = json.loads(r['watchlist_movies'])
            r['watchlist_shows'] = json.loads(r['watchlist_shows'])
            r['interests'] = json.loads(r['interests'])
            return (True, User.from_dict(r))
        else:
            return (False, None)


def checKUsername(username: str) -> bool:
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `user` where `username`=%s"""
        cursor.execute(sql, (username,))
        r = cursor.fetchone()
        if r is not None:
            return True
        else:
            return False


def LikeOrUnlike(Review: Review, User: User) -> None:
    assert Review.review_id is not None and User.user_id is not None
    with connection.cursor() as cursor:
        sql = """SELECT `likes` FROM `review` WHERE `review_id`=%s"""
        cursor.execute(sql, (Review.review_id,))
        r = cursor.fetchone()
        d = {int(k): v for k, v in json.loads(
            r['likes']).items()}
        if (User.user_id in d.keys() and d[User.user_id]):
            d[User.user_id] = False
        else:
            d[User.user_id] = True
        sql = """UPDATE `review` SET `likes` = %s WHERE `review_id` = %s"""
        cursor.execute(sql, (json.dumps(d), Review.review_id))
        Review.likes = d
        connection.commit()


def countLikes_User(User: User) -> int:
    count = 0
    with connection.cursor() as cursor:
        sql = """SELECT `likes` FROM `review`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            d = {}
            if (i['likes'] is not None):
                d = {int(k): v for k, v in json.loads(i['likes']).items()}
            if (User.user_id in d.keys() and d[User.user_id]):
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


def Search(prefix: str) -> List[Title]:
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie` WHERE `title` LIKE %s"""
        cursor.execute(sql, (prefix + '%',))
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            L.append(Title(movie=Movie.from_dict(i), tvshow=None))
        sql = """SELECT * FROM `tvshow` WHERE `title` LIKE %s"""
        cursor.execute(sql, (prefix + '%',))
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            L.append(Title(movie=None, tvshow=Tvshow.from_dict(i)))
    return L


def addOrDelete_fromWatchlist(User: User, title: Union[Movie, Tvshow]) -> None:
    assert User.user_id is not None
    if isinstance(title, Movie):
        assert title.movie_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_movies` FROM user WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = {int(k): v for k, v in json.loads(
                r['watchlist_movies']).items()}
            if ((title.movie_id.id in d.keys()) and d[title.movie_id.id]):
                d[title.movie_id.id] = not d[title.movie_id.id]
            else:
                d[title.movie_id.id] = True
            sql = """UPDATE user SET `watchlist_movies` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            User.watchlist_movies = d
            connection.commit()
    elif isinstance(title, Tvshow):
        assert title.show_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_shows` FROM user WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = {int(k): v for k, v in json.loads(
                r['watchlist_shows']).items()}
            if ((title.show_id.id in d.keys()) and d[title.show_id.id]):
                d[title.show_id.id] = not d[title.show_id.id]
            else:
                d[title.show_id.id] = True
            sql = """UPDATE user SET `watchlist_shows` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            User.watchlist_shows = d
            connection.commit()


def delete_fromWatchlist(User: User, title: Union[Movie, Tvshow]) -> None:
    assert User.user_id is not None
    if isinstance(title, Movie):
        assert title.movie_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_movies` FROM user WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = {int(k): v for k, v in json.loads(
                r['watchlist_movies']).items()}
            if (title.movie_id.id in d.keys() and d[title.movie_id.id]):
                d[title.movie_id.id] = False
            sql = """UPDATE user SET `watchlist_movies` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            User.watchlist_movies = d
            connection.commit()
    elif isinstance(title, Tvshow):
        assert title.show_id is not None
        with connection.cursor() as cursor:
            sql = """SELECT `watchlist_shows` FROM user WHERE `user_id`=%s"""
            cursor.execute(sql, (User.user_id,))
            r = cursor.fetchone()
            d = {int(k): v for k, v in json.loads(
                r['watchlist_shows']).items()}
            if ((title.show_id.id in d.keys()) and d[title.show_id.id]):
                d[title.show_id.id] = False
            sql = """UPDATE user SET `watchlist_shows` = %s WHERE user_id = %s"""
            cursor.execute(sql, (json.dumps(d), User.user_id))
            User.watchlist_shows = d
            connection.commit()


def getWatchlist_fromUser(User: User) -> List[Union[MovieId, ShowId]]:
    assert User.user_id is not None
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT `watchlist_movies` FROM `user` WHERE `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchone()
        d = json.loads(r['watchlist_movies']) if r else {}
        for i in d:
            if (d[i]):
                L.append(MovieId(id=json.loads(i)))
        sql = """SELECT `watchlist_shows` FROM `user` WHERE `user_id`=%s"""
        cursor.execute(sql, (User.user_id,))
        r = cursor.fetchone()
        d = json.loads(r['watchlist_shows']) if r else {}
        for i in d:
            if (d[i]):
                L.append(ShowId(id=json.loads(i)))
    return L


def filterGenre(genres: List[str]) -> List[Union[Movie, Tvshow]]:
    L = []
    with connection.cursor() as cursor:
        sql = """SELECT * FROM `movie`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['movie_id'] = {'id': i['movie_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            check = False
            for j in genres:
                if (j in i['genres']):
                    check = True
                    break
            if (check):
                L.append(Movie.from_dict(i))
        sql = """SELECT * FROM `tvshow`"""
        cursor.execute(sql)
        r = cursor.fetchall()
        for i in r:
            i['genres'] = json.loads(i['genres'])
            i['cast'] = json.loads(i['cast'])
            i['show_id'] = {'id': i['show_id']}
            i['release_date'] = i['release_date'].strftime("%Y-%m-%d")
            check = False
            for j in genres:
                if (j in i['genres']):
                    check = True
                    break
            if (check):
                L.append(Tvshow.from_dict(i))
    return L
