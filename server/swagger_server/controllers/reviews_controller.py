import connexion
import six
import json

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server import db
from swagger_server import util


def review_movie_id_get(id_, sort_type_reviews=None, sort_order=None):  # noqa: E501
    id = id_
    sort_type_reviews = connexion.request.args.get('sort_type_reviews')
    sort_order = connexion.request.args.get('sort_order')
    try:
        L = []
        if (sort_type_reviews == "Recent"):
            L = (sorted(db.getReviews_forMovie(db.getMovie(id)),
                        key=lambda x: x.creation_time, reverse=True))
        elif (sort_type_reviews == "Likes"):
            L = (sorted(db.getReviews_forMovie(db.getMovie(id)),
                        key=lambda x: sum(x.likes.values()), reverse=True))
        elif (sort_type_reviews == None):
            L = db.getReviews_forMovie(db.getMovie(id))
        else:
            raise TypeError
        if (sort_order == True):
            L.reverse()
        return (L, 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_post(movie_id, show_id, user_id, rating, title, content, creation_time):  # noqa: E501
    movie_id = json.loads(movie_id)
    show_id = json.loads(show_id)
    creation_time = util.deserialize_datetime(creation_time)
    try:
        if (show_id is None):
            db.addReview(Review(review_id=None, movie_id=(MovieId.from_dict(movie_id)).id, show_id=None, user_id=user_id,
                                rating=rating, likes={}, title=title, content=content, creation_time=creation_time))
        elif (movie_id is None):
            db.addReview(Review(review_id=None, movie_id=None, show_id=(ShowId.from_dict(show_id)).id, user_id=user_id,
                                rating=rating, likes={}, title=title, content=content, creation_time=creation_time))
        else:
            raise TypeError
        return ("Review added successfully", 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_review_id_comment_get(review_id):  # noqa: E501
    try:
        return (db.getComments_fromReview(db.getReview(review_id)), 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_review_id_comment_post(review_id, user_id, content):  # noqa: E501
    try:
        comment = Comment(comment_id=None, review_id=review_id,
                          user_id=user_id, content=content)
        db.addComment(Comment=comment)
        return ("Comment added successfully", 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_review_id_likes_put(review_id, user_id):  # noqa: E501
    try:
        db.LikeOrUnlike(db.getReview(review_id), db.getUser(user_id))
        return ("Liked/Unliked", 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_tvshow_id_get(id_, sort_type_reviews=None, sort_order=None):  # noqa: E501
    id = id_
    try:
        L = []
        if (sort_type_reviews == "Recent"):
            L = sorted(db.getReviews_forShow(db.getTvshow(id)),
                       key=lambda x: x.creation_time, reverse=True)
        elif (sort_type_reviews == "Likes"):
            L = sorted(db.getReviews_forShow(db.getTvshow(id)),
                       key=lambda x: sum(x.likes.values()), reverse=True)
        elif (sort_type_reviews == None):
            L = db.getReviews_forShow(db.getTvshow(id))
        else:
            raise TypeError
        if (sort_order == True):
            L.reverse()
        return (L, 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def review_user_user_id_get(user_id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    try:
        return (db.sortReviewUser(user_id, sort_type_reviews, sort_order), 200)
    except Exception as err:
        return (f'Error: {err}', 400)
