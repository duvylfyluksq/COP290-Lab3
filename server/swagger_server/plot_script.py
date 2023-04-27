import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="fmd",
    cursorclass=pymysql.cursors.DictCursor,
)
cursor = connection.cursor()


movie_titles = [
    "Stranger Things",
    "Peaky Blinders",
    "Game of Thrones",
    "Band of Brothers",
    "Breaking Bad",
    "Homeland",
    "True Detective",
    "Better Call Saul",
    "Sherlock",
    "Attack on Titan"
]


movie_plots = {
    "Stranger Things": "Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    "Peaky Blinders": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI.",
    "Game of Thrones": "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",
    "Band of Brothers": "The series dramatizes the history of Easy Company, 2nd Battalion, 506th Parachute Infantry Regiment, of the 101st Airborne Division, from jump training in the United States through its participation in major actions in Europe, up until Japan's capitulation and the end of World War II.",
    "Breaking Bad": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    "Homeland": "The series stars Claire Danes as Carrie Mathison, a CIA officer with bipolar disorder, and Damian Lewis as Nicholas Brody, a Marine Corps Scout Sniper. Brody was held captive by al-Qaeda as a prisoner of war, and Mathison becomes convinced that he was turned by the enemy and poses a threat to the United States.",
    "True Detective": "A strange murder in Southern California discovered by California Highway Patrol officer Paul Woodrugh (Taylor Kitsch) leads to a conspiracy that ensnares mobster Frank Semyon (Vince Vaughn), mob-affiliated City of Vinci Detective Ray Velcoro (Colin Farrell), and Ventura County Sheriff detective Ani Bezzerides (Rachel McAdams).",
    "Better Call Saul": "Better Call Saul follows the transformation of Jimmy McGill, a former con artist who is trying to become a respectable lawyer, into the personality of the flamboyant criminal lawyer Saul Goodman (a play on the phrase it's all good, man!",
    "Sherlock": "In this modernized version of the Conan Doyle characters, using his detective plots, Sherlock Holmes lives in early-21st-century London and acts more cocky towards Scotland Yard's detective inspector Lestrade because he's actually less confident. Doctor Watson is now a fairly young veteran of the Afghan war, less adoring and more active.",
    "Attack on Titan": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
}


for title in movie_titles:
    plot = movie_plots[title]
    cursor.execute("UPDATE tvshow SET plot=%s WHERE title=%s", (plot, title))

connection.commit()
connection.close()
