import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.tree import DecisionTreeClassifier
import numpy as np

api = Flask(__name__)
CORS(api)

@api.route('/sepssis', methods=['POST'])
def sepssis():
    data = request.get_json()
    prg=data['prg']
    pl=data['pl']
    pr=data['pr']
    sk=data['sk']
    ts=data['ts']
    m11=data['m11']
    bd2=data['bd2']
    age=data['age']
    df = pd.read_csv('Paitients_Files_Train.csv')
    y = df.Sepssis
    x = df.drop(columns=['Sepssis'])

    model = DecisionTreeClassifier(criterion='entropy')
    model.fit(x, y)
    new_data = np.array([[prg, pl, pr, sk, ts, m11, bd2, age]])
    output=model.predict(new_data)

    return jsonify({
        'Status':"success",
        'result': output.tolist()
    })
if __name__ == '__main__':
    api.run(debug=True)