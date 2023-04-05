import connexion
import six

from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.movie import Movie
from swagger_server.models.tvshow import Tvshow
from swagger_server.models.movie_id import MovieId
from swagger_server.models.show_id import ShowId
from swagger_server import db, util


def profile_user_id_bio_put(user_id, bio):  # noqa: E501
    """Update user bio

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param bio: New bio
    :type bio: str

    :rtype: None
    """
    user = db.getUser(user_id)
    try:
        db.editBio(user, bio)
        return ('Bio updated successfully', 200)
    except Exception as err:
        return (f'Error updating bio: {err}', 400)


def profile_user_id_interests_put(user_id, interests):  # noqa: E501
    """Update interests

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param pfp: New Profile Picture
    :type pfp: List[str]

    :rtype: None
    """
    user = db.getUser(user_id)
    try:
        db.editInterests(user, interests)
        return ('Interests updated successfully', 200)
    except Exception as err:
        return (f'Error updating Interests: {err}', 400)


def profile_user_id_password_put(user_id, password):  # noqa: E501
    """Update Password

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param password: New password
    :type password: str

    :rtype: None
    """
    user = db.getUser(user_id)
    try:
        db.editPassword(user, password)
        return ('Password updated successfully', 200)
    except Exception as err:
        return (f'Error updating password: {err}', 400)


def profile_user_id_pfp_put(user_id, pfp):  # noqa: E501
    """Update profile picture

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param pfp: New Profile Picture
    :type pfp: str

    :rtype: None
    """
    user = db.getUser(user_id)
    try:
        db.editPfp(user, pfp)
        return ('Profile picture updated successfully', 200)
    except Exception as err:
        return (f'Error updating profile picture: {err}', 400)


def profile_user_id_username_put(user_id, username):  # noqa: E501
    """Update username

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param username: New username
    :type username: str

    :rtype: None
    """
    try:
        user = db.getUser(user_id)
        try:
            db.editUsername(user, username)
            return ('Username updated successfully', 200)
        except Exception as err:
            return (f'Error updating username: {err}', 400)
    except Exception as err:
        return (f'User not found :{err}', 404)


def user_signin_post(username, password):  # noqa: E501
    """Sign in user with credentials

     # noqa: E501

    :param username: Username
    :type username: str
    :param password: Password
    :type password: str

    :rtype: User
    """
    try:
        return db.checkLogin(username, password)
    except Exception as err:
        return (f'Error logging in: {err}', 400)


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
    if (password == confirm_password):
        user = User(user_id=None, username=username, password=password,
                    interests=interests, pfp=pfp, bio=bio, watchlist_movies={}, watchlist_shows={})
        try:
            db.addUser(user)
            return ('Username updated successfully', 200)
        except Exception as err:
            return (f'Error adding user: {err}', 400)
    else:
        return (f'Passwords not matching', 400)


def watchlist_user_id_get(user_id):  # noqa: E501
    """Get all titles in user watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int

    :rtype: List[Title]
    """
    try:
        user = db.getUser(user_id)
        L = db.getWatchlist_fromUser(user)
        for i in range(len(L)):
            if (isinstance(L[i], MovieId)):
                L[i] = Title(movie=db.getMovie(L[i].id), tvshow=None)
            else:
                L[i] = Title(movie=None, tvshow=db.getTvshow(L[i].id))
        return L
    except Exception as err:
        return (f'Error getting watchlist from user: {err}', 400)


def watchlist_user_id_put(user_id, id):  # noqa: E501
    """Add/Remove title from watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param id: id of TVShow/Movie to be added to the watchlist
    :type id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        id = Id.from_dict(connexion.request.get_json())  # noqa: E501
        title = None
        if (id.tvshow is None):
            title = id.movie
        else:
            title = id.tvshow
        try:
            user = db.getUser(user_id)
            db.addOrDelete_fromWatchlist(user, title)
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    return 'do some magic!'


def watchlist_user_id_remove_put(user_id, id):  # noqa: E501
    """Remove title from user&#x27;s watchlist

     # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param id: id of the Title to be removed from user&#x27;s watchlist
    :type id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        id = Id.from_dict(connexion.request.get_json())  # noqa: E501
        title = None
        if (id.tvshow is None):
            title = id.movie
        else:
            title = id.tvshow
        try:
            user = db.getUser(user_id)
            db.delete_fromWatchlist(user, title)
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    return 'do some magic!'
