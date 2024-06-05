const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to save the URL, title, description, rendered text, notes, and tags
app.post('/save', (req, res) => {
  const { url, title, description, renderedText, notes, tags } = req.body;
  console.log(`Received URL: ${url}`);
  console.log(`Received Title: ${title}`);
  console.log(`Received Description: ${description}`);
  console.log(`Received Notes: ${notes}`);
  console.log(`Received Tags: ${tags}`);
  console.log(`Received Rendered Text: ${renderedText}`);
  // Here you can process the data, e.g., save it to a database
  // For demonstration, we'll just return the received data

  res.json({
    status: 'ok',
    url: url,
    title: title,
    description: description,
    renderedText: renderedText,
    notes: notes,
    tags: tags
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
