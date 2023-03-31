import connexion
import six

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server import util


def search_get(expression, language=None):  # noqa: E501
    """search_get

    Obtain the list of all movies that matches the expression # noqa: E501

    :param expression: the expression to be searched
    :type expression: str
    :param language: language of the movie
    :type language: str

    :rtype: Movie
    """
    return 'do some magic!'
