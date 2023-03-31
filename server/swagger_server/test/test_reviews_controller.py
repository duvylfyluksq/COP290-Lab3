# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.models.user_id import UserId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestReviewsController(BaseTestCase):
    """ReviewsController integration test stubs"""

    def test_review_post(self):
        """Test case for review_post

        Add a new post or review
        """
        query_string = [('title', 'title_example'),
                        ('rating', 10),
                        ('review_title', 'review_title_example'),
                        ('content', 'content_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/review',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_reviews_review_id_comments_post(self):
        """Test case for reviews_review_id_comments_post

        Add comment to review
        """
        query_string = [('comment', Comment())]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/reviews/{review_id}/comments'.format(review_id=56),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_reviews_review_id_likes_post(self):
        """Test case for reviews_review_id_likes_post

        Add like to review
        """
        query_string = [('user_id', UserId())]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/reviews/{review_id}/likes'.format(review_id=56),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_reviews_title_get(self):
        """Test case for reviews_title_get

        Get all reviews of a title
        """
        query_string = [('sort', 'sort_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/Reviews/{Title}'.format(title='title_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_reviews_user_id_get(self):
        """Test case for reviews_user_id_get

        Get all reviews of a user
        """
        query_string = [('sort', 'sort_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/Reviews/{user_id}'.format(user_id=56),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
