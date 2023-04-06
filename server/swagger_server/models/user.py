# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class User(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, user_id: int=None, username: str=None, password: str=None, bio: str=None, pfp: str=None, watchlist_movies: Dict[str, bool]=None, watchlist_shows: Dict[str, bool]=None, interests: List[str]=None):  # noqa: E501
        """User - a model defined in Swagger

        :param user_id: The user_id of this User.  # noqa: E501
        :type user_id: int
        :param username: The username of this User.  # noqa: E501
        :type username: str
        :param password: The password of this User.  # noqa: E501
        :type password: str
        :param bio: The bio of this User.  # noqa: E501
        :type bio: str
        :param pfp: The pfp of this User.  # noqa: E501
        :type pfp: str
        :param watchlist_movies: The watchlist_movies of this User.  # noqa: E501
        :type watchlist_movies: Dict[str, bool]
        :param watchlist_shows: The watchlist_shows of this User.  # noqa: E501
        :type watchlist_shows: Dict[str, bool]
        :param interests: The interests of this User.  # noqa: E501
        :type interests: List[str]
        """
        self.swagger_types = {
            'user_id': int,
            'username': str,
            'password': str,
            'bio': str,
            'pfp': str,
            'watchlist_movies': Dict[str, bool],
            'watchlist_shows': Dict[str, bool],
            'interests': List[str]
        }

        self.attribute_map = {
            'user_id': 'user_id',
            'username': 'username',
            'password': 'password',
            'bio': 'bio',
            'pfp': 'pfp',
            'watchlist_movies': 'watchlist_movies',
            'watchlist_shows': 'watchlist_shows',
            'interests': 'interests'
        }
        self._user_id = user_id
        self._username = username
        self._password = password
        self._bio = bio
        self._pfp = pfp
        self._watchlist_movies = watchlist_movies
        self._watchlist_shows = watchlist_shows
        self._interests = interests

    @classmethod
    def from_dict(cls, dikt) -> 'User':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The user of this User.  # noqa: E501
        :rtype: User
        """
        return util.deserialize_model(dikt, cls)

    @property
    def user_id(self) -> int:
        """Gets the user_id of this User.


        :return: The user_id of this User.
        :rtype: int
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id: int):
        """Sets the user_id of this User.


        :param user_id: The user_id of this User.
        :type user_id: int
        """

        self._user_id = user_id

    @property
    def username(self) -> str:
        """Gets the username of this User.


        :return: The username of this User.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username: str):
        """Sets the username of this User.


        :param username: The username of this User.
        :type username: str
        """

        self._username = username

    @property
    def password(self) -> str:
        """Gets the password of this User.


        :return: The password of this User.
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password: str):
        """Sets the password of this User.


        :param password: The password of this User.
        :type password: str
        """

        self._password = password

    @property
    def bio(self) -> str:
        """Gets the bio of this User.


        :return: The bio of this User.
        :rtype: str
        """
        return self._bio

    @bio.setter
    def bio(self, bio: str):
        """Sets the bio of this User.


        :param bio: The bio of this User.
        :type bio: str
        """

        self._bio = bio

    @property
    def pfp(self) -> str:
        """Gets the pfp of this User.


        :return: The pfp of this User.
        :rtype: str
        """
        return self._pfp

    @pfp.setter
    def pfp(self, pfp: str):
        """Sets the pfp of this User.


        :param pfp: The pfp of this User.
        :type pfp: str
        """

        self._pfp = pfp

    @property
    def watchlist_movies(self) -> Dict[str, bool]:
        """Gets the watchlist_movies of this User.


        :return: The watchlist_movies of this User.
        :rtype: Dict[str, bool]
        """
        return self._watchlist_movies

    @watchlist_movies.setter
    def watchlist_movies(self, watchlist_movies: Dict[str, bool]):
        """Sets the watchlist_movies of this User.


        :param watchlist_movies: The watchlist_movies of this User.
        :type watchlist_movies: Dict[str, bool]
        """

        self._watchlist_movies = watchlist_movies

    @property
    def watchlist_shows(self) -> Dict[str, bool]:
        """Gets the watchlist_shows of this User.


        :return: The watchlist_shows of this User.
        :rtype: Dict[str, bool]
        """
        return self._watchlist_shows

    @watchlist_shows.setter
    def watchlist_shows(self, watchlist_shows: Dict[str, bool]):
        """Sets the watchlist_shows of this User.


        :param watchlist_shows: The watchlist_shows of this User.
        :type watchlist_shows: Dict[str, bool]
        """

        self._watchlist_shows = watchlist_shows

    @property
    def interests(self) -> List[str]:
        """Gets the interests of this User.


        :return: The interests of this User.
        :rtype: List[str]
        """
        return self._interests

    @interests.setter
    def interests(self, interests: List[str]):
        """Sets the interests of this User.


        :param interests: The interests of this User.
        :type interests: List[str]
        """

        self._interests = interests
