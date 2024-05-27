const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to save the URL, title, description, and rendered text
app.post('/save', (req, res) => {
  const { url, title, description, renderedText } = req.body;
  console.log(`Received URL: ${url}`);
  console.log(`Received Title: ${title}`);
  console.log(`Received Description: ${description}`);
  console.log(`Received Rendered Text: ${renderedText}`);
  // Add logic to save the URL, title, description, and rendered text to your database or perform other actions
  res.json({ status: 'ok' });
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
