# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.comment_id import CommentId  # noqa: F401,E501
from swagger_server.models.review_id import ReviewId  # noqa: F401,E501
from swagger_server.models.user_id import UserId  # noqa: F401,E501
from swagger_server import util


class Comment(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, comment_id: CommentId=None, review_id: ReviewId=None, user_id: UserId=None, content: str=None):  # noqa: E501
        """Comment - a model defined in Swagger

        :param comment_id: The comment_id of this Comment.  # noqa: E501
        :type comment_id: CommentId
        :param review_id: The review_id of this Comment.  # noqa: E501
        :type review_id: ReviewId
        :param user_id: The user_id of this Comment.  # noqa: E501
        :type user_id: UserId
        :param content: The content of this Comment.  # noqa: E501
        :type content: str
        """
        self.swagger_types = {
            'comment_id': CommentId,
            'review_id': ReviewId,
            'user_id': UserId,
            'content': str
        }

        self.attribute_map = {
            'comment_id': 'comment_id',
            'review_id': 'review_id',
            'user_id': 'user_id',
            'content': 'content'
        }
        self._comment_id = comment_id
        self._review_id = review_id
        self._user_id = user_id
        self._content = content

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
    def comment_id(self) -> CommentId:
        """Gets the comment_id of this Comment.


        :return: The comment_id of this Comment.
        :rtype: CommentId
        """
        return self._comment_id

    @comment_id.setter
    def comment_id(self, comment_id: CommentId):
        """Sets the comment_id of this Comment.


        :param comment_id: The comment_id of this Comment.
        :type comment_id: CommentId
        """

        self._comment_id = comment_id

    @property
    def review_id(self) -> ReviewId:
        """Gets the review_id of this Comment.


        :return: The review_id of this Comment.
        :rtype: ReviewId
        """
        return self._review_id

    @review_id.setter
    def review_id(self, review_id: ReviewId):
        """Sets the review_id of this Comment.


        :param review_id: The review_id of this Comment.
        :type review_id: ReviewId
        """

        self._review_id = review_id

    @property
    def user_id(self) -> UserId:
        """Gets the user_id of this Comment.


        :return: The user_id of this Comment.
        :rtype: UserId
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id: UserId):
        """Sets the user_id of this Comment.


        :param user_id: The user_id of this Comment.
        :type user_id: UserId
        """

        self._user_id = user_id

    @property
    def content(self) -> str:
        """Gets the content of this Comment.


        :return: The content of this Comment.
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content: str):
        """Sets the content of this Comment.


        :param content: The content of this Comment.
        :type content: str
        """

        self._content = content
