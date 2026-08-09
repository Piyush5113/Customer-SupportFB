import os
import joblib
import numpy as np

MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "model", "csat_logistic_model.pkl")

_model = None


def load_model():
    global _model
    if _model is None:
        _model = joblib.load(MODEL_PATH)
    return _model


def predict(df):
    model = load_model()

    prediction_encoded = model.predict(df)[0]          # 0 or 1
    probabilities = model.predict_proba(df)[0]         # [prob_class0, prob_class1]

    # classes_ order from the pkl: [0, 1]  → 1 = Satisfied, 0 = Not Satisfied
    classes = model.classes_.tolist()
    label_map = {0: "Not Satisfied", 1: "Satisfied"}

    label = label_map.get(int(prediction_encoded), str(prediction_encoded))
    confidence = round(float(np.max(probabilities)) * 100, 2)

    return label, confidence
