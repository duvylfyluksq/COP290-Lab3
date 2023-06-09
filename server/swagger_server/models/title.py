# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.movie import Movie  # noqa: F401,E501
from swagger_server.models.tvshow import Tvshow  # noqa: F401,E501
from swagger_server import util


class Title(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, movie: Movie=None, tvshow: Tvshow=None):  # noqa: E501
        """Title - a model defined in Swagger

        :param movie: The movie of this Title.  # noqa: E501
        :type movie: Movie
        :param tvshow: The tvshow of this Title.  # noqa: E501
        :type tvshow: Tvshow
        """
        self.swagger_types = {
            'movie': Movie,
            'tvshow': Tvshow
        }

        self.attribute_map = {
            'movie': 'movie',
            'tvshow': 'tvshow'
        }
        self._movie = movie
        self._tvshow = tvshow

    @classmethod
    def from_dict(cls, dikt) -> 'Title':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The title of this Title.  # noqa: E501
        :rtype: Title
        """
        return util.deserialize_model(dikt, cls)

    @property
    def movie(self) -> Movie:
        """Gets the movie of this Title.


        :return: The movie of this Title.
        :rtype: Movie
        """
        return self._movie

    @movie.setter
    def movie(self, movie: Movie):
        """Sets the movie of this Title.


        :param movie: The movie of this Title.
        :type movie: Movie
        """

        self._movie = movie

    @property
    def tvshow(self) -> Tvshow:
        """Gets the tvshow of this Title.


        :return: The tvshow of this Title.
        :rtype: Tvshow
        """
        return self._tvshow

    @tvshow.setter
    def tvshow(self, tvshow: Tvshow):
        """Sets the tvshow of this Title.


        :param tvshow: The tvshow of this Title.
        :type tvshow: Tvshow
        """

        self._tvshow = tvshow
