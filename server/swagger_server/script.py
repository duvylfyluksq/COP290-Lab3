import requests
import pymysql
import json
from datetime import datetime

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="fmd",
    cursorclass=pymysql.cursors.DictCursor,
)
cursor = connection.cursor()

with open('tvseries_only.tsv', 'r') as f:
    i = 0
    next(f)
    l = 0
    for line in f:
        l += 1
        if (i < 1000):
            columns = line.strip().split('\t')
            id = columns[0]
            type = columns[1]
            if (type == 'movie' or type == 'tvSeries'):
                response = requests.get(
                    f'https://www.omdbapi.com/?i={id}&apikey=9a688456&plot=full')
                print("Request Sent")
                if response.status_code == 200:
                    print("Response Ok")
                    data = response.json()
                    if (data['Response'] == 'True' and data['Plot'] != 'N/A' and data['Poster'] != 'N/A' and data['Genre'] != 'N/A' and data['Actors'] != 'N/A'
                       and data['Director'] != 'N/A' and data['Writer'] != 'N/A' and data['Released'] != 'N/A' and data['Runtime'] != 'N/A'
                       and data['imdbRating'] != 'N/A' and data['Title'] != 'N/A'):
                        print("Trying to add")
                        date = datetime.strptime(
                            data['Released'], "%d %b %Y").date()
                        cast = json.dumps(data['Actors'].split(","))
                        genres = json.dumps(data['Genre'].split(","))
                        if (type == 'movie'):
                            query = "INSERT INTO `movie` (title, cast, director, writer, rating, genres, release_date, duration, poster, plot) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                            values = (data['Title'], cast, data['Director'], data['Writer'], float(
                                data['imdbRating']), genres, date, data['Runtime'], data['Poster'], data['Plot'])
                            cursor.execute(query, values)
                            print("Added")
                            connection.commit()
                        else:
                            query = "INSERT INTO `tvshow` (title, cast, director, writer, rating, genres, release_date, duration, poster, plot, season) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                            values = (data['Title'], cast, data['Director'], data['Writer'], float(
                                data['imdbRating']), genres, date, data['Runtime'], data['Poster'], data['Plot'], 1)
                            cursor.execute(query, values)
                            print("Added")
                            i += 1
                            connection.commit()
                else:
                    break
        else:
            break
    print(l, i)
