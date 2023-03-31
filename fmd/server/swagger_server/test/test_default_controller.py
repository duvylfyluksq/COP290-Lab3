# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.movie import Movie  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_search_get(self):
        """Test case for search_get

        
        """
        query_string = [('expression', 'expression_example'),
                        ('language', 'language_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/search',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
