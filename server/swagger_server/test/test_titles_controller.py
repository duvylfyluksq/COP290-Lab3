# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.tvshow import Tvshow  # noqa: E501
from swagger_server.test import BaseTestCase


class TestTitlesController(BaseTestCase):
    """TitlesController integration test stubs"""

    def test_movie_get(self):
        """Test case for movie_get

        Sort/Filter movies
        """
        query_string = [('genre', 'genre_example'),
                        ('sort_type_browse', 'sort_type_browse_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/movie',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_search_get(self):
        """Test case for search_get

        
        """
        query_string = [('expression', 'expression_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/search',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_title_id_get(self):
        """Test case for title_id_get

        Get information about a Movie/TV Show
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/title/{id}'.format(id='id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_tvshow_get(self):
        """Test case for tvshow_get

        Sort/Filter TV Shows
        """
        query_string = [('genre', 'genre_example'),
                        ('sort_type_browse', 'sort_type_browse_example'),
                        ('sort_order', true)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/tvshow',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
