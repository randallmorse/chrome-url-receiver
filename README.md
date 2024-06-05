Certainly! Here’s the rewritten content in Markdown format:

```markdown
# chrome-url-receiver

Test harness for chrome URL recorder

[GitHub Repository](https://github.com/randallmorse/chrome-url-recorder)

## Building and Running with Docker

1. **Build the Docker image:**

   ```sh
   docker build -t chrome-url-receiver .
   ```

2. **Run the Docker container:**

   ```sh
   docker run -p 3000:3000 chrome-url-receiver
   ```

3. **When ready you should see:**

   ```sh
   API listening at http://localhost:3000
   ```

## Test

You can test the API using a cURL request from the command line:

```sh
curl -X POST http://localhost:3000/save \
-H "Content-Type: application/json" \
-d '{
  "url": "http://example.com",
  "title": "Example Title",
  "description": "Example Description",
  "renderedText": "Example rendered text content",
  "notes": "Example notes",
  "tags": "example,tags"
}'
```
