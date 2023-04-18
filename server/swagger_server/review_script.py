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


review_sample = ["This product is fantastic - it exceeded my expectations in every way. The quality of the materials, the attention to detail in its design, and its overall functionality is top-notch. I've used many similar products in the past, but this one is truly exceptional. It's clear that a lot of thought and care went into its development. I highly recommend this item!",

           "I absolutely love this item! It's exactly what I was hoping for and has made such a positive impact on my daily routine. The quality is outstanding, the features are incredibly useful, and the overall design is sleek and modern. I find myself using it every day, and it has quickly become an essential tool for me. Highly recommended!",

           "Great quality and value for the price point. I was pleasantly surprised by the level of craftsmanship and attention to detail in this product, considering its affordable price. It performs just as well as other, more expensive options on the market, if not better. I was also impressed with the packaging and shipping - everything arrived promptly and in perfect condition.",

           "Unfortunately, this product didn't meet my needs and had to be returned. While it appeared to be well-made and functional upon initial inspection, upon closer examination, it became clear that it wasn't going to work for my intended use. I appreciated the hassle-free return process, though, and the customer service I received was excellent.",

           "Highly recommended - I wouldn't hesitate to purchase again. This product exceeded my expectations in every way possible. It's reliable, easy to use, and has become an essential tool in my daily life. I'm so glad I decided to give it a try, and I would absolutely buy it again if given the opportunity.",

           "The packaging was damaged upon arrival, but the product itself is great. While I was disappointed by the damaged packaging, I was relieved to find that the product inside was unaffected. It works extremely well and meets my needs perfectly. I would suggest more attention be given to the packaging in the future, though.",

           "Average quality for the price - there are better options available. While this product is functional and performs as expected, it doesn't quite measure up to some of the higher-end alternatives on the market. If you're on a budget, it's a decent option, but if you're willing to spend a bit more, there are better products out there.",

           "This item is a game-changer! I can't imagine life without it now. It has revolutionized the way I approach my work and made previously tedious tasks much more enjoyable. The quality of the materials and construction is exceptional, and it's clear that a lot of thought went into its design. I'm incredibly impressed with this product.",

           "Disappointed in the lack of features and functionality. While this product isn't necessarily bad, it falls short in terms of what it can do. I was hoping for more features to make my life easier, but unfortunately, this product didn't deliver on those expectations. If you're looking for something basic, it might be worth considering, but if you need more advanced functionality, you may want to look elsewhere.",

           "The interface is user-friendly and easy to navigate. Even though I'm not particularly tech-savvy, I found this product's interface to be intuitive and straightforward. It's easy to learn, and I was able to start using it almost right away. I appreciate when products are designed with ease-of-use in mind, and this one definitely fits the bill.",

           "Exceptional customer service - they went above and beyond to help me. I had an issue with my order, and the customer service representative I spoke with was incredibly helpful and capable. They took the time to understand my situation and worked hard to find a solution that met my needs. I'm so grateful for their assistance and would gladly do business with this company again.",

           "The color is slightly different than expected, but still very nice. While the product itself is great, I was a bit surprised by the color upon arrival. It wasn't quite what I was expecting, but it's still an attractive shade and looks nice in my space. I would suggest being mindful of this potential discrepancy when ordering.",

           "Not as durable as I had hoped - it broke after only a few uses. Unfortunately, I found this product to be quite fragile and not able to withstand heavy use. It's disappointing, as I was hoping it would last longer. If you plan on using it infrequently or for lighter tasks, it may work for you, but if you need something more heavy-duty, I would suggest looking elsewhere.",

           "This product arrived promptly and in perfect condition. I was impressed with how quickly I received my order, and it was in excellent condition upon arrival. It's always reassuring when companies take care to ensure their products arrive safely and securely. Kudos to this company for their attention to detail in shipping.",

           "Fantastic addition to my home office setup - highly recommend! As someone who works from home frequently, I'm always looking for ways to improve my workspace. This product has been an absolute game-changer for me. It's easy to use, functional, and looks great in my space. I highly recommend it to anyone in a similar situation."]

reviews = []
for i in range(0, 10000):
    reviews.append(random.choice(review_sample))

def addcomment(user_id, review_id):
    content = random.choice(comments)
    query = "INSERT INTO `comment` (content, user_id, review_id) VALUES (%s, %s, %s)"
    values = (content, user_id, review_id)
    cursor.execute(query, values)


for content in reviews:
    
   
    

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
    # addcomment(review_id, random.randint(1, total_user))
    connection.commit()
