# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class UserIdPfpBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, pfp: str=None):  # noqa: E501
        """UserIdPfpBody - a model defined in Swagger

        :param pfp: The pfp of this UserIdPfpBody.  # noqa: E501
        :type pfp: str
        """
        self.swagger_types = {
            'pfp': str
        }

        self.attribute_map = {
            'pfp': 'pfp'
        }
        self._pfp = pfp

    @classmethod
    def from_dict(cls, dikt) -> 'UserIdPfpBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The user_id_pfp_body of this UserIdPfpBody.  # noqa: E501
        :rtype: UserIdPfpBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def pfp(self) -> str:
        """Gets the pfp of this UserIdPfpBody.


        :return: The pfp of this UserIdPfpBody.
        :rtype: str
        """
        return self._pfp

    @pfp.setter
    def pfp(self, pfp: str):
        """Sets the pfp of this UserIdPfpBody.


        :param pfp: The pfp of this UserIdPfpBody.
        :type pfp: str
        """
        if pfp is None:
            raise ValueError("Invalid value for `pfp`, must not be `None`")  # noqa: E501

        self._pfp = pfp
