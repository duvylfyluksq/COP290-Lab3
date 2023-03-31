# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_profile_user_id_bio_put(self):
        """Test case for profile_user_id_bio_put

        Update user bio
        """
        query_string = [('address', 'address_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/profile/{user_id}/bio'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_name_put(self):
        """Test case for profile_user_id_name_put

        Update user name
        """
        query_string = [('name', 'name_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/profile/{user_id}/name'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_pic_put(self):
        """Test case for profile_user_id_pic_put

        Update user pic
        """
        query_string = [('pic', 'pic_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/profile/{user_id}/pic'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_signin_post(self):
        """Test case for users_signin_post

        Sign in user with credentials
        """
        query_string = [('username', 'username_example'),
                        ('password', 'password_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/users/signin',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_signup_post(self):
        """Test case for users_signup_post

        Create a new user account
        """
        query_string = [('username', 'username_example'),
                        ('password', 'password_example'),
                        ('confirm_password', 'confirm_password_example'),
                        ('interests', 'interests_example'),
                        ('bio', 'bio_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/users/signup',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_get(self):
        """Test case for watchlist_user_id_get

        Get all titles in user watchlist
        """
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/watchlist/{user_id}'.format(user_id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_post(self):
        """Test case for watchlist_user_id_post

        Add a title to user watchlist
        """
        query_string = [('title', 'title_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/watchlist/{user_id}'.format(user_id=56),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_remove_put(self):
        """Test case for watchlist_user_id_remove_put

        Remove title from user's watchlist
        """
        query_string = [('title', 'title_example')]
        response = self.client.open(
            '/VINAYTAYAL28/FMD_API3.0/3.0.0/watchlist/{user_id}/remove'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
