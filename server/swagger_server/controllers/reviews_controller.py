import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.review_id import ReviewId  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user_id import UserId  # noqa: E501
from swagger_server import util


def review_post(movie_id, show_id, user_id, rating, title, content):  # noqa: E501
    """Add a new review

     # noqa: E501

    :param movie_id: ID of the movie for which the review is being posted(null if TVShow)
    :type movie_id: dict | bytes
    :param show_id: ID of the TVShow for which the review is being posted(null if Movie)
    :type show_id: dict | bytes
    :param user_id: ID of the user who is posting the review
    :type user_id: dict | bytes
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
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_review_id_comment_post(review_id, user_id, content):  # noqa: E501
    """Add comment to review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: dict | bytes
    :param user_id: ID of the commentor
    :type user_id: dict | bytes
    :param content: Comment to be added to review
    :type content: str

    :rtype: Comment
    """
    if connexion.request.is_json:
        review_id = ReviewId.from_dict(connexion.request.get_json())  # noqa: E501
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_review_id_likes_put(review_id, user_id):  # noqa: E501
    """Like/Unlike Review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: dict | bytes
    :param user_id: ID of the user who likes the review
    :type user_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        review_id = ReviewId.from_dict(connexion.request.get_json())  # noqa: E501
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_title_get(title, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a title

    Returns a list of reviews for a particular title # noqa: E501

    :param title: ID of the review
    :type title: dict | bytes
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
    if connexion.request.is_json:
        title = Title.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def review_user_id_get(user_id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a user

    Returns a list of reviews for a particular user # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
