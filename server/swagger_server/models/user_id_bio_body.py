# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class UserIdBioBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, bio: str=None):  # noqa: E501
        """UserIdBioBody - a model defined in Swagger

        :param bio: The bio of this UserIdBioBody.  # noqa: E501
        :type bio: str
        """
        self.swagger_types = {
            'bio': str
        }

        self.attribute_map = {
            'bio': 'bio'
        }
        self._bio = bio

    @classmethod
    def from_dict(cls, dikt) -> 'UserIdBioBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The user_id_bio_body of this UserIdBioBody.  # noqa: E501
        :rtype: UserIdBioBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def bio(self) -> str:
        """Gets the bio of this UserIdBioBody.


        :return: The bio of this UserIdBioBody.
        :rtype: str
        """
        return self._bio

    @bio.setter
    def bio(self, bio: str):
        """Sets the bio of this UserIdBioBody.


        :param bio: The bio of this UserIdBioBody.
        :type bio: str
        """
        if bio is None:
            raise ValueError("Invalid value for `bio`, must not be `None`")  # noqa: E501

        self._bio = bio
