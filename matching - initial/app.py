from flask import Flask, jsonify
from flask_pymongo import pymongo

app = Flask(__name__)

CONNECTION_STRING = "mongodb+srv://vockoi:team404notfound@cluster0.k8iiewy.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)

# This will either find this database if it already exists, or create one
db = client.get_database('studyBuddy')
user_collection = pymongo.collection.Collection(db, 'user_collection')

"""
@app.route('/')
def demo_users():
     user_information_1 = {'name': 'A', "course": "Bachelor of Science", "major": "Data Science", "subjects": "INFO20003", "email": 'arthur@student.unimelb.edu.au'}
     user_information_2 = {'name': 'B', "course": "Bachelor of Science", "major": "Computing and Software Systems", "subjects": "INFO20003", "email": 'adam@student.unimelb.edu.au'}
     user_information_3 = {'name': 'C', "course": "Bachelor of Science", "major": "Data Science", "subjects": "COMP20003", "email": 'steven@student.unimelb.edu.au'}
     user_information_4 = {'name': 'D', "course": "Bachelor of Science", "major": "Mathematics and Statistics", "subjects": "INFO20003", "email": 'lily@student.unimelb.edu.au'}
     user_information_5 = {'name': 'E', "course": "Bachelor of Arts", "major": "Media and Communications", "subjects": "SWEN20003", "email": 'mai@student.unimelb.edu.au'}
    
     db.user_collection.insert_one(user_information_1)
     db.user_collection.insert_one(user_information_2)
     db.user_collection.insert_one(user_information_3)
     db.user_collection.insert_one(user_information_4)
     db.user_collection.insert_one(user_information_5)

     return "Success"
"""

# before integrating it with frontend
@app.route('/')
def match():
    match_request = db.user_collection.find_one({"name": "Adam I"}) # for dummy user input

    match_request['_id'] = str(match_request['_id'])

    all_docs = db.user_collection.find({"subjects": {"$in": match_request["subjects"]}})

    matches = []
    for doc in all_docs:
        doc['_id'] = str(doc['_id'])
        if (doc['_id'] == match_request['_id']):
            continue
        matches.append(doc)

    return jsonify(matches)

if __name__ == "__main__":
    app.run()
