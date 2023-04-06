import connexion
import six

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
    if connexion.request.is_json:
        genre = [str(datum) for datum in connexion.request.get_json().get('genre')]
        sort_type_browse = str(connexion.request.get_json().get('sort_type_browse'))
        sort_order = bool(connexion.request.get_json().get('sort_order'))
    
    if sort_type_browse == "rat":
        a =  db.sortMovieRating(sort_order)
    elif sort_type_browse == "rel":
        a =  db.sortMovieRelease(sort_order)
    elif sort_type_browse == "pop":
        a =  db.sortMoviePopularity(sort_order)
    else:
        a=  db.sortMovieName(sort_order)
    if genre == []:
        return a
    else:

        return [i for i in a if i.genre in genre]
    

    return 'do some magic!'


def search_get(expression):  # noqa: E501
    """search_get

    Obtain all movies/shows whose prefix matches the input expression # noqa: E501

    :param expression: the expression to be searched
    :type expression: str

    :rtype: List[Title]
    """
    if connexion.request.is_json:
        expression = str(connexion.request.get_json().get('expression'))
    return db.search(expression)



def title_id_get(id):  # noqa: E501
    """Get information about a Movie/TV Show

    Returns information about a particular Movie/TV Show, including its title, genre, director, actors, release date, and description. # noqa: E501

    :param id: ID of the Movie or TV Show
    :type id: dict | bytes

    :rtype: Title
    """
    if connexion.request.is_json:
        id = Id.from_dict(connexion.request.get_json()) 
        if id.movie_id is not None:
            return db.getMovie(id.movie_id.id)
        elif id.show_id is not None:
            return db.getTvshow(id.show_id.id)
        else:
            return "Invalid ID"
    else :
        return "error"
    
     # noqa: E501
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
        genre = [str(datum) for datum in connexion.request.get_json().get('genre')]
        sort_type_browse = str(connexion.request.get_json().get('sort_type_browse'))
        sort_order = bool(connexion.request.get_json().get('sort_order'))
    
    if sort_type_browse == "rat":
        a =  db.sortRating_Tvshow(sort_order)
    elif sort_type_browse == "rel":
        a =  db.sortRecent_Tvshow(sort_order)
    elif sort_type_browse == "pop":
        a =  db.sortPop_Tvshow(sort_order)
    else:
        a=  db.sortLex_Tvshow(sort_order)
    if genre == []:
        return a
    else:
            
            return [i for i in a if i.genre in genre]
    
    return 'do some magic!'