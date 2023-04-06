import connexion
import six

from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def profile_user_id_bio_put(user_id, bio):  # noqa: E501
    """Update user bio

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param bio: New bio
    :type bio: str

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_interests_put(user_id, interests):  # noqa: E501
    """Update interests

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param interests: New Profile Picture
    :type interests: List[str]

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_password_put(user_id, password):  # noqa: E501
    """Update Password

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param password: New password
    :type password: str

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_pfp_put(user_id, pfp):  # noqa: E501
    """Update profile picture

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param pfp: New Profile Picture
    :type pfp: str

    :rtype: None
    """
    return 'do some magic!'


def profile_user_id_username_put(user_id, username):  # noqa: E501
    """Update username

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param username: New username
    :type username: str

    :rtype: None
    """
    return 'do some magic!'


def user_signin_post(username, password):  # noqa: E501
    """Sign in user with credentials

     # noqa: E501

    :param username: Username
    :type username: str
    :param password: Password
    :type password: str

    :rtype: User
    """
    return 'do some magic!'


def user_signup_post(username, password, confirm_password, interests, pfp, bio):  # noqa: E501
    """Create a new user account

     # noqa: E501

    :param username: Username
    :type username: str
    :param password: Password
    :type password: str
    :param confirm_password: Confirm Password
    :type confirm_password: str
    :param interests: Favourite Genres
    :type interests: List[str]
    :param pfp: profile picture
    :type pfp: str
    :param bio: about user
    :type bio: str

    :rtype: User
    """
    return 'do some magic!'


def watchlist_user_id_get(user_id):  # noqa: E501
    """Get all titles in user watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int

    :rtype: List[Title]
    """
    return 'do some magic!'


def watchlist_user_id_put(user_id, id):  # noqa: E501
    """Add/Remove title from watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param id: id of TVShow/Movie to be added to the watchlist
    :type id: str

    :rtype: None
    """
    return 'do some magic!'


def watchlist_user_id_remove_put(user_id, id):  # noqa: E501
    """Remove title from user&#x27;s watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param id: id of the Title to be removed from user&#x27;s watchlist
    :type id: str

    :rtype: None
    """
    return 'do some magic!'
