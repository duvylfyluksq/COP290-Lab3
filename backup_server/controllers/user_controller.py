import connexion
import six
import json
import traceback

from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.movie import Movie
from swagger_server.models.tvshow import Tvshow
from swagger_server.models.movie_id import MovieId
from swagger_server.models.show_id import ShowId
from swagger_server import db, util


def profile_user_id_bio_put(user_id, bio):  # noqa: E501
    # postman works
    # unittest works
    user = db.getUser(user_id)
    try:
        db.editBio(user, bio)
        return ('Bio updated successfully', 200)
    except Exception as err:
        return (f'Error updating bio: {err}', 400)


def profile_user_id_interests_put(user_id, interests):  # noqa: E501
    # postman works
    # unittest works
    user = db.getUser(user_id)
    try:
        db.editInterests(user, interests)
        return ('Interests updated successfully', 200)
    except Exception as err:
        return (f'Error updating Interests: {err}', 400)


def profile_user_id_password_put(user_id, password):  # noqa: E501
    # postman works
    # unittest works
    user = db.getUser(user_id)
    try:
        db.editPassword(user, password)
        return ('Password updated successfully', 200)
    except Exception as err:
        return (f'Error updating password: {err}', 400)


def profile_user_id_pfp_put(user_id, pfp):  # noqa: E501
    # postman works
    # unittest works
    user = db.getUser(user_id)
    try:
        db.editPfp(user, pfp)
        return ('Profile picture updated successfully', 200)
    except Exception as err:
        return (f'Error updating profile picture: {err}', 400)


def profile_user_id_username_put(user_id, username):  # noqa: E501
    # postman works
    # unittest works
    try:
        user = db.getUser(user_id)
        try:
            db.editUsername(user, username)
            return ('Username updated successfully', 200)
        except Exception as err:
            return (f'Error updating username: {err}', 400)
    except Exception as err:
        return (f'User not found :{err}', 404)


def user_signin_post(Username, Password):  # noqa: E501
    # postman works
    # unittest works
    try:
        ans = db.checkLogin(Username, Password)
        if (ans[0]):
            return (ans[1], 200)
        else:
            return (f'Error logging in: {err}', 400)
    except Exception as err:
        return (f'Error logging in: {err}', 400)


def user_signup_post(Username, Password, Confirm_Password, interests, pfp, bio):  # noqa: E501
    # postman works
    # unittest works
    if (Password == Confirm_Password):
        user = User(user_id=None, username=Username, password=Password,
                    interests=interests, pfp=pfp, bio=bio, watchlist_movies={}, watchlist_shows={})
        try:
            db.addUser(user)
            return (user, 200)
        except Exception as err:
            return (f'Error adding user: {err}', 400)
    else:
        return (f'Passwords not matching', 400)


def watchlist_user_id_get(user_id):  # noqa: E501
    # postman works
    # unittest works
    try:
        user = db.getUser(user_id)
        L = db.getWatchlist_fromUser(user)
        for i in range(len(L)):
            if (isinstance(L[i], MovieId)):
                L[i] = Title(movie=db.getMovie(L[i].id), tvshow=None)
            else:
                L[i] = Title(movie=None, tvshow=db.getTvshow(L[i].id))
        return (L, 200)
    except Exception as err:
        return (f'Error getting watchlist from user: {err}', 400)


def watchlist_user_id_put(user_id, id):  # noqa: E501
    # working
    try:
        # if connexion.request.is_json:
        # id = connexion.request.get_json()
        id = json.loads(id)
        title = None
        if (id['show_id'] is None):
            title = db.getMovie((MovieId.from_dict(id['movie_id'])).id)
        else:
            title = db.getTvshow((ShowId.from_dict(id['show_id'])).id)
        try:
            user = db.getUser(user_id)
            db.addOrDelete_fromWatchlist(user, title)
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            print(f"Error in watchlist operation: {err}")
            print(traceback.format_exc())
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        print(f"Error in watchlist_user_id_put: {err}")
        print(traceback.format_exc())
        return (f'Error: {err}', 500)


def watchlist_user_id_remove_put(user_id, id):  # noqa: E501
    # working
    try:
        # if connexion.request.is_json:
        # id = connexion.request.get_json()
        id = json.loads(id)
        title = None
        if (id['show_id'] is None):
            title = db.getMovie((MovieId.from_dict(id['movie_id'])).id)
        else:
            title = db.getTvshow((ShowId.from_dict(id['show_id'])).id)
        try:
            user = db.getUser(user_id)
            db.delete_fromWatchlist(user, title)
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            print(f"Error in watchlist operation: {err}")
            print(traceback.format_exc())
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        print(f"Error in watchlist_user_id_put: {err}")
        print(traceback.format_exc())
        return (f'Error: {err}', 500)
