import connexion
import six
import json

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.tvshow import Tvshow  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server import util
from swagger_server import db


def movie_get(genre=None, sort_type_browse=None, sort_order=None):  # noqa: E501
    # unittest working
    try:
        L = []
        if (sort_type_browse == "Rat"):
            L = db.sortRating_Movie()
        elif (sort_type_browse == "Rel"):
            L = db.sortRecent_Movie()
        elif (sort_type_browse == "Lex"):
            L = db.sortLex_Movie()
        elif (sort_type_browse == "Pop"):
            L = db.sortPop_Movie()
            L = [i for i, _ in L]
        elif (sort_type_browse == None):
            L = db.getAllMovies()

        if (sort_order):
            L.reverse()

        if genre is None:
            return (L, 200)
        else:
            titles = []
            for i in L:
                check = False
                for j in genre:
                    if j in i.genres:
                        check = True
                        break
                if (check):
                    titles.append(i)
            return (titles, 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def movie_id_get(id_):  # noqa: E501
    id = id_
    try:
        try:
            return (db.getMovie(id), 200)
        except Exception as err:
            return (f'Movie not found: {err}', 404)
    except Exception as err:
        return (f'Error: {err}', 400)


def search_get(expression):  # noqa: E501
    # unittest working
    try:
        return (db.Search(expression), 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def title_get(genre=None, sort_type_browse=None, sort_order=None):  # noqa: E501
    try:
        L = db.sortBrowse(sort_type_browse, sort_order)
        if genre is None:
            return (L, 200)
        else:
            titles = []
            for i in L:
                check = False
                for j in genre:
                    if j in i.genres:
                        check = True
                        break
                if (check):
                    titles.append(i)
            return (titles, 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def tvshow_get(genre=None, sort_type_browse=None, sort_order=None):  # noqa: E501
    # unittest working
    try:
        L = []
        if (sort_type_browse == "Rat"):
            L = db.sortRating_Tvshow()
        elif (sort_type_browse == "Rel"):
            L = db.sortRecent_Tvshow()
        elif (sort_type_browse == "Lex"):
            L = db.sortLex_Tvshow()
        elif (sort_type_browse == "Pop"):
            L = db.sortPop_Tvshow()
            L = [i for i, _ in L]
        elif (sort_type_browse == None):
            L = db.getAllTvshows()

        if (sort_order):
            L.reverse()

        if genre is None:
            return (L, 200)
        else:
            titles = []
            for i in L:
                check = False
                for j in genre:
                    if j in i.genres:
                        check = True
                        break
                if (check):
                    titles.append(i)
            return (titles, 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def tvshow_id_get(id_):  # noqa: E501
    id = id_
    try:
        try:
            return (db.getTvshow(id), 200)
        except Exception as err:
            return (f'Show not found: {err}', 404)
    except Exception as err:
        return (f'Error: {err}', 400)
