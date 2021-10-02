from collections import Iterable

# 1. import Flask
from flask import Flask, jsonify

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
        )


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return (
        f"Welcome to my 'About' page!<br/>"
    )


if __name__ == "__main__":
    app.run(debug=True)
