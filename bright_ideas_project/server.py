



# Bright Ideas
# Neil Denning


from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
from flask_bcrypt import Bcrypt
from datetime import datetime
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

'''
C - create - INSERT
R - read - SELECT
U - update - UPDATE
D - delete - DELETE
'''

app = Flask(__name__)
app.secret_key = "nrd_key"
bcrypt = Bcrypt(app)
database = "bright_ideas"


@app.route("/")
def index():
    return render_template("main.html")


@app.route("/register", methods=["POST"])
def register_user():
    is_valid = True
    
    if len(request.form['name']) < 2:
        is_valid = False
        flash("First name must be at least 2 characters long")
    if len(request.form['alias']) < 2:
        is_valid = False
        flash("Last name must be at least 2 characters long")
    if len(request.form['password']) < 3:
        is_valid = False
        flash("Password must be at least 3 characters long")
        
    if request.form['c_password'] != request.form['password']:
        is_valid = False
        flash("Passwords must match")

    if not EMAIL_REGEX.match(request.form['email']):
        is_valid = False
        flash("Please use a valid email address")
    
    if is_valid:
        pass_hash = bcrypt.generate_password_hash(request.form['password'])
        mysql = connectToMySQL(database)

        query = "INSERT INTO users (name, alias, email, password_hash, created_at, updated_at) VALUES (%(name)s, %(alias)s, %(email)s, %(pass_hash)s, NOW(), NOW())"
       
        data = {
            'name': request.form['name'],
            'alias': request.form['alias'],            
            'email': request.form['email'],
            'pass_hash': pass_hash,
        }
      
        user_id = mysql.query_db(query, data)
        session['user_id'] = user_id

        return redirect("/landing")
    else:
        return redirect("/")


@app.route("/login", methods=["POST"])
def login_user():
    is_valid = True

    if len(request.form['email']) < 1:
        is_valid = False
        flash("Please enter your email")

    if not EMAIL_REGEX.match(request.form['email']):
        is_valid = False
        flash("Please use a valid email address")

    if len(request.form['password']) < 1:
        is_valid = False
        flash("Please enter your password")
    
        
    if is_valid:
        mysql = connectToMySQL(database)
        query = "SELECT * FROM users WHERE users.email = %(email)s"
        data = {
            'email': request.form['email']
        }
        user = mysql.query_db(query, data)
        if user:
            hashed_password = user[0]['password_hash']
            if bcrypt.check_password_hash(hashed_password, request.form['password']):
                session['user_id'] = user[0]['id']
                return redirect("/landing")
            else:
                flash("Password is invalid")
                return redirect("/")
        else:
            flash("Please use a valid email address")
            return redirect("/")
    else:
        return redirect("/")
            

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/landing")
def landing():
    if 'user_id' not in session:
        return redirect("/")

    mysql = connectToMySQL(database)
    query = "SELECT * FROM users WHERE id = %(user_id)s"
    data = {'user_id': session['user_id']}
    user = mysql.query_db(query, data)
    print("*"*20)
    print(user)
    # return render_template("landing.html", user=user[0])

    mysql = connectToMySQL(database)
    query = "SELECT bright_ideas.user_id, bright_ideas.id,users.name, users.alias, bright_ideas.content, bright_ideas.created_at, COUNT(likes.bright_idea_id) as times_liked FROM likes RIGHT JOIN bright_ideas ON bright_ideas.id = likes.bright_idea_id LEFT JOIN users ON bright_ideas.user_id = users.id GROUP BY bright_ideas.user_id, bright_ideas.id, users.name, users.alias, bright_ideas.content, bright_ideas.created_at ORDER BY bright_ideas.created_at DESC"
    bright_ideas = mysql.query_db(query)

    print("*"*20)
    print(bright_ideas)

    mysql = connectToMySQL(database)
    query = "SELECT * FROM likes WHERE user_id = %(user_id)s"
    data = {
        'user_id': session['user_id']
    }
    is_liked = mysql.query_db(query,data)
    liked_bright_ideas = []
    print("*"*20)
    print(is_liked)
    
    for liked in is_liked:
        liked_bright_ideas.append(liked['bright_idea_id'])
    print("*"*20)
    print(liked_bright_ideas)

    return render_template("/landing.html", user=user[0], bright_ideas=bright_ideas, liked_bright_ideas=liked_bright_ideas)


