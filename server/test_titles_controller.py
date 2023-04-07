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
        query_string = [('genre', 'Action, Adventure'), ('sort_order', True)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/movie',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_search_get(self):
        """Test case for search_get

        """
        query_string = [('expression', 'vin')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/search',
            method='GET',
            query_string=query_string)
        self.assert200(response, 'Response body is : ' +
                       response.data.decode('utf-8'))

    def test_title_id_get(self):
        """Test case for title_id_get

        Get information about a Movie/TV Show
        """
        payload = json.dumps({"movie_id": {"id": 1}, "show_id": None})
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/title/{id}'.format(id=payload),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        payload = json.dumps({"movie_id": None, "show_id": {"id": 1}})
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/title/{id}'.format(id=payload),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_tvshow_get(self):
        """Test case for tvshow_get

        Sort/Filter TV Shows
        """
        query_string = [('genre', 'Crime'), ('sort_type_browse', 'Rat')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/tvshow',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_title_get(self):
        """Test case for title_get

        Sort/Filter Movies and TV Shows
        """
        query_string = [('genre', 'Drama')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/title',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
