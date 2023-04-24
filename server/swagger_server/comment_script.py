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











query = "SELECT review_id form review"
cursor.execute(query)
result = [row[0] for row in cursor.fetchall()]








for rid in result:
    userid = random.randint(1,total_user)
    comment_data = random.choice(comments)
    query = "INSERT INTO `comment` (content, user_id, review_id) VALUES (%s, %s, %s)"
    values = (comment_data,userid,rid)
    cursor.execute(query,values)
    comment_id = cursor.lastrowid
    connection.commit()


