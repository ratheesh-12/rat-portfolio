# Ratheesh's Portfolio Chatbot Backend

This is the Python Flask backend for the portfolio chatbot that provides information about Ratheesh Sekar's professional background, skills, and experience.

## Features

- 🤖 AI-powered chatbot responses
- 📊 Portfolio data management
- 🔍 Intent recognition
- 💬 Predefined questions
- 🌐 RESTful API
- 🔒 CORS enabled for frontend integration

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. Navigate to the chatbot backend directory:
```bash
cd chatbot-backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
```bash
# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

4. Install required packages:
```bash
pip install -r requirements.txt
```

### Running the Server

1. Start the Flask server:
```bash
python app.py
```

2. The server will be available at `http://localhost:5000`

## API Endpoints

### POST /chat
Send a message to the chatbot and get a response.

**Request Body:**
```json
{
  "message": "What technologies do you work with?"
}
```

**Response:**
```json
{
  "response": "Ratheesh has expertise in multiple areas...",
  "intent": "skills",
  "timestamp": "2025-01-27T10:30:00"
}
```

### GET /predefined-questions
Get a list of predefined questions users can ask.

**Response:**
```json
{
  "questions": [
    "What technologies do you work with?",
    "Tell me about your experience",
    "..."
  ]
}
```

### GET /portfolio-data
Get complete portfolio information.

### GET /health
Health check endpoint.

## Supported Intents

- **Greeting**: Hello, hi, good morning
- **Skills**: Technologies, programming languages, tech stack
- **Experience**: Work history, career, professional background
- **Projects**: Portfolio projects, work samples
- **Contact**: Contact information, social media
- **About**: Personal background, introduction
- **Achievements**: Certifications, awards, accomplishments

## Integration with Frontend

The chatbot frontend component automatically connects to this backend server. Make sure the server is running on port 5000 when using the portfolio website.

## Customization

To customize the chatbot responses or add new intents:

1. Edit the `PORTFOLIO_DATA` dictionary in `app.py`
2. Add new patterns and responses to `RESPONSE_PATTERNS`
3. Restart the server

## Security Notes

- The server runs in debug mode for development
- For production deployment, disable debug mode and add proper security measures
- Consider adding rate limiting and authentication for production use
