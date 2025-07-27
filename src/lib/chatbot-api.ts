// API service for chatbot communication
const API_BASE_URL = 'http://localhost:5000';

export interface ChatMessage {
  message: string;
}

export interface ChatResponse {
  response: string;
  intent: string;
  timestamp: string;
}

export interface PredefinedQuestionsResponse {
  questions: string[];
}

export interface PortfolioData {
  personal_info: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      whatsapp: string;
      telegram: string;
    };
  };
  skills: Record<string, string[]>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
  achievements: string[];
}

class ChatbotAPI {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Chatbot API Error (${endpoint}):`, error);
      throw error;
    }
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  async getPredefinedQuestions(): Promise<PredefinedQuestionsResponse> {
    return this.request<PredefinedQuestionsResponse>('/predefined-questions');
  }

  async getPortfolioData(): Promise<PortfolioData> {
    return this.request<PortfolioData>('/portfolio-data');
  }

  async checkHealth(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

// Export singleton instance
export const chatbotAPI = new ChatbotAPI();

// Utility functions for fallback responses
export const fallbackResponses = {
  "what technologies do you work with": "I specialize in full-stack development with React, TypeScript, Node.js, Python, and Java. I'm also experienced in cybersecurity, working with penetration testing and security audits. For databases, I use MySQL, PostgreSQL, and MongoDB.",
  
  "tell me about your experience": "I'm Ratheesh Sekar, a passionate Full-Stack Developer and Cybersecurity Enthusiast. I build secure, scalable web applications using modern technologies and have experience in both frontend and backend development, along with mobile app development.",
  
  "what projects have you built": "I've built various projects including web applications using React and Node.js, mobile apps with React Native and Flutter, and security tools for penetration testing. I focus on creating user-friendly interfaces while maintaining strong security practices.",
  
  "how can i contact you": "You can reach me through multiple channels: WhatsApp (+91 8098501226), Telegram (@ratheesh1226), Email, LinkedIn (ratheeshsekar12), GitHub (ratheesh-12), or Twitter (@ratheesh1226). I'm always open to discussing new opportunities!",
  
  "what are your skills": "My technical skills include: Frontend (React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS), Backend (Java, Python, Node.js, Express, REST APIs), Databases (MySQL, PostgreSQL, MongoDB), Cybersecurity (Penetration Testing, Network Security, OWASP), Mobile (React Native, Flutter, Android), and Tools (Git, Docker, AWS, Linux, VS Code).",
  
  "tell me about your background": "I'm a dedicated developer with a strong foundation in both development and cybersecurity. I enjoy building digital solutions that make a difference and am passionate about creating secure, efficient applications. I'm always learning new technologies and staying updated with the latest industry trends.",
  
  "default": "Thank you for your question! I'm Ratheesh's portfolio chatbot. I can tell you about his skills, projects, experience, and how to contact him. Feel free to ask me anything about his professional background or use one of the suggested questions below!"
};

export const getFallbackResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const [key, response] of Object.entries(fallbackResponses)) {
    if (key !== 'default' && lowerMessage.includes(key)) {
      return response;
    }
  }
  
  return fallbackResponses.default;
};
