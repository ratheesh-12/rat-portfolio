from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Portfolio information database
PORTFOLIO_DATA = {
    "personal_info": {
        "name": "Ratheesh Sekar",
        "title": "Full-Stack Developer & Cybersecurity Enthusiast",
        "location": "India",
        "email": "ratheesh@example.com",
        "phone": "+91 8098501226",
        "social": {
            "github": "https://github.com/ratheesh-12",
            "linkedin": "https://www.linkedin.com/in/ratheeshsekar12/",
            "twitter": "https://x.com/ratheesh1226/",
            "whatsapp": "https://wa.me/918098501226/",
            "telegram": "https://t.me/+918098501226"
        }
    },
    "skills": {
        "frontend": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        "backend": ["Java", "Python", "Node.js", "Express", "REST APIs"],
        "database": ["MySQL", "PostgreSQL", "MongoDB"],
        "cybersecurity": ["Penetration Testing", "Network Security", "OWASP", "Security Audits"],
        "mobile": ["React Native", "Flutter", "Android"],
        "tools": ["Git", "Docker", "AWS", "Linux", "VS Code"]
    },
    "experience": [
        {
            "title": "Full-Stack Developer",
            "company": "Tech Innovations Ltd",
            "period": "2023 - Present",
            "description": "Developed and maintained web applications using React, Node.js, and MongoDB. Implemented security best practices and conducted code reviews."
        },
        {
            "title": "Cybersecurity Analyst", 
            "company": "SecureNet Solutions",
            "period": "2022 - 2023",
            "description": "Performed penetration testing, vulnerability assessments, and security audits. Developed security protocols and conducted training sessions."
        },
        {
            "title": "Frontend Developer",
            "company": "Digital Agency Co",
            "period": "2021 - 2022", 
            "description": "Built responsive web interfaces using React and TypeScript. Collaborated with UX/UI designers to implement modern designs."
        }
    ],
    "projects": [
        {
            "name": "E-Commerce Platform",
            "description": "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
            "technologies": ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"]
        },
        {
            "name": "Security Audit Tool",
            "description": "A Python-based tool for automated security vulnerability scanning",
            "technologies": ["Python", "Flask", "SQLite", "OWASP", "Nmap"]
        },
        {
            "name": "Task Management App",
            "description": "A React Native mobile app for task management with real-time synchronization",
            "technologies": ["React Native", "Firebase", "Redux", "AsyncStorage"]
        }
    ],
    "achievements": [
        "Certified Ethical Hacker (CEH)",
        "AWS Certified Developer",
        "Published research on web security vulnerabilities",
        "Led security training for 50+ developers"
    ]
}

