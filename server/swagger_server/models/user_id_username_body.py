# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class UserIdUsernameBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, username: str=None):  # noqa: E501
        """UserIdUsernameBody - a model defined in Swagger

        :param username: The username of this UserIdUsernameBody.  # noqa: E501
        :type username: str
        """
        self.swagger_types = {
            'username': str
        }

        self.attribute_map = {
            'username': 'username'
        }
        self._username = username

    @classmethod
    def from_dict(cls, dikt) -> 'UserIdUsernameBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The user_id_username_body of this UserIdUsernameBody.  # noqa: E501
        :rtype: UserIdUsernameBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def username(self) -> str:
        """Gets the username of this UserIdUsernameBody.


        :return: The username of this UserIdUsernameBody.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username: str):
        """Sets the username of this UserIdUsernameBody.


        :param username: The username of this UserIdUsernameBody.
        :type username: str
        """
        if username is None:
            raise ValueError("Invalid value for `username`, must not be `None`")  # noqa: E501

        self._username = username
