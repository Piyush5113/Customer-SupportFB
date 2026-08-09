import pandas as pd

# Maps frontend tenure_bucket labels to model-trained labels
TENURE_MAP = {
    "0-6 Months": "0-30",
    "6-12 Months": "31-60",
    "1-2 Years": "61-90",
    # pass-through if already a valid model label
    "0-30": "0-30",
    "31-60": "31-60",
    "61-90": "61-90",
    ">90": ">90",
    "On Job Training": "On Job Training",
}

# Maps frontend channel labels to model-trained labels
CHANNEL_MAP = {
    "Email": "Email",
    "Phone": "Inbound",
    "Chat": "Outcall",
    "Inbound": "Inbound",
    "Outcall": "Outcall",
}


def build_dataframe(form_data: dict) -> pd.DataFrame:
    channel = CHANNEL_MAP.get(form_data.get("channel_name", ""), form_data.get("channel_name", ""))
    tenure = TENURE_MAP.get(form_data.get("tenure_bucket", ""), form_data.get("tenure_bucket", ""))

    row = {
        "channel_name": channel,
        "category": form_data.get("category", ""),
        "sub_category": form_data.get("sub_category", ""),
        "tenure_bucket": tenure,
        "agent_shift": form_data.get("agent_shift", ""),
        "response_time_minutes": float(form_data.get("response_time", 0) or 0),
    }

    return pd.DataFrame([row])