# Response patterns and intents
RESPONSE_PATTERNS = {
    "greeting": {
        "patterns": ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
        "responses": [
            "Hello! I'm Ratheesh's portfolio assistant. How can I help you learn more about his skills and experience?",
            "Hi there! I'm here to help you learn about Ratheesh's professional background. What would you like to know?",
            "Hey! Welcome to Ratheesh's portfolio. I can tell you about his skills, projects, experience, and more!"
        ]
    },
    "skills": {
        "patterns": ["skills", "technology", "technologies", "programming", "languages", "tech stack"],
        "responses": [
            f"Ratheesh has expertise in multiple areas:\n\n🔹 Frontend: {', '.join(PORTFOLIO_DATA['skills']['frontend'])}\n🔹 Backend: {', '.join(PORTFOLIO_DATA['skills']['backend'])}\n🔹 Database: {', '.join(PORTFOLIO_DATA['skills']['database'])}\n🔹 Cybersecurity: {', '.join(PORTFOLIO_DATA['skills']['cybersecurity'])}\n🔹 Mobile: {', '.join(PORTFOLIO_DATA['skills']['mobile'])}\n🔹 Tools: {', '.join(PORTFOLIO_DATA['skills']['tools'])}"
        ]
    },
    "experience": {
        "patterns": ["experience", "work", "job", "career", "professional", "employment"],
        "responses": [
            "Ratheesh has diverse professional experience:\n\n" + 
            "\n\n".join([f"🔸 {exp['title']} at {exp['company']} ({exp['period']})\n   {exp['description']}" for exp in PORTFOLIO_DATA['experience']])
        ]
    },
    "projects": {
        "patterns": ["projects", "portfolio", "work samples", "built", "developed", "created"],
        "responses": [
            "Here are some of Ratheesh's notable projects:\n\n" +
            "\n\n".join([f"🚀 {proj['name']}\n   {proj['description']}\n   Technologies: {', '.join(proj['technologies'])}" for proj in PORTFOLIO_DATA['projects']])
        ]
    },
    "contact": {
        "patterns": ["contact", "reach", "email", "phone", "social", "connect"],
        "responses": [
            f"You can reach Ratheesh through:\n\n📧 Email: {PORTFOLIO_DATA['personal_info']['email']}\n📱 Phone: {PORTFOLIO_DATA['personal_info']['phone']}\n🔗 LinkedIn: {PORTFOLIO_DATA['personal_info']['social']['linkedin']}\n💻 GitHub: {PORTFOLIO_DATA['personal_info']['social']['github']}\n📱 WhatsApp: {PORTFOLIO_DATA['personal_info']['social']['whatsapp']}\n💬 Telegram: {PORTFOLIO_DATA['personal_info']['social']['telegram']}"
        ]
    },
    "about": {
        "patterns": ["about", "who", "background", "introduction", "bio"],
        "responses": [
            f"Ratheesh Sekar is a {PORTFOLIO_DATA['personal_info']['title']} based in {PORTFOLIO_DATA['personal_info']['location']}. He specializes in building secure, scalable web applications and has extensive experience in cybersecurity. Ratheesh is passionate about creating digital solutions that make a difference and stays updated with the latest industry trends."
        ]
    },
    "achievements": {
        "patterns": ["achievements", "certifications", "awards", "accomplishments"],
        "responses": [
            "Ratheesh's key achievements include:\n\n" +
            "\n".join([f"🏆 {achievement}" for achievement in PORTFOLIO_DATA['achievements']])
        ]
    }
}

def find_intent(message):
    """Find the best matching intent for the user message"""
    message_lower = message.lower()
    
    for intent, data in RESPONSE_PATTERNS.items():
        for pattern in data["patterns"]:
            if pattern in message_lower:
                return intent
    
    return "default"

def generate_response(intent, message):
    """Generate a response based on the identified intent"""
    if intent in RESPONSE_PATTERNS:
        responses = RESPONSE_PATTERNS[intent]["responses"]
        return responses[0]  # Return the first response for now
    else:
        return "I'm here to help you learn about Ratheesh's professional background. You can ask me about his skills, experience, projects, achievements, or how to contact him. What would you like to know?"

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '').strip()
        
        if not user_message:
            return jsonify({'error': 'Message is required'}), 400
        
        # Find intent and generate response
        intent = find_intent(user_message)
        response = generate_response(intent, user_message)
        
        return jsonify({
            'response': response,
            'intent': intent,
            'timestamp': datetime.now().isoformat()
        })
    
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/predefined-questions', methods=['GET'])
def get_predefined_questions():
    """Get predefined questions that users can ask"""
    questions = [
        "What technologies do you work with?",
        "Tell me about your experience",
        "What projects have you built?",
        "How can I contact you?",
        "What are your skills?",
        "Tell me about your background",
        "What are your achievements?",
        "What's your experience in cybersecurity?"
    ]
    
    return jsonify({'questions': questions})

@app.route('/portfolio-data', methods=['GET'])
def get_portfolio_data():
    """Get complete portfolio data"""
    return jsonify(PORTFOLIO_DATA)

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

if __name__ == '__main__':
    print("🤖 Ratheesh's Portfolio Chatbot Server Starting...")
    print("📍 Server will be available at: http://localhost:5000")
    print("🔗 API Endpoints:")
    print("   POST /chat - Chat with the bot")
    print("   GET /predefined-questions - Get suggested questions")
    print("   GET /portfolio-data - Get portfolio data")
    print("   GET /health - Health check")
    app.run(debug=True, host='0.0.0.0', port=5000)
