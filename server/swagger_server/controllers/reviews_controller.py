import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server import util


def review_id_get(id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a title

    Returns a list of reviews for a particular title # noqa: E501

    :param id: ID of the Movie or TVShow
    :type id: dict | bytes
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
    if connexion.request.is_json:
        id = Id.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_post(movie_id, show_id, user_id, rating, title, content):  # noqa: E501
    """Add a new review

     # noqa: E501

    :param movie_id: ID of the movie for which the review is being posted(null if TVShow)
    :type movie_id: dict | bytes
    :param show_id: ID of the TVShow for which the review is being posted(null if Movie)
    :type show_id: dict | bytes
    :param user_id: ID of the user who is posting the review
    :type user_id: int
    :param rating: rating by the user
    :type rating: int
    :param title: the review title of the review to be added
    :type title: str
    :param content: content of the review
    :type content: str

    :rtype: None
    """
    if connexion.request.is_json:
        movie_id = MovieId.from_dict(connexion.request.get_json())  # noqa: E501
    if connexion.request.is_json:
        show_id = ShowId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_review_id_comment_post(review_id, user_id, content):  # noqa: E501
    """Add comment to review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param user_id: ID of the commentor
    :type user_id: int
    :param content: Comment to be added to review
    :type content: str

    :rtype: Comment
    """
    return 'do some magic!'


def review_review_id_likes_put(review_id, user_id):  # noqa: E501
    """Like/Unlike Review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param user_id: ID of the user who likes the review
    :type user_id: int

    :rtype: None
    """
    return 'do some magic!'


def review_user_id_get(user_id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a user

    Returns a list of reviews for a particular user # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
    return 'do some magic!'
