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


query = "SELECT review_id form review"
cursor.execute(query)
result = [row[0] for row in cursor.fetchall()]


for i in range(total_user):

    query = f'UPDATE users SET profile_pic = {i}.jpeg WHERE user_id = {i}'

    cursor.execute(query)

    connection.commit()
