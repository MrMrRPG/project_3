from collections import Iterable
import json
from collections import defaultdict

# 1. import Flask
from flask import Flask, jsonify

# loading JSON files
chess = open('static/chess.json')
fide_historical = open('static/fide_historical.json')
games = open('static/games.json')
top_women_chess_players_aug_2020 = open('static/top_women_chess_players_aug_2020.json')

chess_load = json.load(chess)
fide_historical_load = json.load(fide_historical)
games_load = json.load(games)
top_women_chess_players_aug_2020_load = json.load(top_women_chess_players_aug_2020)

# Convert loaded list to dictionaries
# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return (
        f"Welcome to my the Pink Pandas' Chess Directory!<br/>"
        f"Use the following url extensions to get to the specific APIs you need:)<br/>"
        f"------------------------------------------------------------------------<br/>"
        f"/about<br/>"
        f"/chess</br>"
        f"/fide_historical</br>"
        f"/games</br>"
        f"/top_women_chess_players_aug_2020</br>"
    )


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return (
        f"Welcome to my 'About' page!<br/>"
    )

@app.route("/chess")
def chess():
    res = defaultdict(list)
    for sub in chess_load:
        for key in sub:
            res[key].append(sub[key])

    chess_d = dict(res)

    print("chess_d loading...")
    return (
        chess_d
    )

@app.route("/games")
def games():
    res = defaultdict(list)
    for sub in games_load:
        for key in sub:
            res[key].append(sub[key])

    games_d = dict(res)

    print("games_d loading...")
    return (
        games_d
    )

@app.route("/fide_historical")
def fide_historical():
    res = defaultdict(list)
    for sub in fide_historical_load:
        for key in sub:
            res[key].append(sub[key])

    fide_historical_d = dict(res)

    print("chess_games_chart.js loading...")
    return (
        fide_historical_d
    )

@app.route("/top_women_chess_players_aug_2020")
def top_women_chess_players_aug_2020():
    res = defaultdict(list)
    for sub in top_women_chess_players_aug_2020_load:
        for key in sub:
            res[key].append(sub[key])

    top_women_chess_players_aug_2020_d = dict(res)

    print("top_women_chess_players_aug_2020_d loading...")
    return (
        top_women_chess_players_aug_2020_d
    )

if __name__ == "__main__":
    app.run(debug=True)
