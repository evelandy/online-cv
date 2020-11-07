from flask import Flask, jsonify, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_cors import cross_origin
import os

app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
# app.config['SECRET_KEY'] = 'MainSecretKey'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
CORS(app)

FILE_DIR = 'Newest_Resume.pdf'

if not os.path.exists(FILE_DIR):
    os.makedirs(FILE_DIR)


@app.route('/', methods=['GET'])
def home():
    return jsonify({'msg': 'welcome'})


@app.route('/api/check', methods=['GET'])
def check():
    return jsonify({'msg': 'true'}), 200


@app.route('/api/test', methods=['GET'])
def test():
    response = send_file(FILE_DIR, mimetype='text/pdf',
                         attachment_filename='Newest_Resume.pdf', as_attachment=True)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/api/getResume', methods=['GET'])
def get_resume():
    return send_file(FILE_DIR, mimetype='text/pdf',
                     attachment_filename='William_Griffin_Resume.pdf', as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
