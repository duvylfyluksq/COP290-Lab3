import unittest
import datetime
import json
import swagger_server.db as db
from swagger_server.models import User, UserId, MovieId, ShowId, Review, Movie, Tvshow, ReviewId, CommentId, Comment


class TestDB(unittest.TestCase):

    def setUp(self):
        self.user = User(user_id=None, username="testuser", password="testpass", bio="testbio",
                         pfp="testpfp.com", watchlist_movies={1: True, 2: False, 3: True},
                         watchlist_shows={7: True, 8: False, 9: True}, interests=["Action", "Comedy", "Drama"])
        self.comment = Comment(comment_id=None, review_id=1,
                               user_id=1, content="test comment")
        self.review = Review(review_id=None, title="test review", movie_id=1, show_id=None, user_id=1,
                             likes={1: True, 2: False, 3: True}, rating=8, content="test review content",
                             creation_time=datetime.datetime(2022, 4, 4, 14, 0, 0))

    def tearDown(self):
        with db.connection.cursor() as cursor:
            sql = f"DELETE FROM `user` WHERE `user_id` = %s"
            cursor.execute(sql, (self.user.user_id,))
            sql = f"DELETE FROM `comment` WHERE `comment_id` = %s"
            cursor.execute(sql, (self.comment.comment_id,))
            sql = f"DELETE FROM `review` WHERE `review_id` = %s"
            cursor.execute(sql, (self.review.review_id,))
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
            self.assertEqual(result['username'], self.user.username)
            self.assertEqual(result['password'], self.user.password)
            self.assertEqual(result['bio'], self.user.bio)
            self.assertEqual(result['pfp'], self.user.pfp)

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

    def test_getWatchlist_fromUser(self):
        db.addUser(self.user)
        L = db.getWatchlist_fromUser(self.user)
        titles = []
        for i in L:
            if (isinstance(i, MovieId)):
                titles.append(i.id)
            elif (isinstance(i, ShowId)):
                titles.append(i.id)
        self.assertEqual(sorted(titles), [1, 3, 7, 9])

    def test_getTvshow(self):
        show_id = 1
        cur = db.getTvshow(show_id)
        self.assertEqual(cur.show_id.id, show_id)

    def test_getMovie(self):
        movie_id = 1
        cur = db.getMovie(movie_id)
        self.assertEqual(cur.movie_id.id, movie_id)

    def test_addComment(self):
        db.addComment(self.comment)
        self.assertIsNotNone(self.comment.comment_id)
        with db.connection.cursor() as cursor:
            sql = f"SELECT * FROM `comment` WHERE `comment_id` = %s"
            cursor.execute(sql, (self.comment.comment_id,))
            result = cursor.fetchone()
            self.assertEqual(result['comment_id'], self.comment.comment_id)
            self.assertEqual(result['user_id'], self.comment.user_id)
            self.assertEqual(result['review_id'], self.comment.review_id)
            self.assertEqual(result['content'], self.comment.content)

    def test_Review(self):
        db.addReview(self.review)
        self.assertIsNotNone(self.review.review_id)
        with db.connection.cursor() as cursor:
            sql = "SELECT * FROM `review` WHERE review_id = %s"
            cursor.execute(sql, (self.review.review_id,))
            result = cursor.fetchone()
            self.assertEqual(result['review_id'], self.review.review_id)
            self.assertEqual(result['title'], self.review.title)
            self.assertEqual(result['movie_id'], self.review.movie_id)
            self.assertEqual(result['show_id'], self.review.show_id)
            self.assertEqual(result['user_id'], self.review.user_id)
            self.assertEqual(result['rating'], self.review.rating)
            self.assertEqual(result['content'], self.review.content)
            self.assertEqual(result['creation_time'].strftime(
                '%Y-%m-%d %H:%M:%S'), self.review.creation_time.strftime('%Y-%m-%d %H:%M:%S'))

    def test_getReviews_forMovie(self):
        movie_id = 1
        r = db.getReviews_forMovie(db.getMovie(movie_id))
        L = [i.review_id for i in r]
        self.assertEqual(sorted(L), [1, 2])

    def test_getReviews_forShow(self):
        show_id = 2
        r = db.getReviews_forShow(db.getTvshow(show_id))
        L = [i.review_id for i in r]
        self.assertEqual(sorted(L), [3, 4, 8])

    def test_getReviews_forUser(self):
        user_id = 5
        r = db.getReviews_forUser(db.getUser(user_id))
        L = [i.review_id for i in r]
        self.assertEqual(sorted(L), [1, 3, 4, 6])

    def test_getReview(self):
        review_id = 1
        cur = db.getReview(review_id)
        self.assertEqual(cur.review_id, review_id)

    def test_getComments_fromReview(self):
        review_id = 1
        r = db.getComments_fromReview(db.getReview(review_id))
        L = [i.comment_id for i in r]
        self.assertEqual(sorted(L), [2, 9])

    def test_Search(self):
        L = db.Search("T")
        self.assertEqual(len(L), 7)
        L = [i.title for i in L]
        self.assertEqual(
            sorted(L), ["The Godfather", "The Lion King", "The Matrix",
                        "The Shawshank Redemption", "The Shining", "Titanic", "True Detective"])

    def test_addOrDelete_fromWatchlist(self):
        db.addUser(self.user)
        movie_id = 8
        db.addOrDelete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual((self.user.watchlist_movies)
                         [movie_id], True)
        movie_id = 1
        db.addOrDelete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual((self.user.watchlist_movies)
                         [movie_id], False)
        movie_id = 2
        db.addOrDelete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual((self.user.watchlist_movies)
                         [movie_id], True)
        show_id = 1
        db.addOrDelete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual((self.user.watchlist_shows)
                         [show_id], True)
        show_id = 7
        db.addOrDelete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual((self.user.watchlist_shows)
                         [show_id], False)
        show_id = 8
        db.addOrDelete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual((self.user.watchlist_shows)
                         [show_id], True)

    def test_delete_fromWatchlist(self):
        db.addUser(self.user)
        movie_id = 8
        db.delete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual(
            movie_id not in self.user.watchlist_movies.keys(), True)
        movie_id = 1
        db.delete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual((self.user.watchlist_movies)
                         [movie_id], False)
        movie_id = 2
        db.delete_fromWatchlist(self.user, db.getMovie(movie_id))
        self.assertEqual((self.user.watchlist_movies)
                         [movie_id], False)
        show_id = 1
        db.delete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual(show_id not in self.user.watchlist_shows.keys(), True)
        show_id = 7
        db.delete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual((self.user.watchlist_shows)
                         [show_id], False)
        show_id = 8
        db.delete_fromWatchlist(self.user, db.getTvshow(show_id))
        self.assertEqual((self.user.watchlist_shows)
                         [show_id], False)

    def test_LikeOrUnlike(self):
        db.addReview(self.review)
        user_id = 8
        db.LikeOrUnlike(self.review, db.getUser(user_id))
        self.assertEqual((self.review.likes)
                         [user_id], True)
        user_id = 1
        db.LikeOrUnlike(self.review, db.getUser(user_id))
        self.assertEqual((self.review.likes)
                         [user_id], False)
        user_id = 2
        db.LikeOrUnlike(self.review, db.getUser(user_id))
        self.assertEqual((self.review.likes)
                         [user_id], True)

    def test_countReviews_User(self):
        user_id = 5
        count = db.countReviews_User(db.getUser(user_id))
        self.assertEqual(count, 4)
        user_id = 2
        count = db.countReviews_User(db.getUser(user_id))
        self.assertEqual(count, 1)
        user_id = 3
        count = db.countReviews_User(db.getUser(user_id))
        self.assertEqual(count, 3)
        user_id = 7
        count = db.countReviews_User(db.getUser(user_id))
        self.assertEqual(count, 2)

    def test_countComments_User(self):
        user_id = 1
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 2)
        user_id = 2
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 1)
        user_id = 3
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 1)
        user_id = 4
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 2)
        user_id = 5
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 1)
        user_id = 7
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 2)
        user_id = 8
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 1)
        user_id = 9
        count = db.countComments_User(db.getUser(user_id))
        self.assertEqual(count, 1)

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
