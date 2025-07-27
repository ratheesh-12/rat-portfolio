import { useState, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Fallback predefined questions
const defaultQuestions = [
  "What technologies do you work with?",
  "Tell me about your experience",
  "What projects have you built?",
  "How can I contact you?",
  "What are your skills?",
  "Tell me about your background",
];

// Fallback responses when backend is not available
const fallbackResponses: Record<string, string> = {
  "what technologies do you work with": "I specialize in full-stack development with React, TypeScript, Node.js, Python, and Java. I'm also experienced in cybersecurity, working with penetration testing and security audits. For databases, I use MySQL, PostgreSQL, and MongoDB.",
  
  "tell me about your experience": "I'm Ratheesh Sekar, a passionate Full-Stack Developer and Cybersecurity Enthusiast. I build secure, scalable web applications using modern technologies and have experience in both frontend and backend development, along with mobile app development.",
  
  "what projects have you built": "I've built various projects including web applications using React and Node.js, mobile apps with React Native and Flutter, and security tools for penetration testing. I focus on creating user-friendly interfaces while maintaining strong security practices.",
  
  "how can i contact you": "You can reach me through multiple channels: WhatsApp (+91 8098501226), Telegram (@ratheesh1226), Email, LinkedIn (ratheeshsekar12), GitHub (ratheesh-12), or Twitter (@ratheesh1226). I'm always open to discussing new opportunities!",
  
  "what are your skills": "My technical skills include: Frontend (React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS), Backend (Java, Python, Node.js, Express, REST APIs), Databases (MySQL, PostgreSQL, MongoDB), Cybersecurity (Penetration Testing, Network Security, OWASP), Mobile (React Native, Flutter, Android), and Tools (Git, Docker, AWS, Linux, VS Code).",
  
  "tell me about your background": "I'm a dedicated developer with a strong foundation in both development and cybersecurity. I enjoy building digital solutions that make a difference and am passionate about creating secure, efficient applications. I'm always learning new technologies and staying updated with the latest industry trends.",
  
  "default": "Thank you for your question! I'm Ratheesh's portfolio chatbot. I can tell you about his skills, projects, experience, and how to contact him. Feel free to ask me anything about his professional background or use one of the suggested questions below!"
};

const BACKEND_URL = 'http://localhost:5000';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Ratheesh's portfolio assistant. How can I help you learn more about his skills and experience?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [predefinedQuestions, setPredefinedQuestions] = useState<string[]>(defaultQuestions);
  const [backendAvailable, setBackendAvailable] = useState(false);

  // Check if backend is available
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/health`);
        if (response.ok) {
          setBackendAvailable(true);
          // Fetch predefined questions from backend
          try {
            const questionsResponse = await fetch(`${BACKEND_URL}/predefined-questions`);
            if (questionsResponse.ok) {
              const data = await questionsResponse.json();
              setPredefinedQuestions(data.questions || defaultQuestions);
            }
          } catch (error) {
            console.log('Could not fetch predefined questions, using defaults');
          }
        }
      } catch (error) {
        console.log('Backend not available, using fallback responses');
        setBackendAvailable(false);
      }
    };

    checkBackend();
  }, []);

  const getBotResponseFromBackend = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch(`${BACKEND_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.response;
      } else {
        throw new Error('Backend error');
      }
    } catch (error) {
      console.error('Error communicating with backend:', error);
      throw error;
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return fallbackResponses.default;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      let botResponse: string;
      
      if (backendAvailable) {
        botResponse = await getBotResponseFromBackend(text);
      } else {
        // Use fallback response
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        botResponse = getFallbackResponse(text);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // If backend fails, use fallback
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getFallbackResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePredefinedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-8 z-50 w-80 h-96 shadow-xl border-2 border-primary/20 bg-background/95 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              Portfolio Assistant
              {backendAvailable && (
                <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-200">
                  AI Enhanced
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full pb-4">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Predefined Questions */}
            <div className="mb-3">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {predefinedQuestions.slice(0, 3).map((question, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handlePredefinedQuestion(question)}
                  >
                    {question.length > 20 ? `${question.substring(0, 20)}...` : question}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
                disabled={isLoading}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading) {
                    handleSendMessage(inputValue);
                  }
                }}
              />
              <Button
                size="icon"
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
