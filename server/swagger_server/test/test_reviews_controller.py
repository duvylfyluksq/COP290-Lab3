# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.movie_id import MovieId  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.review_id import ReviewId  # noqa: E501
from swagger_server.models.show_id import ShowId  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user_id import UserId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestReviewsController(BaseTestCase):
    """ReviewsController integration test stubs"""

    def test_review_post(self):
        """Test case for review_post

        Add a new review
        """
        query_string = [('movie_id', MovieId()),
                        ('show_id', ShowId()),
                        ('user_id', UserId()),
                        ('rating', 10),
                        ('title', 'title_example'),
                        ('content', 'content_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_review_id_comment_post(self):
        """Test case for review_review_id_comment_post

        Add comment to review
        """
        query_string = [('user_id', UserId()),
                        ('content', 'content_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{review_id}/comment'.format(review_id=ReviewId()),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_review_id_likes_put(self):
        """Test case for review_review_id_likes_put

        Like/Unlike Review
        """
        query_string = [('user_id', UserId())]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{review_id}/likes'.format(review_id=ReviewId()),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_title_get(self):
        """Test case for review_title_get

        Get all reviews of a title
        """
        query_string = [('sort_type_reviews', 'sort_type_reviews_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{title}'.format(title=Title()),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_user_id_get(self):
        """Test case for review_user_id_get

        Get all reviews of a user
        """
        query_string = [('sort_type_reviews', 'sort_type_reviews_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{user_id}'.format(user_id=UserId()),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
