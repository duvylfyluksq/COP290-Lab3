# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase
from swagger_server.models import UserSigninBody
from swagger_server.models import UserSignupBody


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_profile_user_id_bio_put(self):
        """Test case for profile_user_id_bio_put

        Update user bio
        """
        query_string = [('bio', 'bio_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/bio'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_interests_put(self):
        """Test case for profile_user_id_interests_put

        Update interests
        """
        query_string = [
            ('interests', 'interests_example,interests_example,interests_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/interests'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_password_put(self):
        """Test case for profile_user_id_password_put

        Update Password
        """
        query_string = [('password', 'password_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/password'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_pfp_put(self):
        """Test case for profile_user_id_pfp_put

        Update profile picture
        """
        query_string = [('pfp', 'pfp_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/pfp'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_username_put(self):
        """Test case for profile_user_id_username_put

        Update username
        """
        query_string = [('username', 'username_example')]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/username'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_get(self):
        """Test case for watchlist_user_id_get

        Get all titles in user watchlist
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/{user_id}'.format(
                user_id=1),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_put(self):
        """Test case for watchlist_user_id_put

        Add/Remove title from watchlist
        """

        query_string = [
            ('id', json.dumps({"movie_id": {"id": 1}, "show_id": None}))]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/{user_id}'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assertStatus(response, 200,
                          'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_remove_put(self):
        """Test case for watchlist_user_id_remove_put

        Remove title from user's watchlist
        """
        query_string = [
            ('id', json.dumps({"movie_id": {"id": 2}, "show_id": None}))]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/{user_id}/remove'.format(
                user_id=1),
            method='PUT',
            query_string=query_string)
        self.assertStatus(response, 200,
                          'Response body is : ' + response.data.decode('utf-8'))

    def test_user_user_id_get(self):
        """Test case for user_user_id_get

        Get User object(user details) from user id
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/user/{user_id}'.format(
                user_id=2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_signin_post(self):
        """Test case for user_signin_post

        Sign in user with credentials
        """
        body = UserSigninBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/user/signin',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_signup_post(self):
        """Test case for user_signup_post

        Sign Up
        """
        body = UserSignupBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/user/signup',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()