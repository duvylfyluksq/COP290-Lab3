import csv
import random
import pymysql
import json
from datetime import datetime

total_movies = 300
total_tvshows = 16
total_user = 10
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="fmd",
    cursorclass=pymysql.cursors.DictCursor,
)
cursor = connection.cursor()


comments = ["Thank you for leaving a review! We're glad to hear that you enjoyed your experience with us.",

            "We appreciate your feedback and take it seriously. Please let us know if there's anything we can do to improve.",

            "It's great to see that you had a positive experience with us. We hope to see you again soon!",

            "We strive to provide exceptional service and quality products, so we're thrilled to hear that we met your expectations.",

            "We apologize that your experience wasn't what you were hoping for. We'd like to make things right - please reach out to us directly.",
            "Your feedback helps us improve and provide better experiences for all of our customers. Thank you for taking the time to leave a review.",
            "We're sorry to hear that you didn't have a positive experience with us. We'll take your feedback into consideration and work to improve for the future.",
            "Our team works hard to deliver excellent service, and we're pleased to hear that we did just that for you. Thank you for your kind words.",
            "We always aim to exceed our customers' expectations, so we're thrilled to see that we did just that for you. Thanks for the great review!",
            "We value your opinion and appreciate your honest feedback. We look forward to serving you again in the future.",
            ]


def addlikes(review_id, cursor):
    user_id = random.randint(0, total_user)

    # add like for that user and review


def addcomment(user_id, review_id):
    content = random.choice(comments)
    query = "INSERT INTO `comment` (content, user_id, review_id) VALUES (%s, %s, %s)"
    values = (content, user_id, review_id)
    cursor.execute(query, values)


with open('IMDB Dataset.csv', 'r') as f:
    print("Opened File")
    reader = csv.reader(f)
    next(reader)
    data = list(reader)
    for row in data:
        print("Entered data")
        content = row[0]

        movie_id = random.randint(1, total_movies)

        tvshow_id = random.randint(1, total_tvshows)
        title = "Great Watched! Loved it!"
        user_id = random.randint(1, total_user)
        rating = random.randint(1, 10)
        creation_time = "2019-01-01 00:00:00"

        # extract review id from sql for that review
        review2 = {
            "content": content,
            "show_id": tvshow_id,
            "movie_id": None,
            "title": title,
            "user_id": user_id,
            "rating": rating,
            "creation_time": creation_time,
            "likes": {}
        }

        review1 = {
            "content": content,
            "movie_id": movie_id,
            "show_id": None,
            "title": title,
            "user_id": user_id,
            "rating": rating,
            "creation_time": creation_time,
            "likes": {}

        }
        review = random.choice([review1, review2])
        print("Adding review")
        query = "INSERT INTO `review` (title, content, rating, creation_time, user_id, movie_id, show_id) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        values = (review['title'], review['content'], review['rating'],
                  review['creation_time'], review['user_id'], review['movie_id'], review['show_id'])
        cursor.execute(query, values)
        review_id = cursor.lastrowid
        print(review_id)
        # addlikes(review_id, cursor)  # pass review id or review accordingly
        # pass review id or review accordingly
        print("Adding comment")
        addcomment(review_id, random.randint(1, total_user))
        connection.commit()
