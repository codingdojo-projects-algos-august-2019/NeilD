# Resume App Solo
# Neil Denning


from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import connectToMySQL 
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
database = "resume_app_solo"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register", methods=["POST"])
def register_user():
    is_valid = True
    
    if len(request.form['first_name']) < 2:
        is_valid = False
        flash("First name must be at least 2 characters long")
    if len(request.form['last_name']) < 2:
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

        query = "INSERT INTO registered_users (first_name, last_name, email, password_hash, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(pass_hash)s, NOW(), NOW())"
       
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],            
            'email': request.form['email'],
            'pass_hash': pass_hash,
        }
      
        registered_user_id = mysql.query_db(query, data)
        session['registered_user_id'] = registered_user_id

        return redirect("/")
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
        query = "SELECT * FROM registered_users WHERE registered_users.email = %(email)s"
        data = {
            'email': request.form['email']
        }
        user = mysql.query_db(query, data)
        if user:
            hashed_password = user[0]['password_hash']
            if bcrypt.check_password_hash(hashed_password, request.form['password']):
                session['registered_user_id'] = user[0]['id']
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
    if 'registered_user_id' not in session:
        return redirect("/")
    else:
        mysql = connectToMySQL(database)
        query = "SELECT * FROM registered_users WHERE id = %(registered_user_id)s"
        data = {'registered_user_id': session['registered_user_id']}
        user = mysql.query_db(query, data)

        mysql = connectToMySQL(database)
        query = "SELECT * FROM images WHERE id = %(registered_user_id)s"
        data = {'registered_user_id': session['registered_user_id']}
        user_images = mysql.query_db(query, data)

        return render_template("/landing.html", user=user[0], user_images=user_images)

@app.route("/save_personal_info", methods=["POST"])
def save_personal_info():
    if 'registered_user_id' not in session:
        return redirect("/")

    is_valid = True
    if len(request.form['first_name']) < 2:
        is_valid = False
        flash("First name must be at least 2 characters long")
        
    if len(request.form['last_name']) < 2:
        is_valid = False
        flash("Last name must be at least 2 characters long")

    if not EMAIL_REGEX.match(request.form['email']):
        is_valid = False
        flash("Please use a valid email address")
    
    if len(request.form['phone']) < 10:
        is_valid = False
        flash("Phone Required")
        
    
    if is_valid:
        mysql = connectToMySQL(database)
        query = "INSERT INTO resume_users (registered_user_id, first_name, last_name, email, phone,street_1, street_2, city, state, zipcode, created_at, updated_at) VALUES(%(registered_user_id)s,%(first_name)s,%(last_name)s,%(email)s,%(phone)s,%(street_1)s,%(street_2)s,%(city)s,%(state)s,%(zipcode)s, NOW(), NOW())"
        data = {
            'registered_user_id': session['registered_user_id'],
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'phone': request.form['phone'],
            'street_1': request.form['street_1'],
            'street_2': request.form['street_2'],
            'city': request.form['city'],
            'state': request.form['state'],
            'zipcode': request.form['zipcode']
            }
        resume_user_id = mysql.query_db(query,data)

        return redirect("/landing")
    else:
        return redirect("/landing")

@app.route("/save_employers", methods=["POST"])
def save_employers():
    if 'registered_user_id' not in session:
        return redirect("/")

    is_valid = True
    if len(request.form['industry']) < 2:
        is_valid = False
        flash("Industry required")
    if len(request.form['company_name']) < 2:
        is_valid = False
        flash("Company name required")
    if len(request.form['job_title']) < 2:
        is_valid = False
        flash("Job title required")
    if len(request.form['job_description']) < 2:
        is_valid = False
        flash("Job description required")    
    if len(request.form['city']) < 2:
        is_valid = False
        flash("City required")
    if len(request.form['state']) < 2:
        is_valid = False
        flash("State required")
    if len(request.form['start_date']) < 2:
        is_valid = False
        flash("Start date required")
    if len(request.form['end_date']) < 2:
        is_valid = False
        flash("End date required") 

    if is_valid:
        mysql = connectToMySQL(database)
        query = "INSERT INTO employers (registered_user_id, industry, company_name, job_title, job_description, city, state, start_date, end_date, created_at, updated_at) VALUES(%(registered_user_id)s,%(industry)s,%(company_name)s,%(job_title)s,%(job_description)s,%(city)s,%(state)s,%(start_date)s,%(end_date)s, NOW(), NOW())"
        data = {
            'registered_user_id': session['registered_user_id'],
            'industry': request.form['industry'],
            'company_name': request.form['company_name'],
            'job_title': request.form['job_title'],
            'job_description': request.form['job_description'],
            'city': request.form['city'],
            'state': request.form['state'],
            'start_date': request.form['start_date'],
            'end_date': request.form['end_date']
            }
        employer_id = mysql.query_db(query,data)

        return redirect("/landing")
    else:
        return redirect("/landing")


@app.route("/save_skills_and_experience", methods=["POST"])
def save_skills_and_experience():
    if 'registered_user_id' not in session:
        return redirect("/")

    is_valid = True
    if len(request.form['name']) < 2:
        is_valid = False
        flash("skill name required")
        
    if len(request.form['description']) < 2:
        is_valid = False
        flash("short description required")
    
    if is_valid:
        mysql = connectToMySQL(database)
        query = "INSERT INTO skills (registered_user_id, name, description, created_at, updated_at) VALUES(%(registered_user_id)s,%(name)s,%(description)s,NOW(), NOW())"
        data = {
            'registered_user_id': session['registered_user_id'],
            'name': request.form['name'],
            'description': request.form['description']
        }
        skill_id = mysql.query_db(query,data)

        return redirect("/landing")
    else:
        return redirect("/landing")


@app.route("/save_image", methods=["POST"])
def save_image():
    if 'registered_user_id' not in session:
        return redirect("/")
    
    else:
        mysql = connectToMySQL(database)
        query = "INSERT INTO images (registered_user_id, name, description, content, created_at, updated_at) VALUES(%(registered_user_id)s,%(name)s,%(description)s,%(content)s,NOW(), NOW()) "
        data = {
            'registered_user_id': session['registered_user_id'],
            'name': request.form['name'],
            'description': request.form['description'],
            'content': request.form['pic']
            }
        image_id = mysql.query_db(query,data)

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
