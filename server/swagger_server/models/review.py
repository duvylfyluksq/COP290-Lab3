# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.movie_id import MovieId  # noqa: F401,E501
from swagger_server.models.review_id import ReviewId  # noqa: F401,E501
from swagger_server.models.show_id import ShowId  # noqa: F401,E501
from swagger_server.models.user_id import UserId  # noqa: F401,E501
from swagger_server import util


class Review(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, review_id: ReviewId=None, title: str=None, movie_id: MovieId=None, show_id: ShowId=None, user_id: UserId=None, likes: Dict[str, bool]=None, rating: int=None, content: str=None, creation_time: datetime=None):  # noqa: E501
        """Review - a model defined in Swagger

        :param review_id: The review_id of this Review.  # noqa: E501
        :type review_id: ReviewId
        :param title: The title of this Review.  # noqa: E501
        :type title: str
        :param movie_id: The movie_id of this Review.  # noqa: E501
        :type movie_id: MovieId
        :param show_id: The show_id of this Review.  # noqa: E501
        :type show_id: ShowId
        :param user_id: The user_id of this Review.  # noqa: E501
        :type user_id: UserId
        :param likes: The likes of this Review.  # noqa: E501
        :type likes: Dict[str, bool]
        :param rating: The rating of this Review.  # noqa: E501
        :type rating: int
        :param content: The content of this Review.  # noqa: E501
        :type content: str
        :param creation_time: The creation_time of this Review.  # noqa: E501
        :type creation_time: datetime
        """
        self.swagger_types = {
            'review_id': ReviewId,
            'title': str,
            'movie_id': MovieId,
            'show_id': ShowId,
            'user_id': UserId,
            'likes': Dict[str, bool],
            'rating': int,
            'content': str,
            'creation_time': datetime
        }

        self.attribute_map = {
            'review_id': 'review_id',
            'title': 'title',
            'movie_id': 'movie_id',
            'show_id': 'show_id',
            'user_id': 'user_id',
            'likes': 'likes',
            'rating': 'rating',
            'content': 'content',
            'creation_time': 'creation_time'
        }
        self._review_id = review_id
        self._title = title
        self._movie_id = movie_id
        self._show_id = show_id
        self._user_id = user_id
        self._likes = likes
        self._rating = rating
        self._content = content
        self._creation_time = creation_time

    @classmethod
    def from_dict(cls, dikt) -> 'Review':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The review of this Review.  # noqa: E501
        :rtype: Review
        """
        return util.deserialize_model(dikt, cls)

    @property
    def review_id(self) -> ReviewId:
        """Gets the review_id of this Review.


        :return: The review_id of this Review.
        :rtype: ReviewId
        """
        return self._review_id

    @review_id.setter
    def review_id(self, review_id: ReviewId):
        """Sets the review_id of this Review.


        :param review_id: The review_id of this Review.
        :type review_id: ReviewId
        """

        self._review_id = review_id

    @property
    def title(self) -> str:
        """Gets the title of this Review.


        :return: The title of this Review.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title: str):
        """Sets the title of this Review.


        :param title: The title of this Review.
        :type title: str
        """

        self._title = title

    @property
    def movie_id(self) -> MovieId:
        """Gets the movie_id of this Review.


        :return: The movie_id of this Review.
        :rtype: MovieId
        """
        return self._movie_id

    @movie_id.setter
    def movie_id(self, movie_id: MovieId):
        """Sets the movie_id of this Review.


        :param movie_id: The movie_id of this Review.
        :type movie_id: MovieId
        """

        self._movie_id = movie_id

    @property
    def show_id(self) -> ShowId:
        """Gets the show_id of this Review.


        :return: The show_id of this Review.
        :rtype: ShowId
        """
        return self._show_id

    @show_id.setter
    def show_id(self, show_id: ShowId):
        """Sets the show_id of this Review.


        :param show_id: The show_id of this Review.
        :type show_id: ShowId
        """

        self._show_id = show_id

    @property
    def user_id(self) -> UserId:
        """Gets the user_id of this Review.


        :return: The user_id of this Review.
        :rtype: UserId
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id: UserId):
        """Sets the user_id of this Review.


        :param user_id: The user_id of this Review.
        :type user_id: UserId
        """

        self._user_id = user_id

    @property
    def likes(self) -> Dict[str, bool]:
        """Gets the likes of this Review.


        :return: The likes of this Review.
        :rtype: Dict[str, bool]
        """
        return self._likes

    @likes.setter
    def likes(self, likes: Dict[str, bool]):
        """Sets the likes of this Review.


        :param likes: The likes of this Review.
        :type likes: Dict[str, bool]
        """

        self._likes = likes

    @property
    def rating(self) -> int:
        """Gets the rating of this Review.


        :return: The rating of this Review.
        :rtype: int
        """
        return self._rating

    @rating.setter
    def rating(self, rating: int):
        """Sets the rating of this Review.


        :param rating: The rating of this Review.
        :type rating: int
        """

        self._rating = rating

    @property
    def content(self) -> str:
        """Gets the content of this Review.


        :return: The content of this Review.
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content: str):
        """Sets the content of this Review.


        :param content: The content of this Review.
        :type content: str
        """

        self._content = content

    @property
    def creation_time(self) -> datetime:
        """Gets the creation_time of this Review.


        :return: The creation_time of this Review.
        :rtype: datetime
        """
        return self._creation_time

    @creation_time.setter
    def creation_time(self, creation_time: datetime):
        """Sets the creation_time of this Review.


        :param creation_time: The creation_time of this Review.
        :type creation_time: datetime
        """

        self._creation_time = creation_time
