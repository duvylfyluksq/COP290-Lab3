import connexion
import six

from swagger_server.models.id1 import Id1  # noqa: E501
from swagger_server.models.id2 import Id2  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_id import UserId  # noqa: E501
from swagger_server import util
from swagger_server import db

def profile_user_id_bio_put(user_id, bio):  # noqa: E501
    """Update user bio

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param bio: New bio
    :type bio: str

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())
        db.editBio(user_id,bio) # noqa: E501
    return 'do some magic!'


def profile_user_id_interests_put(user_id, pfp):  # noqa: E501
    """Update interests

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param pfp: New Profile Picture
    :type pfp: List[str]

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
        db.editInterests(user_id,pfp)
    return 'do some magic!'


def profile_user_id_password_put(user_id, password):  # noqa: E501
    """Update Password

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param password: New password
    :type password: str

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
        db.editPassword(user_id,password)
    return 'do some magic!'


def profile_user_id_pfp_put(user_id, pfp):  # noqa: E501
    """Update profile picture

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param pfp: New Profile Picture
    :type pfp: str

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
        db.editPfp(user_id,pfp)
    return 'do some magic!'


def profile_user_id_username_put(user_id, username):  # noqa: E501
    """Update username

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param username: New username
    :type username: str

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
        db.editUsername(user_id,username)
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
    if db.checkLogin(username,password):
        return "Login Successful"
    else:
        "invalid username or password"

    
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


    
    
    if password != confirm_password:
        return "Passwords do not match"
    else:
        newuser = User(user_id=None, username=username, password=password, bio=bio,
                        pfp=pfp, watchlist_movies={},
                        watchlist_shows={}, interests=interests)

    
        db.addUser(User=newuser)
    return "User Added"
 


def watchlist_user_id_get(user_id):  # noqa: E501
    """Get all titles in user watchlist

    
     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes

    :rtype: List[Object]
    """
    
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def watchlist_user_id_put(user_id, id):  # noqa: E501
    """Add/Remove title from watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param id: id of TVShow/Movie to be added to the watchlist
    :type id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    if connexion.request.is_json:
        id = Id1.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def watchlist_user_id_remove_put(user_id, id):  # noqa: E501
    """Remove title from user&#x27;s watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: dict | bytes
    :param id: id of the Title to be removed from user&#x27;s watchlist
    :type id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        user_id = UserId.from_dict(connexion.request.get_json())  # noqa: E501
    if connexion.request.is_json:
        id = Id2.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
