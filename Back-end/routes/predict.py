from flask import Blueprint, request, jsonify
from services.preprocessing import build_dataframe
from services.prediction import predict

predict_bp = Blueprint("predict", __name__)


@predict_bp.route("/predict", methods=["POST"])
def predict_route():
    data = request.json

    if not data:
        return jsonify({"status": "error", "message": "No input data provided"}), 400

    try:
        df = build_dataframe(data)
        label, confidence = predict(df)

        recommendation = (
            "Customer is highly likely to be satisfied."
            if label == "Satisfied"
            else "Customer may require immediate attention."
        )

        return jsonify({
            "prediction": label,
            "confidence": confidence,
            "recommendation": recommendation,
            "status": "success"
        })

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
