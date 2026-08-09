from flask import Blueprint
from flask import request
from flask import jsonify

predict_bp = Blueprint("predict", __name__)

@predict_bp.route("/predict", methods=["POST"])
def predict():

    data = request.json

    print(data)

    return jsonify({
        "prediction": "Satisfied",
        "confidence": 91.42,
        "status": "success"
    })