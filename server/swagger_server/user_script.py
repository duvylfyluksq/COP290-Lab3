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


query = "SELECT user_id from user"
cursor.execute(query)
result = [row['user_id'] for row in cursor.fetchall()]


for i in result:

    query = f'UPDATE user SET pfp = %s WHERE user_id = {i}'

    cursor.execute(query, (f'{i}.jpeg',))

    connection.commit()
