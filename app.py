from flask import Flask, render_template, request, url_for, redirect, session, make_response
from datetime import timedelta
from pymongo import MongoClient
import bcrypt


app = Flask(__name__)
app.secret_key = "catalyst"
app.permanent_session_lifetime = timedelta(minutes=30)

def MongoDB():
    client = MongoClient("mongodb+srv://<username>:<password@cluster0.prbdnzh.mongodb.net/?retryWrites=true&w=majority")
    db = client.get_database('total_records')
    records = db.register
    return records
records = MongoDB()

@app.route("/register", methods=['post', 'get'])
def index():
    message = ''
    #if method post in index
    if "email" in session:
        return {'task': 'success'}
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
            return {'task': 'fail'}
        if email_found:
            message = 'This email already exists in database'
            return {'task': 'fail'}
        if password1 != password2:
            message = 'Passwords should match!'
            return {'task': 'fail'}
        else:
            #hash the password and encode it
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            #assing them in a dictionary in key value pairs
            user_input = {'name': user, 'email': email, 'password': hashed}
            #insert it in the record collection
            records.insert_one(user_input)  
            #find the new created account and its email
            user_data = records.find_one({"email": email})
            new_email = user_data['email']
            
            
            #if registered redirect to logged in as the registered user
            #return render_template('logged_in.html', email=new_email)
            return me_api(user_input)
    return {'task': 'success'}

@app.route("/login", methods=["POST", "GET"])
def login():
    # if "email" in session:
    #     return redirect(url_for("logged_in"))

    if request.method == "POST":
        email = request.json['email']
        password = request.json['password']

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
                # me_api(user_input)
                # return redirect(url_for('logged_in'))
                return me_api(user_input)
            else:
                if "email" in session:
                    # return redirect(url_for("logged_in"))
                    return {'task': 'fail'}
                # message = 'Wrong password'
                # return render_template('login.html', message=message)
                
                return {'task': 'fail'}
        else:
            message = 'Email not found'
            # return render_template('login.html', message=message)
            return {'task': 'fail'}


    #return render_template('login.html', message=message)
    # return me_api(user_input)

@app.route('/logged_in')
def logged_in():
    if "email" in session:
        email = session["email"]
        return {'task': 'success'}
    else:
        return {'task': 'fail'}

@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return {'task': 'success'}
    else:
        return {'task': 'fail'}


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

# @app.errorhandler(404)
# def not_found(error):
#     resp = make_response(render_template('error.html'), 404)
#     resp.headers['ERROR'] = 'A value'
#     return resp

if __name__ == "__main__":
  app.run(debug=True)