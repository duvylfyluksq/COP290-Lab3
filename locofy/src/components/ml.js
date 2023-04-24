
const language = require('@google-cloud/language');

const client = new language.LanguageServiceClient();

const positiveText = "I am incredibly happy today! It may be the best day ever!";

const positiveDocument = {
type: 'PLAIN_TEXT',
content: positiveText,
};

(async () => {
    const positiveResults = await client.analyzeSentiment({ document: positiveDocument });
    console.log(positiveResults[0]['documentSentiment']['score']);
  })();

//   [
//     {
//       sentences: [ [Object], [Object] ],
//       documentSentiment: { magnitude: 1.899999976158142, score: 0.8999999761581421 },
//       language: 'en'
//     },
//     null,
//     null
//   ]
//   [
//     {
//       sentences: [ [Object], [Object], [Object], [Object] ],
//       documentSentiment: { magnitude: 2.0999999046325684, score: -0.30000001192092896 },
//       language: 'en'
//     },
//     null,
//     null
//   ]

// async function quickstart() {
//   // Imports the Google Cloud client library
//   const language = require('@google-cloud/language');

//   // Instantiates a client
//   const client = new language.LanguageServiceClient();

//   // The text to analyze
//   const text = 'Hello, world!';

//   const document = {
//     content: text,
//     type: 'PLAIN_TEXT',
//   };

//   // Detects the sentiment of the text
//   const [result] = await client.analyzeSentiment({document: document});
//   const sentiment = result.documentSentiment;

//   console.log(Text: ${text});
//   console.log(Sentiment score: ${sentiment.score});
//   console.log(Sentiment magnitude: ${sentiment.magnitude});
// }