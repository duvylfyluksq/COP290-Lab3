import connexion
import six

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server import util


def profile_user_id_bio_put(user_id, address):  # noqa: E501
    """Update user bio

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param address: New bio
    :type address: str

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_name_put(user_id, name):  # noqa: E501
    """Update user name

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param name: New name of the user
    :type name: str

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_pic_put(user_id, pic):  # noqa: E501
    """Update user pic

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param pic: New pic
    :type pic: str

    :rtype: None
    """
    return 'do some magic!'


def users_signin_post(username, password):  # noqa: E501
    """Sign in user with credentials

     # noqa: E501

    :param username: Username
    :type username: str
    :param password: Password
    :type password: str

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def users_signup_post(username, password, confirm_password, interests, bio):  # noqa: E501
    """Create a new user account

     # noqa: E501

    :param username: Username
    :type username: str
    :param password: Password
    :type password: str
    :param confirm_password: Confirm Password
    :type confirm_password: str
    :param interests: Filter by genre (comma-separated list of values)
    :type interests: str
    :param bio: about user
    :type bio: str

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def watchlist_user_id_get(user_id):  # noqa: E501
    """Get all titles in user watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int

    :rtype: List[str]
    """
    return 'do some magic!'


def watchlist_user_id_post(user_id, title):  # noqa: E501
    """Add a title to user watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param title: Title to be added to the watchlist
    :type title: str

    :rtype: None
    """
    return 'do some magic!'


def watchlist_user_id_remove_put(user_id, title):  # noqa: E501
    """Remove title from user&#x27;s watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param title: Title to be removed from user&#x27;s watchlist
    :type title: str

    :rtype: None
    """
    return 'do some magic!'
