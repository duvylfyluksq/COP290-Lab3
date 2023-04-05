import connexion
import six

from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.tvshow import Tvshow  # noqa: E501
from swagger_server import util


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
    return 'do some magic!'


def search_get(expression):  # noqa: E501
    """search_get

    Obtain all movies/shows whose prefix matches the input expression # noqa: E501

    :param expression: the expression to be searched
    :type expression: str

    :rtype: List[Title]
    """
    return 'do some magic!'


def title_id_get(id):  # noqa: E501
    """Get information about a Movie/TV Show

    Returns information about a particular Movie/TV Show, including its title, genre, director, actors, release date, and description. # noqa: E501

    :param id: ID of the Movie or TV Show
    :type id: dict | bytes

    :rtype: Title
    """
    if connexion.request.is_json:
        id = Id.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


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
    return 'do some magic!'
