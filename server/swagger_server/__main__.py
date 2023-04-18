#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from flask_cors import CORS



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    flask_app = app.app
    flask_app.json_encoder = encoder.JSONEncoder
    CORS(flask_app, resources={r"/*": {"origins": "*", "methods": [
         "GET", "POST", "PUT", "DELETE", "OPTIONS"], "allow_headers": "*"}})
    app.add_api('swagger.yaml', arguments={
                'title': 'FMD'}, pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
