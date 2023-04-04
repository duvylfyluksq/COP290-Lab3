import unittest
import json
import swagger_server.db as db
from swagger_server.models import User, UserId, MovieId, ShowId, Review, Movie, Tvshow


class TestDB(unittest.TestCase):

    def setUp(self):
        self.user = User(user_id=None, username="testuser", password="testpass", bio="testbio",
                         pfp="testpfp.com", watchlist_movies={1: True, 2: False, 3: True},
                         watchlist_shows={7: True, 8: False, 9: True}, interests=["Action", "Comedy", "Drama"])

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
        titles = []
        for i in L:
            if (isinstance(i, MovieId)):
                titles.append(i.movie_id)
            elif (isinstance(i, ShowId)):
                titles.append(i.show_id)
        self.assertEqual(sorted(titles), [1, 3, 7, 9])

    """
    def test_addcomment(self):
        db.addUser(self.user)
        db.addComment(self.user, "testcomment")
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `comment` WHERE `user_id` = {self.user.user_id}"
            cursor.execute(sql)
            result = cursor.fetchone()
            self.assertEqual(result['comment'], "testcomment")
    """

    def test_getMovie(self):
        movie_id = 1
        cur = db.getMovie(movie_id)
        self.assertEqual(cur.movie_id, movie_id)

    def test_getTvshow(self):
        show_id = 1
        cur = db.getTvshow(show_id)
        self.assertEqual(cur.show_id, show_id)

    """
    def test_sortLikes_Review(self):
        cur = db.sortLikes_Review(True)
        self.assertEqual(type(cur[0]), Review)

        i = 0
        while i < len(cur) - 1:
            a = cur[i].likes
            b = cur[i+1].likes
            count_true_in_a = len(
                [value for value in a.values() if value == True])
            count_true_in_b = len(
                [value for value in b.values() if value == True])
            if count_true_in_a > count_true_in_b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortrecent_Review(self):
        cur = db.sortrecent_Review(True)
        self.assertEqual(type(cur[0]), Review)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].creation_time
            b = cur[i+1].creation_time
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortreview(self):
        cur = db.sortreview("Recent")
        self.test_sortrecent_Review()
        cur = db.sortreview("Likes")

        self.test_sortLikes_Review()

    def test_sortRating_Movie(self):
        cur = db.sortRating_Movie(True)
        self.assertEqual(type(cur[0]), Movie)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].rating
            b = cur[i+1].rating
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortRating_Tvshow(self):
        cur = db.sortRating_Tvshow(True)
        self.assertEqual(type(cur[0]), Tvshow)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].rating
            b = cur[i+1].rating
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortrecent_Movie(self):
        cur = db.sortrecent_Movie(True)
        self.assertEqual(type(cur[0]), Movie)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].creation_time
            b = cur[i+1].creation_time
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortrecent_Tvshow(self):
        cur = db.sortrecent_Tvshow(True)
        self.assertEqual(type(cur[0]), Tvshow)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].creation_time
            b = cur[i+1].creation_time
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortLex_Movie(self):
        cur = db.sortLex_Movie(True)
        self.assertEqual(type(cur[0]), Movie)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].title
            b = cur[i+1].title
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortLex_Tvshow(self):
        cur = db.sortLex_Tvshow(True)
        self.assertEqual(type(cur[0]), Tvshow)
        i = 0
        while i < len(cur) - 1:
            a = cur[i].title
            b = cur[i+1].title
            if a > b:
                self.assertTrue(False)
            i += 1
        self.assertTrue(True)

    def test_sortPop_Movie(self):
        cur = db.sortPop_Movie(True)
        self.assertEqual(type(cur[0]), Movie)
        i = 0
        while i < len(cur) - 1:
            a = cur[i]
            b = cur[i+1]

            a_reviews = Review.query.filter_by(movie_id=a.id).count()

            # Get review count for movie b
            b_reviews = Review.query.filter_by(movie_id=b.id).count()

            if a_reviews > b_reviews:
                self.assertTrue(False)

            i += 1

        self.assertTrue(True)

    def test_sortPop_Tvshow(self):
        cur = db.sortPop_Tvshow(True)
        self.assertEqual(type(cur[0]), Tvshow)
        i = 0
        while i < len(cur) - 1:
            a = cur[i]
            b = cur[i+1]

            a_reviews = Review.query.filter_by(show_id=a.id).count()

            # Get review count for movie b
            b_reviews = Review.query.filter_by(show_id=b.id).count()

            if a_reviews > b_reviews:
                self.assertTrue(False)

            i += 1

        self.assertTrue(True)
    """


if __name__ == '__main__':
    unittest.main()
