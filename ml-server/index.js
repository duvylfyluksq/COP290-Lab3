const express = require('express');
const { LanguageServiceClient } = require('@google-cloud/language');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Google Cloud Language client configuration
const opts = {
  credentials: require('./apikey.json'), // Replace with the path to your API key
  projectId: 'fmd-cop290', // Replace with your project ID
};
const languageClient = new LanguageServiceClient(opts);
app.use(cors());
// Enable JSON body parsing for incoming requests
app.use(express.json());

// Sentiment analysis API endpoint
app.post('/analyzeSentiment', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400).send('Content is required');
    return;
  }

  try {
    const document = {
      type: 'PLAIN_TEXT',
      content: content,
    };

    const [result] = await languageClient.analyzeSentiment({ document });
    console.log(result);
    const sentiment = result.documentSentiment.score;
    res.json({ sentiment });
  } catch (error) {
    console.error('Failed to analyze sentiment:', error);
    res.status(500).send('Failed to analyze sentiment');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

