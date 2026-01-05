import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Welcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1500);
    const timer3 = setTimeout(() => setStep(3), 2500);
    const timer4 = setTimeout(() => {
      localStorage.setItem('welcomed', 'true');
      navigate('/');
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-8">
        <div 
          className={`transition-all duration-1000 ${
            step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"></div>
            <div className="relative z-10 flex items-center justify-center">
              <Icon name="Database" className="w-10 h-10 text-white absolute" />
              <Icon name="Code2" className="w-6 h-6 text-white/80 absolute -top-2 -right-2" />
              <Icon name="BookOpen" className="w-5 h-5 text-white/60 absolute -bottom-1 -left-1" />
            </div>
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            КодБаза
          </h1>
        </div>

        <div 
          className={`transition-all duration-1000 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ваш путеводитель в мир программирования
          </p>
        </div>

        <div 
          className={`transition-all duration-500 ${
            step >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;