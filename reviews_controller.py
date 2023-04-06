import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.id import Id  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server import util
from swagger_server import db


def review_id_get(id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a title

    Returns a list of reviews for a particular title # noqa: E501

    :param id: ID of the Movie or TVShow
    :type id: dict | bytes
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
    if connexion.request.is_json:
<<<<<<< HEAD
        id = int(connexion.request.get_json().get('id'))  # noqa: E501
        return db.sortReviewTitle(id, sort_type_reviews, sort_order)
=======
        id = int(connexion.request.get_json().get('id'))
        sort_type_reviews = str(connexion.request.get_json().get('sort_type_reviews'))
        sort_order = bool(connexion.request.get_json().get('sort_order'))
         # noqa: E501
    return db.sortReviewTitle(id,sort_type_reviews,sort_order)

    
    
    return 'do some magic!'
>>>>>>> 1fad4a057fba14ac653ee6ec9546d280a034d09d


def review_post(movie_id, show_id, user_id, rating, title, content):  # noqa: E501
    """Add a new review

     # noqa: E501

    :param movie_id: ID of the movie for which the review is being posted(null if TVShow)
    :type movie_id: dict | bytes
    :param show_id: ID of the TVShow for which the review is being posted(null if Movie)
    :type show_id: dict | bytes
    :param user_id: ID of the user who is posting the review
    :type user_id: int
    :param rating: rating by the user
    :type rating: int
    :param title: the review title of the review to be added
    :type title: str
    :param content: content of the review
    :type content: str

    :rtype: None
    """
    if connexion.request.is_json:
        movie_id = MovieId.from_dict(connexion.request.get_json().get("movie_id"))  # noqa: E501
    if connexion.request.is_json:
        show_id = ShowId.from_dict(connexion.request.get_json().get("show_id"))  # noqa: E501

    if connexion.request.is_json:
<<<<<<< HEAD
        show_id = ShowId.from_dict(connexion.request.get_json())
        # noqa: E501
    db.addReview(Review=Review(review_id=None, title=title, movie_id=movie_id,
                 show_id=show_id, user_id=user_id, rating=rating, content=content))
=======
        user_id = int(connexion.request.get_json().get('user_id'))
        rating = int(connexion.request.get_json().get('rating'))
        title = str(connexion.request.get_json().get('title'))
        content = str(connexion.request.get_json().get('content'))

          # noqa: E501
    db.addReview(Review=Review(review_id=None,title=title,movie_id=movie_id,show_id= show_id,user_id=user_id,rating=rating,content=content))
>>>>>>> 1fad4a057fba14ac653ee6ec9546d280a034d09d
    return 'do some magic!'


def review_review_id_comment_post(review_id, user_id, content):  # noqa: E501
    """Add comment to review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param user_id: ID of the commentor
    :type user_id: int
    :param content: Comment to be added to review
    :type content: str

    :rtype: Comment
    """
<<<<<<< HEAD
    db.addComment(Comment=Comment(comment_id=None,
                  review_id=review_id, user_id=user_id, content=content))
=======
    if connexion.request.is_json:
        user_id = int(connexion.request.get_json().get('user_id'))
        content = str(connexion.request.get_json().get('content'))
    
    db.addComment(Comment = Comment(comment_id = None,review_id=review_id, user_id= user_id, content=content))
>>>>>>> 1fad4a057fba14ac653ee6ec9546d280a034d09d
    return 'do some magic!'


def review_review_id_likes_put(review_id, user_id):  # noqa: E501
    """Like/Unlike Review

     # noqa: E501

    :param review_id: ID of the review
    :type review_id: int
    :param user_id: ID of the user who likes the review
    :type user_id: int

    :rtype: None
    """
<<<<<<< HEAD
    db.LikeOrUnlike(review_id, user_id)
=======
    if connexion.request.is_json:
        user_id = int(connexion.request.get_json().get('user_id'))
    db.LikeOrUnlike(review_id,user_id)

>>>>>>> 1fad4a057fba14ac653ee6ec9546d280a034d09d
    return 'do some magic!'


def review_user_id_get(user_id, sort_type_reviews=None, sort_order=None):  # noqa: E501
    """Get all reviews of a user

    Returns a list of reviews for a particular user # noqa: E501

    :param user_id: ID of the user
    :type user_id: int
    :param sort_type_reviews: Parameter based on which reviews will be sorted
    :type sort_type_reviews: str
    :param sort_order: sorting order
    :type sort_order: bool

    :rtype: List[Review]
    """
<<<<<<< HEAD
    return db.getReviewByUser(user_id)
=======
    if connexion.request.is_json:
        user_id = int(connexion.request.get_json().get('user_id'))
        sort_type_reviews = str(connexion.request.get_json().get('sort_type_reviews'))
        sort_order = bool(connexion.request.get_json().get('sort_order'))
            # noqa: E501    
    return db.sortReviewUser(user_id,sort_type_reviews,sort_order)
   
>>>>>>> 1fad4a057fba14ac653ee6ec9546d280a034d09d