@app.route("/save_bright_idea", methods=["POST"])
def save_quote():
    if 'user_id' not in session:
        return redirect("/")

    is_valid = True
    if len(request.form['content']) < 10:
        is_valid = False
        flash("Bright Idea Please")  
    if is_valid:
        mysql = connectToMySQL(database)
        query = "INSERT INTO bright_ideas (user_id, content, created_at, updated_at) VALUES (%(user_id)s, %(content)s, NOW(), NOW())"
        data = {'user_id': session['user_id'],
                'content': request.form['content']
        }
        bright_idea_id = mysql.query_db(query, data)
        return redirect("/landing")  
    else:
        return redirect("/landing")

@app.route("/like/<bright_idea_id>")
def like_message(bright_idea_id):
    mysql = connectToMySQL(database)
    query = "INSERT INTO likes (user_id, bright_idea_id, created_at, updated_at) VALUES (%(user_id)s, %(bright_idea_id)s, NOW(), NOW())"
    data = {
        'user_id': session['user_id'],
        'bright_idea_id': bright_idea_id
    }
    likes_id = mysql.query_db(query, data)

    return redirect("/landing")


@app.route("/unlike/<bright_idea_id>")
def unlike_message(bright_idea_id):
    mysql = connectToMySQL(database)
    query = "DELETE FROM likes WHERE user_id = %(user_id)s AND bright_idea_id = %(bright_idea_id)s "
    data = {
        'user_id': session['user_id'],
        'bright_idea_id': bright_idea_id
    }
    mysql.query_db(query, data)

    return redirect("/landing")

# @app.route("/user_profile/<bright_idea_user_id>")
# def bright_idea(bright_idea_user_id):
#     if 'user_id' not in session:
#         return redirect("/")

#     mysql = connectToMySQL(database)
#     query = "SELECT * FROM users WHERE id = %(bright_idea_user_id)s"
#     data = {'bright_idea_user_id': bright_idea_user_id,
#     }
#     user = mysql.query_db(query, data)
#     return render_template("user_profile.html", user=user[0])  


# this is the user profile 
@app.route("/user_profile/<user_id>")
def user_profile(user_id):
    if 'user_id' not in session:
        return redirect("/")

    mysql = connectToMySQL(database)
    query = "SELECT users.id, users.name, users.alias, users.email, COUNT(bright_ideas.user_id) AS total_posts FROM users LEFT JOIN bright_ideas ON users.id = bright_ideas.user_id WHERE users.id = %(user_id)s GROUP BY users.id "
    data = {'user_id': user_id,
    }
    user_posts = mysql.query_db(query, data)
    print(user_posts)

    mysql = connectToMySQL(database)
    query = "SELECT users.id, users.name, users.alias, users.email, COUNT(likes.user_id) AS total_likes FROM users LEFT JOIN likes ON users.id = likes.user_id WHERE users.id = %(user_id)s GROUP BY users.id "
    data = {'user_id': user_id,
    }
    user_likes = mysql.query_db(query, data)

    return render_template("user_profile.html",user_posts=user_posts[0], user_likes=user_likes[0])  

@app.route("/bright_idea/<bright_idea_id>")
def bright_idea_details(bright_idea_id):

    mysql = connectToMySQL(database)
    query = "SELECT bright_ideas.id AS bright_idea_id, bright_ideas.user_id , bright_ideas.content, users.id as user_id, users.name AS posted_by, users.alias, likes.user_id AS liked_user, likes.bright_idea_id, users2.alias AS liked_by_alias, users2.name AS liked_by_name FROM bright_ideas LEFT JOIN users ON bright_ideas.user_id = users.id LEFT JOIN likes ON bright_ideas.id = likes.bright_idea_id LEFT JOIN users as users2 ON likes.user_id = users2.id WHERE bright_ideas.id = %(bright_idea_id)s ORDER BY bright_ideas.created_at DESC"
    data = {'bright_idea_id': bright_idea_id,
    }
    user_d = mysql.query_db(query, data)
    print("*"*20)
    print(user_d)
    return render_template("like_status.html", user=user_d)


