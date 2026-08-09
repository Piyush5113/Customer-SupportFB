from flask import Blueprint, jsonify

analytics_bp = Blueprint("analytics", __name__)

@analytics_bp.route("/analytics", methods=["GET"])
def analytics():

    return jsonify({

        "dataset": {
            "records": 85907,
            "satisfied": "82.46%",
            "not_satisfied": "17.54%",
            "features": 20
        },

        "insights": [

            {
                "label":"Top Performing Channel",
                "value":"Email",
                "tag":"High Volume"
            },

            {
                "label":"Most Delayed Channel",
                "value":"Chat",
                "tag":"Needs Attention"
            },

            {
                "label":"Highest Satisfaction",
                "value":"Phone",
                "tag":"Top Rated"
            },

            {
                "label":"Lowest Satisfaction",
                "value":"Delayed Tickets",
                "tag":"Critical"
            }

        ],

        "metrics":{

            "accuracy":"92%",
            "precision":"91%",
            "recall":"90%",
            "f1":"91%"

        }

    })