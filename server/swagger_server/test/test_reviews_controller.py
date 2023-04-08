# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.review import Review  # noqa: E501
from swagger_server.test import BaseTestCase


class TestReviewsController(BaseTestCase):
    """ReviewsController integration test stubs"""

    def test_review_movie_id_get(self):
        """Test case for review_movie_id_get

        Get all reviews of a movie
        """
        query_string = [('sort_type_reviews', 'sort_type_reviews_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/movie/{id}'.format(id=56),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_post(self):
        """Test case for review_post

        Add a new review
        """
        query_string = [('movie_id', 'movie_id_example'),
                        ('show_id', 'show_id_example'),
                        ('user_id', 56),
                        ('rating', 10),
                        ('title', 'title_example'),
                        ('content', 'content_example'),
                        ('creation_time', '2013-10-20T19:20:30+01:00')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_review_id_comment_get(self):
        """Test case for review_review_id_comment_get

        Get all comments of a review
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{review_id}/comment'.format(review_id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_review_id_comment_post(self):
        """Test case for review_review_id_comment_post

        Add comment to review
        """
        query_string = [('user_id', 56),
                        ('content', 'content_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{review_id}/comment'.format(review_id=56),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_review_id_likes_put(self):
        """Test case for review_review_id_likes_put

        Like/Unlike Review
        """
        query_string = [('user_id', 56)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/{review_id}/likes'.format(review_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_tvshow_id_get(self):
        """Test case for review_tvshow_id_get

        Get all reviews of a Tvshow
        """
        query_string = [('sort_type_reviews', 'sort_type_reviews_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/tvshow/{id}'.format(id=56),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_review_user_user_id_get(self):
        """Test case for review_user_user_id_get

        Get all reviews of a user
        """
        query_string = [('sort_type_reviews', 'sort_type_reviews_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/review/user/{user_id}'.format(user_id=56),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
