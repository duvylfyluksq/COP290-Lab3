import connexion
import six

from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501

from swagger_server.models.show_id import ShowId  # noqa: E501

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
    if connexion.request.is_json:
        genre = [str(d) for d in connexion.request.get_json()]
    a = db.filterGenre(genre)
    b = []
    c = []
    for d in a:
        if isinstance(d,Movie):
            b.append(d)

    return db.sortBrowse(b,c,sort_order=sort_order,sort_type_browse=sort_type_browse)
    return 'do some magic!'


def search_get(expression):  # noqa: E501
    """search_get

    Obtain all movies/shows whose prefix matches the input expression # noqa: E501

    :param expression: the expression to be searched
    :type expression: str

    :rtype: List[Object]
    """
    return db.Search(expression)
    return 'do some magic!'


def title_id_get(id):  # noqa: E501
    """Get information about a Movie/TV Show

    Returns information about a particular Movie/TV Show, including its title, genre, director, actors, release date, and description. # noqa: E501

    :param id: ID of the Movie or TV Show
    :type id: dict | bytes

    :rtype: InlineResponse200
    """
    if connexion.request.is_json:
        if isinstance(id,MovieId):
            id = MovieId.from_dict(connexion.request.get_json())    
        else:
            
            id =  ShowId.from_dict(connexion.request.get_json())
          # noqa: E501
    if isinstance(id,MovieId):
        return db.getMovie(id)
    else:
        return db.getShow(id)
    
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
    if connexion.request.is_json:
        genre = [str(d) for d in connexion.request.get_json()]
    a = db.filterGenre(genre)
    b = []
    c = []
    for d in a:
        if isinstance(d,Tvshow):
            b.append(d)
        

    return db.sortBrowse(c,b,sort_order=sort_order,sort_type_browse=sort_type_browse)
    

