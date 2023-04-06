import connexion
import six
import json

from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.tvshow import Tvshow  # noqa: E501
from swagger_server import util

from swagger_server import db


def movie_get(genre=None, sort_type_browse=None, sort_order=None):  # noqa: E501
    """Sort/Filter movies

     # noqa: E501

    :param genre: Genres to be filtered by
    :type genre: List[str]
    :param sort_type_browse: Parameter based on which titles will be sorted
    :type sort_type_browse: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Movie]
    """

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

        if genre == []:
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


def search_get(expression):  # noqa: E501
    """search_get

    Obtain all movies/shows whose prefix matches the input expression # noqa: E501

    :param expression: the expression to be searched
    :type expression: str

    :rtype: List[Title]
    """
    return (db.Search(expression), 200)
    try:
        if connexion.request.is_json:
            return (db.Search(expression), 200)
    except Exception as err:
        return (f'Error: {err}', 400)


def title_id_get(id):  # noqa: E501
    """Get information about a Movie/TV Show

    Returns information about a particular Movie/TV Show, including its title, genre, director, actors, release date, and description. # noqa: E501

    :param id: ID of the Movie or TV Show
    :type id: dict | bytes

    :rtype: Title
    """
    # print("\n\nokjadfnjsdnfjsdfnjfsnfsjnfsdjnsdfjnj\n\n")
    # title_id = Id.from_dict(id)
    # if title_id.movie_id is not None:
    #     return (Title(movie=db.getMovie(title_id.movie_id.id), tvshow=None), 200)
    # elif title_id.show_id is not None:
    #     return (Title(movie=None, tvshow=db.getTvshow(title_id.show_id.id)), 200)
    try:
        if connexion.request.is_json():
            try:
                title_id = Id.from_dict(json.loads(id))
                if title_id.movie_id is not None:
                    return (Title(movie=db.getMovie(title_id.movie_id.id), tvshow=None), 200)
                elif title_id.show_id is not None:
                    return (Title(movie=None, tvshow=db.getTvshow(title_id.show_id.id)), 200)
            except Exception as err:
                return (f'Title not found: {err}', 404)
        else:
            return (f'Error: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 400)

     # noqa: E501


def tvshow_get(genre=None, sort_type_browse=None, sort_order=None):  # noqa: E501
    """Sort/Filter TV Shows

     # noqa: E501

    :param genre: Genres to be filtered by
    :type genre: List[str]
    :param sort_type_browse: Parameter based on which titles will be sorted
    :type sort_type_browse: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Tvshow]
    """
    try:
        if connexion.request.is_json:
            genre = [str(datum)
                     for datum in connexion.request.get_json().get('genre')]
            sort_type_browse = str(
                connexion.request.get_json().get('sort_type_browse'))
            sort_order = bool(connexion.request.get_json().get('sort_order'))
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

            if genre == []:
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
        else:
            return (f'Error: {err}', 400)
    except Exception as err:
        return (f'Error: {err}', 400)
