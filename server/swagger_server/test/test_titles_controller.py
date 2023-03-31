# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.shows import Shows  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.test import BaseTestCase


class TestTitlesController(BaseTestCase):
    """TitlesController integration test stubs"""

    def test_movies_get(self):
        """Test case for movies_get

        Get movies by genre and sorting type
        """
        query_string = [('genre', 'genre_example'),
                        ('sort', 'sort_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/Movies',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_t_vs_get(self):
        """Test case for t_vs_get

        Get TV shows by genre and sorting type
        """
        query_string = [('genre', 'genre_example'),
                        ('sort', 'sort_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/TVs',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_title_title_get(self):
        """Test case for title_title_get

        Get information about a title
        """
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/Title/{Title}'.format(title='title_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
