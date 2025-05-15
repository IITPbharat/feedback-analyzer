# Feedback Sentiment Analyzer API

A Node.js + Express backend API that analyzes user feedback and classifies it as Positive, Negative, or Neutral using NLP.

##  Features

- Sentiment analysis using `sentiment` package
- MongoDB Atlas for storing feedbacks
- RESTful API with clean modular code
- Tested with Postman

##  Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Sentiment (NPM package)
- Postman

##  Folder Structure

```
feedback-analyzer/
controllers/
models/
routes/
config/
.env # Not pushed to GitHub
.gitignore
app.js
README.md```



##  API Endpoints

### `POST /api/feedback`

**Request Body:**
```json
{
  "text": "This app is amazing!"
}```

{
  "sentiment": "Positive",
  "text": "This app is amazing!"
}
