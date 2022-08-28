from flask import Flask, render_template, request, url_for, redirect, session
from datetime import timedelta
from pymongo import MongoClient
import bcrypt

#set app as a Flask instance 
app = Flask(__name__)
#encryption relies on secret keys so they could be run
app.secret_key = "catalyst"
# set the duration of a session
app.permanent_session_lifetime = timedelta(minutes=30)

# #connect to your Mongo DB database
def MongoDB():
    client = MongoClient("mongodb+srv://Kelven:team404notfound@cluster0.prbdnzh.mongodb.net/?retryWrites=true&w=majority")
    db = client.get_database('total_records')
    records = db.register
    return records
records = MongoDB()

@app.route("/")
def home():
    return render_template("homepage.html", content="This is Homepage")

#assign URLs to have a particular route 
@app.route("/register", methods=['post', 'get'])
def index():
    message = ''
    #if method post in index
    if "email" in session:
        return redirect(url_for("logged_in"))
    if request.method == "POST":
        user = request.form.get("fullname")
        email = request.form.get("email")
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")
        #if found in database showcase that it's found 
        user_found = records.find_one({"name": user})
        email_found = records.find_one({"email": email})
        if user_found:
            message = 'There already is a user by that name'
            return render_template('index.html', message=message)
        if email_found:
            message = 'This email already exists in database'
            return render_template('index.html', message=message)
        if password1 != password2:
            message = 'Passwords should match!'
            return render_template('index.html', message=message)
        else:
            #hash the password and encode it
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            #assing them in a dictionary in key value pairs
            user_input = {'name': user, 'email': email, 'password': hashed}
            #insert it in the record collection
            records.insert_one(user_input)
            me_api(user_input)
            #find the new created account and its email
            user_data = records.find_one({"email": email})
            new_email = user_data['email']
            
            
            #if registered redirect to logged in as the registered user
            return render_template('logged_in.html', email=new_email)
    return render_template('index.html')

@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    if "email" in session:
        return redirect(url_for("logged_in"))

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        #check if email exists in database
        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']

            #encode the password and check if it matches
            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session.permanent = True
                session["email"] = email_val
                user_input = {'email': email_val, 'password': password}
                me_api(user_input)
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                message = 'Wrong password'
                return render_template('login.html', message=message, content = "test")
        else:
            message = 'Email not found'
            return render_template('login.html', message=message)


    return render_template('login.html', message=message)

@app.route('/logged_in')
def logged_in():
    if "email" in session:
        email = session["email"]
        return render_template('logged_in.html', email=email)
    else:
        return redirect(url_for("login"))

@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return render_template("logged_out.html")
    else:
        return render_template('index.html')


@app.route("/me")
def me_api(dict):
    # login API
    if len(dict) == 2:
        return {
        "email": dict['email'],
        "password": dict['password'],
        }   
    # register API
    elif len(dict) == 3:
        return {
        "name": dict['name'],
        "email": dict['email'],
        "password": dict['password'],
        }  


if __name__ == "__main__":
  app.run(debug=True)