import dataiku
from flask import request

@app.route('/first_api_call')
def first_call():
    return json.dumps({"status": "ok", "data": 123})