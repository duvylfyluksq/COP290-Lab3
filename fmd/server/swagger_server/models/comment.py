# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Comment(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, comment: str=None, user_id: int=None):  # noqa: E501
        """Comment - a model defined in Swagger

        :param comment: The comment of this Comment.  # noqa: E501
        :type comment: str
        :param user_id: The user_id of this Comment.  # noqa: E501
        :type user_id: int
        """
        self.swagger_types = {
            'comment': str,
            'user_id': int
        }

        self.attribute_map = {
            'comment': 'comment',
            'user_id': 'user_id'
        }
        self._comment = comment
        self._user_id = user_id

    @classmethod
    def from_dict(cls, dikt) -> 'Comment':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The comment of this Comment.  # noqa: E501
        :rtype: Comment
        """
        return util.deserialize_model(dikt, cls)

    @property
    def comment(self) -> str:
        """Gets the comment of this Comment.


        :return: The comment of this Comment.
        :rtype: str
        """
        return self._comment

    @comment.setter
    def comment(self, comment: str):
        """Sets the comment of this Comment.


        :param comment: The comment of this Comment.
        :type comment: str
        """

        self._comment = comment

    @property
    def user_id(self) -> int:
        """Gets the user_id of this Comment.


        :return: The user_id of this Comment.
        :rtype: int
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id: int):
        """Sets the user_id of this Comment.


        :param user_id: The user_id of this Comment.
        :type user_id: int
        """

        self._user_id = user_id
