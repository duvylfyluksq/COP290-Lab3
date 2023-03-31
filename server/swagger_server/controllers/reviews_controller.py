import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.user_id import UserId  # noqa: E501
from swagger_server import util


def review_post(title, rating, review_title, content):  # noqa: E501
    """Add a new post or review

     # noqa: E501

    :param title: the title of the show or movie to add the review
    :type title: str
    :param rating: rating by the user
    :type rating: int
    :param review_title: the review title of the review to be added
    :type review_title: str
    :param content: content of the review
    :type content: str

    :rtype: None
    """
    return 'do some magic!'


def reviews_review_id_comments_post(review_id, comment):  # noqa: E501
    """Add comment to review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param comment: Comment to be added to review
    :type comment: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        comment = Comment.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def reviews_review_id_likes_post(review_id, user_id):  # noqa: E501
    """Add like to review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param user_id: ID of the user who likes the review
    :type user_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def reviews_title_get(title, sort=None):  # noqa: E501
    """Get all reviews of a title

    Returns a list of reviews for a particular title # noqa: E501

    :param title: Title of the movie or TV show
    :type title: str
    :param sort: Sort order for the reviews. Use + for ascending order and - for descending order. Default is ascending order.
    :type sort: str

    :rtype: List[Review]
    """
    return 'do some magic!'


def reviews_user_id_get(user_id, sort=None):  # noqa: E501
    """Get all reviews of a user

    Returns a list of reviews for a particular user # noqa: E501

    :param user_id: user id
    :type user_id: int
    :param sort: Sort order for the reviews. Use + for ascending order and - for descending order. Default is ascending order.
    :type sort: str

    :rtype: List[Review]
    """
    return 'do some magic!'
