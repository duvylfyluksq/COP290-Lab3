import unittest
import json
import swagger_server.db as db
from swagger_server.models import User, UserId, MovieId, ShowId


class TestDB(unittest.TestCase):

    def setUp(self):
        self.user = User(user_id=None, username="testuser", password="testpass", bio="testbio",
                         pfp="testpfp.com", watchlist_movies={MovieId(1): True, MovieId(2): False, MovieId(3): True},
                         watchlist_shows={ShowId(7): True, ShowId(8): False, ShowId(9): True}, interests=["Action", "Comedy", "Drama"])

    def tearDown(self):
        with db.connection.cursor() as cursor:
            sql = f"DELETE FROM `user` WHERE `user_id` = %s"
            cursor.execute(sql, (self.user.user_id,))
            db.connection.commit()

    def test_getUser(self):
        user_id = 1
        cur = db.getUser(user_id)
        self.assertTrue(cur.user_id, user_id)

    def test_addUser(self):
        db.addUser(self.user)
        self.assertIsNotNone(self.user.user_id)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `user` WHERE `user_id` = %s"
            cursor.execute(sql, (self.user.user_id,))
            result = cursor.fetchone()
            self.assertEqual(result['user_id'], self.user.user_id)

    def test_editUsername(self):
        db.addUser(self.user)
        new_username = "new"
        db.editUsername(self.user, new_username)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `user` WHERE `user_id` = {self.user.user_id}"
            cursor.execute(sql)
            result = cursor.fetchone()
            self.assertEqual(result['username'], new_username)

    def test_editPassword(self):
        db.addUser(self.user)
        new_password = "new"
        db.editPassword(self.user, new_password)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `user` WHERE `user_id` = {self.user.user_id}"
            cursor.execute(sql)
            result = cursor.fetchone()
            self.assertEqual(result['password'], new_password)

    def test_editBio(self):
        db.addUser(self.user)
        new_bio = "new"
        db.editBio(self.user, new_bio)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `user` WHERE `user_id` = {self.user.user_id}"
            cursor.execute(sql)
            result = cursor.fetchone()
            self.assertEqual(result['bio'], new_bio)

    def test_editInterests(self):
        db.addUser(self.user)
        new_interests = ["Romance", "Adventure", "Thriller"]
        db.editInterests(self.user, new_interests)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `user` WHERE `user_id` = {self.user.user_id}"
            cursor.execute(sql)
            result = cursor.fetchone()
            self.assertEqual(json.loads(result['interests']), new_interests)

    def test_checkLogin(self):
        db.addUser(self.user)
        self.assertTrue(db.checkLogin("testuser", "testpass"))
        self.assertFalse(db.checkLogin("testuser", "wrongpassword"))
        self.assertFalse(db.checkLogin("nonexistentuser", "anypassword"))

    # Find a way to differentiate between MovieId and ShowId, modify the model
    def test_getWatchlist_fromUser(self):
        db.addUser(self.user)
        L = db.getWatchlist_fromUser(self.user)
        print(isinstance(L[0], MovieId) or isinstance(L[0], ShowId))
        print(L[0])
        self.assertEqual(sorted(L), ['1', '3', '7', '9'])


if __name__ == '__main__':
    unittest.main()
