import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Unique Cyber Matrix Animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-24 h-24 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-20 h-20 border border-accent/50 rounded-full animate-pulse"></div>
          
          {/* Center logo with matrix effect */}
          <div className="relative w-24 h-24 bg-hero-gradient rounded-full flex items-center justify-center overflow-hidden">
            {/* Matrix background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1 w-px h-full bg-accent animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-0 left-3 w-px h-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-0 left-5 w-px h-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            {/* Main letter */}
            <span className="text-3xl font-bold text-white z-10 animate-pulse-glow">R</span>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 w-24 h-24 animate-spin">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2 animate-fade-in bg-hero-gradient bg-clip-text text-transparent">
          Ratheesh Sekar
        </h2>
        
        <p className="text-sm text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Cyber Professional • Developer
        </p>
        
        {/* Cyber-style progress bar */}
        <div className="w-64 h-1 bg-card border border-border/30 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-hero-gradient transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 w-2 h-full bg-accent opacity-80 animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground mt-3 font-mono animate-fade-in">
          INITIALIZING PORTFOLIO... {progress}%
        </p>
      </div>
    </div>
  );
};