@app.route("/edit/<user_id>")
def edit_user(user_id):
    mysql = connectToMySQL(database)
    query = "SELECT * FROM users WHERE id = %(user_id)s"
    data = {'user_id': session['user_id']}
    user = mysql.query_db(query, data)

    return render_template("edit.html", user=user[0])


@app.route("/update_user_info/<user_id>", methods=["POST"])
def update_user_info(user_id):
    is_valid = True

    if len(request.form['name']) < 1:
        is_valid = False
        flash("Please update name")

    if len(request.form['alias']) < 2:
        is_valid = False
        flash("Please update your alias")
    if len(request.form['email']) < 1:
        is_valid = False
        flash("Please update your email")

    if not EMAIL_REGEX.match(request.form['email']):
        is_valid = False
        flash("Please use a valid email address")

    if is_valid:

        mysql = connectToMySQL(database)
        query = "UPDATE users SET name = %(name)s, alias = %(alias)s, email = %(email)s, created_at = NOW(), updated_at = NOW() WHERE users.id = %(user_id)s"
        data = {
            'user_id': user_id,
            'name': request.form['name'],
            'alias': request.form['alias'],
            'email': request.form['email']
        }
        mysql.query_db(query,data)

        return redirect("/landing")
    else:
        return redirect("/edit/<user_id>")


@app.route("/delete/<bright_idea_id>")
def delete_bright_idea(bright_idea_id):
    mysql = connectToMySQL(database)
    query = "DELETE FROM bright_ideas WHERE bright_ideas.id = %(bright_idea_id)s"
    data = {
        'bright_idea_id': bright_idea_id
    }    
    mysql.query_db(query, data)

    return redirect("/landing")





if __name__=="__main__":
    app.run(debug=True)



'''<<<<<
Flask.redirect(location, statuscode, response)

"location" = URL where response should be directed.

"statuscode" = statuscode sent to browser's header.

"response" = response parametwer used to instantiate response.

"Statuscodes"

STATUS CODES

HTTP_300_MULTIPLR_CHOICES
HTTP_301_MOVED_PERMANENTLY
HTTP_302_FOUND
HTTP_303_SEE_OTHER
HTTP_304_NOT_MODIFIED
HTTP_305_USE_PROXY
HTTP_306_RESERVED

FLASK.ABORT(CODE)

400_BAD_REQUEST
401_UNATHENTICATED
403_FORBIDDEN
404_NOT_FOUND
406_NOT_ACCEPTABLE
415_UNSOPPORTED_MEDIA_TYPE
429_TOO_MANY_REQUESTS



"host" = hostname to listen to. Defaults to 127.0..0.1 (localhost).
Set to '0.0.0.0' to have server available externally.

"port" = defaults to 5000. this can be changed as well.

"debug" = defaults to false. if set to true, provides debug information.

"options" = to be forwarded to underlying Werkzeug server,

"HTTP Protocol Methods" <<<<<

"GET" = Sends data in unencrypted form to server

"HEAD" = Same as GET, but without response body

"POST" = Used to send HTML form data to server.

"PUT" = Replaces all current representations of target resource with uploaded content.

"DELETE" = Removes all current representations of target resource given by URL.



"additional parameters" <<<<<

"int" = accepts integer

"float" = for floating point value

"path" = accepts slashes uswed as directory separator

"JINJA template engine uses the following delimiters for escaping from HTML"

{%...%} for Statements

{{...}} for Expressions to print to the template output

{#...#} for Comments not included in the template output

#...## for Line Statements


"REQUEST OBJECT"

"Form" = Dictionary object containing key-value pairs of form parameters and values.

"args" = Parsed contents of query string which i spart of URL after question mark(?)

"Cookies" = Dictionary object holding Cookie names and values. Helps with tracking data.

"files" = Data pertaining to the upload file.

"Method" = Current request method.



'''
