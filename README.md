# 🚀 Ratheesh's Advanced Portfolio Website

A modern, feature-rich portfolio website showcasing full-stack development skills, cybersecurity expertise, and professional experience. Built with cutting-edge technologies and enhanced with an AI-powered chatbot.

![Portfolio Preview](public/placeholder.svg)

## ✨ Features

### 🎨 **Advanced UI/UX**
- **Particle Background**: Dynamic animated particle system
- **Glass Morphism**: Modern glassmorphism design elements  
- **Advanced Animations**: Smooth transitions and micro-interactions
- **Dark/Light Theme**: Seamless theme switching
- **Responsive Design**: Optimized for all devices

### 🤖 **AI-Powered Chatbot**
- **Python Backend**: Flask-based intelligent chatbot
- **Smart Responses**: Context-aware answers about skills, experience, and projects
- **Predefined Questions**: Quick-access buttons for common queries
- **Real-time Chat**: Instant responses with typing indicators
- **Fallback System**: Works offline with pre-programmed responses

### 📱 **Interactive Components**
- **Experience Timeline**: Auto-rotating professional experience cards
- **Project Showcase**: Filterable project portfolio with detailed modals
- **Skills Visualization**: Animated skill categories with progress indicators
- **Tech Carousel**: Scrolling technology showcase
- **Scroll-to-Top**: Smooth navigation enhancement

### 🛡️ **Security & Performance**
- **Modern Stack**: React 18, TypeScript, Vite
- **Optimized Assets**: Lazy loading and code splitting
- **SEO Friendly**: Meta tags and structured data
- **Accessibility**: WCAG compliance and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool
- **Shadcn/UI** - Beautiful component library
- **Lucide React** - Icon system

### Backend (Chatbot)
- **Python 3.8+** - Backend language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-origin resource sharing
- **AI Logic** - Intent recognition and response generation

## 🚀 Quick Start

### Option 1: One-Click Setup (Windows)
```bash
# Run the startup script
./start-portfolio.bat
```

### Option 2: Manual Setup

#### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/ratheesh-12/rat-portfolio.git
cd rat-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Chatbot Backend Setup
```bash
# Navigate to backend directory
cd chatbot-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py
```

## 📖 Usage

### 🌐 **Accessing the Portfolio**
- Frontend: `http://localhost:8081`
- Chatbot API: `http://localhost:5000`

### 💬 **Using the Chatbot**
1. Click the chat icon in the bottom-left corner
2. Ask questions about skills, experience, or projects
3. Use predefined question buttons for quick queries
4. The chatbot provides intelligent responses about professional background

## 🤖 Chatbot Features

### Supported Queries
- **Skills & Technologies**: "What technologies do you work with?"
- **Professional Experience**: "Tell me about your experience"
- **Project Portfolio**: "What projects have you built?"
- **Contact Information**: "How can I contact you?"
- **Background**: "Tell me about your background"
- **Achievements**: "What are your accomplishments?"

### API Endpoints
- `POST /chat` - Send message and get response
- `GET /predefined-questions` - Get suggested questions
- `GET /portfolio-data` - Get complete portfolio data
- `GET /health` - Server health check

## 📁 Project Structure

```
rat-portfolio/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🤖 Chatbot.tsx           # AI chatbot interface
│   │   ├── 🌟 Hero.tsx              # Enhanced hero section
│   │   ├── 💼 Experience.tsx        # Professional timeline
│   │   ├── 🚀 ProjectsShowcase.tsx  # Advanced project display
│   │   ├── 🎨 ParticleBackground.tsx # Dynamic particles
│   │   ├── ⬆️ ScrollToTop.tsx       # Navigation helper
│   │   └── 📱 ui/                   # Reusable UI components
│   ├── 📁 pages/
│   │   ├── 🏠 Index.tsx             # Main portfolio page
│   │   └── 🚫 NotFound.tsx          # 404 error page
│   └── 🎨 index.css                 # Advanced styling
├── 📁 chatbot-backend/
│   ├── 🐍 app.py                    # Flask chatbot server
│   ├── 📋 requirements.txt          # Python dependencies
│   └── 📖 README.md                 # Backend documentation
├── 📁 public/                       # Static assets
├── ⚙️ package.json                  # Frontend dependencies
├── 🔧 tailwind.config.ts            # Tailwind configuration
├── 🏃 start-portfolio.bat           # Quick start script
└── 📖 README.md                     # This file
```

## 📞 Contact

- **Email**: ratheesh@example.com
- **LinkedIn**: [ratheeshsekar12](https://linkedin.com/in/ratheeshsekar12)
- **GitHub**: [ratheesh-12](https://github.com/ratheesh-12)
- **WhatsApp**: [+91 8098501226](https://wa.me/918098501226)
- **Twitter**: [@ratheesh1226](https://x.com/ratheesh1226)
- **Telegram**: [@ratheesh1226](https://t.me/+918098501226)

---

<div align="center">
  <b>⭐ Star this repository if you found it helpful!</b>
  <br>
  <i>Built with ❤️ by Ratheesh Sekar</i>
</div>
