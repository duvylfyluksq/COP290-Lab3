# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Review(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, review_id: str=None, movie_id: str=None, user_id: str=None, likes: int=None, rating: float=None, review: str=None):  # noqa: E501
        """Review - a model defined in Swagger

        :param review_id: The review_id of this Review.  # noqa: E501
        :type review_id: str
        :param movie_id: The movie_id of this Review.  # noqa: E501
        :type movie_id: str
        :param user_id: The user_id of this Review.  # noqa: E501
        :type user_id: str
        :param likes: The likes of this Review.  # noqa: E501
        :type likes: int
        :param rating: The rating of this Review.  # noqa: E501
        :type rating: float
        :param review: The review of this Review.  # noqa: E501
        :type review: str
        """
        self.swagger_types = {
            'review_id': str,
            'movie_id': str,
            'user_id': str,
            'likes': int,
            'rating': float,
            'review': str
        }

        self.attribute_map = {
            'review_id': 'review_id',
            'movie_id': 'movie_id',
            'user_id': 'user_id',
            'likes': 'likes',
            'rating': 'rating',
            'review': 'review'
        }
        self._review_id = review_id
        self._movie_id = movie_id
        self._user_id = user_id
        self._likes = likes
        self._rating = rating
        self._review = review

    @classmethod
    def from_dict(cls, dikt) -> 'Review':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Review of this Review.  # noqa: E501
        :rtype: Review
        """
        return util.deserialize_model(dikt, cls)

    @property
    def review_id(self) -> str:
        """Gets the review_id of this Review.


        :return: The review_id of this Review.
        :rtype: str
        """
        return self._review_id

    @review_id.setter
    def review_id(self, review_id: str):
        """Sets the review_id of this Review.


        :param review_id: The review_id of this Review.
        :type review_id: str
        """

        self._review_id = review_id

    @property
    def movie_id(self) -> str:
        """Gets the movie_id of this Review.


        :return: The movie_id of this Review.
        :rtype: str
        """
        return self._movie_id

    @movie_id.setter
    def movie_id(self, movie_id: str):
        """Sets the movie_id of this Review.


        :param movie_id: The movie_id of this Review.
        :type movie_id: str
        """

        self._movie_id = movie_id

    @property
    def user_id(self) -> str:
        """Gets the user_id of this Review.


        :return: The user_id of this Review.
        :rtype: str
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id: str):
        """Sets the user_id of this Review.


        :param user_id: The user_id of this Review.
        :type user_id: str
        """

        self._user_id = user_id

    @property
    def likes(self) -> int:
        """Gets the likes of this Review.


        :return: The likes of this Review.
        :rtype: int
        """
        return self._likes

    @likes.setter
    def likes(self, likes: int):
        """Sets the likes of this Review.


        :param likes: The likes of this Review.
        :type likes: int
        """

        self._likes = likes

    @property
    def rating(self) -> float:
        """Gets the rating of this Review.


        :return: The rating of this Review.
        :rtype: float
        """
        return self._rating

    @rating.setter
    def rating(self, rating: float):
        """Sets the rating of this Review.


        :param rating: The rating of this Review.
        :type rating: float
        """

        self._rating = rating

    @property
    def review(self) -> str:
        """Gets the review of this Review.


        :return: The review of this Review.
        :rtype: str
        """
        return self._review

    @review.setter
    def review(self, review: str):
        """Sets the review of this Review.


        :param review: The review of this Review.
        :type review: str
        """

        self._review = review
