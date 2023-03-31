import connexion
import six

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.shows import Shows  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server import util


def movies_get(genre=None, sort=None):  # noqa: E501
    """Get movies by genre and sorting type

     # noqa: E501

    :param genre: Filter by genre (comma-separated list of values)
    :type genre: str
    :param sort: Sort by type and order (format: type-order)
    :type sort: str

    :rtype: List[Movie]
    """
    return 'do some magic!'


def t_vs_get(genre=None, sort=None):  # noqa: E501
    """Get TV shows by genre and sorting type

     # noqa: E501

    :param genre: Filter by genre (comma-separated list of values)
    :type genre: str
    :param sort: Sort by type and order (format: type-order)
    :type sort: str

    :rtype: List[Shows]
    """
    return 'do some magic!'


def title_title_get(title):  # noqa: E501
    """Get information about a title

    Returns information about a particular title, including its title, genre, director, actors, release date, and description. # noqa: E501

    :param title: Name of the movie or book
    :type title: str

    :rtype: Title
    """
    return 'do some magic!'
