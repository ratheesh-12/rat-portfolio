import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    const texts = [
      "Initializing...",
      "Loading Components...",
      "Setting up Chatbot...",
      "Preparing Experience...",
      "Almost Ready...",
      "Welcome!"
    ];

    let textIndex = 0;
    const textTimer = setInterval(() => {
      if (textIndex < texts.length - 1) {
        setLoadingText(texts[textIndex]);
        textIndex++;
      }
    }, 800);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(textTimer);
          setLoadingText("Welcome!");
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center z-50">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Enhanced Cyber Matrix Animation */}
        <div className="relative mb-8 mx-auto">
          {/* Outer rotating ring with gradient */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-spin-slow p-1">
            <div className="w-full h-full rounded-full bg-background"></div>
          </div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-4 w-24 h-24 border-2 border-accent/50 rounded-full animate-pulse"></div>
          
          {/* Inner ring with dots */}
          <div className="absolute inset-6 w-20 h-20 border border-primary/30 rounded-full">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1 animate-bounce"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 translate-y-1 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Center logo with enhanced matrix effect */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-primary via-primary to-accent rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Enhanced matrix background effect */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 w-px h-full bg-white animate-pulse"
                  style={{
                    left: `${12.5 * (i + 1)}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Main letter with glow effect */}
            <span className="text-5xl font-bold text-white z-10 animate-pulse-glow drop-shadow-lg">R</span>
            
            {/* Floating particles around the logo */}
            <div className="absolute top-3 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1/2 left-2 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Enhanced loading text with typing effect */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 gradient-text">
            Ratheesh's Portfolio
          </h2>
          <p className="text-lg text-muted-foreground animate-pulse">
            {loadingText}
          </p>
        </div>

        {/* Enhanced progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Loading</span>
            <span className="text-sm font-mono text-primary">{Math.round(progress)}%</span>
          </div>
          
          <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"></div>
            
            {/* Progress fill with gradient and animation */}
            <div
              className="relative h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Tech stack preview */}
        <div className="mt-8 opacity-50">
          <p className="text-xs text-muted-foreground mb-2">Built with</p>
          <div className="flex justify-center space-x-4 text-xs">
            <span className="text-primary">React</span>
            <span className="text-accent">TypeScript</span>
            <span className="text-primary">Python</span>
            <span className="text-accent">Flask</span>
          </div>
        </div>
      </div>
    </div>
  );
};