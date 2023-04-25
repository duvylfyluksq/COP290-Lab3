import connexion
import six

from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_id_bio_body import UserIdBioBody  # noqa: E501
from swagger_server.models.user_id_interests_body import UserIdInterestsBody  # noqa: E501
from swagger_server.models.user_id_password_body import UserIdPasswordBody  # noqa: E501
from swagger_server.models.user_id_pfp_body import UserIdPfpBody  # noqa: E501
from swagger_server.models.user_id_username_body import UserIdUsernameBody  # noqa: E501
from swagger_server.models.user_signin_body import UserSigninBody  # noqa: E501
from swagger_server.models.user_signup_body import UserSignupBody  # noqa: E501
from swagger_server.models.movie_id import MovieId
from swagger_server.models.show_id import ShowId
from swagger_server import util
from swagger_server import db


def profile_user_id_bio_put(user_id, body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserIdBioBody.from_dict(connexion.request.get_json())  # noqa: E501
        bio = body.bio
        try:
            db.editBio(db.getUser(user_id), bio)
            return ('Bio updated successfully', 200)
        except Exception as err:
            return (f'Error updating bio: {err}', 400)
    return 'do some magic!'


def profile_user_id_interests_put(user_id, body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserIdInterestsBody.from_dict(connexion.request.get_json())  # noqa: E501
        interests = body.interests
        try:
            db.editInterests(db.getUser(user_id), interests)
            return ('Interests updated successfully', 200)
        except Exception as err:
            return (f'Error updating interests: {err}', 400)
    return 'do some magic!'


def profile_user_id_password_put(user_id, body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserIdPasswordBody.from_dict(connexion.request.get_json())  # noqa: E501
        password = body.password
        try:
            db.editPassword(db.getUser(user_id), password)
            return ('Password updated successfully', 200)
        except Exception as err:
            return (f'Error updating password: {err}', 400)
    return 'do some magic!'


def profile_user_id_pfp_put(user_id, body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserIdPfpBody.from_dict(connexion.request.get_json())  # noqa: E501
        pfp = body.pfp
        try:
            db.editPfp(db.getUser(user_id), pfp)
            return ('Profile picture updated successfully', 200)
        except Exception as err:
            return (f'Error updating profile picture: {err}', 400)
    return 'do some magic!'


def profile_user_id_username_put(user_id, body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserIdUsernameBody.from_dict(connexion.request.get_json())  # noqa: E501
        username = body.username
        try:
            db.editUsername(db.getUser(user_id), username)
            return ('Username updated successfully', 200)
        except Exception as err:
            return (f'Error updating username: {err}', 400)
    return 'do some magic!'


def user_signin_post(body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserSigninBody.from_dict(connexion.request.get_json())  # noqa: E501
        password = body.password
        username = body.username
        try:
            ans = db.checkLogin(username, password)
            if (ans[0]):
                return (ans[1], 200)
            else:
                return (f'User not found', 404)
        except Exception as err:
            return (f'Error logging in: {err}', 400)
    return 'do some magic!'


def user_signup_post(body=None):  # noqa: E501
    if connexion.request.is_json:
        body = UserSignupBody.from_dict(connexion.request.get_json())
        username = body.username
        password = body.password
        bio = body.bio
        confirm_password = body.confirm_password
        interests = body.interests
        pfp = body.pfp
        if (password == confirm_password):
            user = User(user_id=None, username=username, password=password,
                        interests=interests, pfp=pfp, bio=bio, watchlist_movies={}, watchlist_shows={})
            try:
                db.addUser(user)
                return (user, 200)
            except Exception as err:
                return (f'Error adding user: {err}', 400)
        else:
            return (f'Passwords not matching', 400)
    return 'do some magic!'


def user_user_id_get(user_id):  # noqa: E501
    try:
        return (db.getUser(user_id), 200)
    except Exception as err:
        return (f'User not found: {err}', 404)


def watchlist_movie_remove_user_id_put(user_id, id=None):  # noqa: E501
    id = connexion.request.args.get('id')
    try:
        try:
            db.delete_fromWatchlist(db.getUser(user_id), db.getMovie(id))
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 500)


def watchlist_movie_user_id_put(user_id, id=None):  # noqa: E501
    id = connexion.request.args.get('id')
    try:
        try:
            db.addOrDelete_fromWatchlist(db.getUser(user_id), db.getMovie(id))
            return ('Watchlist updated successfully', 201)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 500)


def watchlist_tvshow_remove_user_id_put(user_id, id=None):  # noqa: E501
    id = connexion.request.args.get('id')
    try:
        try:
            db.delete_fromWatchlist(db.getUser(user_id), db.getTvshow(id))
            return ('Watchlist updated successfully', 200)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 500)


def watchlist_tvshow_user_id_put(user_id, id=None):  # noqa: E501
    id = connexion.request.args.get('id')
    try:
        try:
            db.addOrDelete_fromWatchlist(db.getUser(user_id), db.getTvshow(id))
            return ('Watchlist updated successfully', 201)
        except Exception as err:
            return (f'Error modifying watchlist: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 500)


def watchlist_user_id_get(user_id):  # noqa: E501
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
