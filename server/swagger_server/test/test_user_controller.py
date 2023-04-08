# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.title import Title  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_id_bio_body import UserIdBioBody  # noqa: E501
from swagger_server.models.user_id_interests_body import UserIdInterestsBody  # noqa: E501
from swagger_server.models.user_id_password_body import UserIdPasswordBody  # noqa: E501
from swagger_server.models.user_id_pfp_body import UserIdPfpBody  # noqa: E501
from swagger_server.models.user_id_username_body import UserIdUsernameBody  # noqa: E501
from swagger_server.models.user_signin_body import UserSigninBody  # noqa: E501
from swagger_server.models.user_signup_body import UserSignupBody  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_profile_user_id_bio_put(self):
        """Test case for profile_user_id_bio_put

        Update user bio
        """
        body = UserIdBioBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/bio'.format(user_id=56),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_interests_put(self):
        """Test case for profile_user_id_interests_put

        Update interests
        """
        body = UserIdInterestsBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/interests'.format(user_id=56),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_password_put(self):
        """Test case for profile_user_id_password_put

        Update Password
        """
        body = UserIdPasswordBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/password'.format(user_id=56),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_pfp_put(self):
        """Test case for profile_user_id_pfp_put

        Update profile picture
        """
        body = UserIdPfpBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/pfp'.format(user_id=56),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_profile_user_id_username_put(self):
        """Test case for profile_user_id_username_put

        Update username
        """
        body = UserIdUsernameBody()
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/profile/{user_id}/username'.format(user_id=56),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
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

    def test_user_user_id_get(self):
        """Test case for user_user_id_get

        Get User object(user details) from user id
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/user/{user_id}'.format(user_id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_movie_remove_user_id_put(self):
        """Test case for watchlist_movie_remove_user_id_put

        Remove Movie from user's watchlist
        """
        query_string = [('id', 56)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/movie/remove/{user_id}'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_movie_user_id_put(self):
        """Test case for watchlist_movie_user_id_put

        Add/Remove movie from watchlist
        """
        query_string = [('id', 56)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/movie/{user_id}'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_tvshow_remove_user_id_put(self):
        """Test case for watchlist_tvshow_remove_user_id_put

        Remove TV show from user's watchlist
        """
        query_string = [('id', 56)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/tvshow/remove/{user_id}'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_tvshow_user_id_put(self):
        """Test case for watchlist_tvshow_user_id_put

        Add/Remove TV show from watchlist
        """
        query_string = [('id', 56)]
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/tvshow/{user_id}'.format(user_id=56),
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_watchlist_user_id_get(self):
        """Test case for watchlist_user_id_get

        Get all titles in user watchlist
        """
        response = self.client.open(
            '/VEDANTANEOGI_1/FMD_API3.0/3.0.0/watchlist/{user_id}'.format(user_id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
