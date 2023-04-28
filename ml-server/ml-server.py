from flask import Flask, request, jsonify
from google.cloud import language_v1
from google.oauth2 import service_account
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

credentials = service_account.Credentials.from_service_account_file(
    './apikey.json')
project_id = 'fmd-cop290'
client = language_v1.LanguageServiceClient(credentials=credentials)


@app.route('/analyzeSentiment', methods=['POST'])
def analyze_sentiment():
    content = request.json.get('content')

    if not content:
        return 'Content is required', 400

    try:
        document = language_v1.Document(
            content=content, type_=language_v1.Document.Type.PLAIN_TEXT)
        result = client.analyze_sentiment(request={'document': document})
        sentiment = result.document_sentiment.score
        return jsonify(sentiment=sentiment)

    except Exception as error:
        print('Failed to analyze sentiment:', error)
        return 'Failed to analyze sentiment', 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=port, debug=True)
