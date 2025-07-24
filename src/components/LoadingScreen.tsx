import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent animate-pulse-glow">
            R💙
          </div>
          <div className="absolute inset-0 text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent blur-sm opacity-50">
            R💙
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-muted-foreground animate-fade-in">Loading Portfolio...</p>
      </div>
    </div>
  );
};