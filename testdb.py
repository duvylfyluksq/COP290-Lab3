import unittest

import db
from models import User, Movie, Tvshow, Review, Comment


class TestDB(unittest.TestCase):
    def test_add_category(self):
        db.addUser(User(user_id=None, username="Dhruv", password="lmao", bio="ok", pfp="fmd.com/pfp.jpeg",
                   watchlist_movies={}, watchlist_shows={}, interests=["Action", "Action", "Action"]))


if __name__ == '__main__':
    unittest.main()
