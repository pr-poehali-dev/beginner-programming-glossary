import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Welcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 200);
    const timer2 = setTimeout(() => setStep(2), 700);
    const timer3 = setTimeout(() => setStep(3), 1200);
    const timer4 = setTimeout(() => setStep(4), 1600);
    const timer5 = setTimeout(() => {
      localStorage.setItem('welcomed', 'true');
      localStorage.setItem('welcomeTimestamp', Date.now().toString());
      navigate('/');
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center overflow-hidden relative">
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          step >= 4 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center space-y-12 relative z-10">
        <div 
          className={`transition-all duration-500 ${
            step >= 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
          }`}
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent transition-all duration-600 ${
              step >= 2 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`} style={{ 
              animation: step >= 1 ? 'spin 2s linear infinite' : 'none',
              animationDirection: 'reverse'
            }}>
              <div className="absolute inset-2 bg-background/90 backdrop-blur-sm rounded-2xl"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`transition-all duration-400 ${
                step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}>
                <Icon name="Database" className="w-12 h-12 text-primary relative z-10" />
              </div>
              
              <div className={`absolute transition-all duration-300 ${
                step >= 2 ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-0 rotate-0'
              }`}>
                <Icon name="Code2" className="w-7 h-7 text-secondary absolute -top-8 -right-8" />
              </div>
              
              <div className={`absolute transition-all duration-300 ${
                step >= 2 ? 'opacity-100 scale-100 -rotate-45' : 'opacity-0 scale-0 rotate-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <Icon name="BookOpen" className="w-6 h-6 text-accent absolute -bottom-8 -left-8" />
              </div>
              
              <div className={`absolute transition-all duration-300 ${
                step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <Icon name="Zap" className="w-5 h-5 text-primary/60 absolute top-10 right-10" />
              </div>
            </div>

            <div className={`absolute -inset-4 rounded-full border-2 border-primary/30 transition-all duration-600 ${
              step >= 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}></div>
            <div className={`absolute -inset-6 rounded-full border-2 border-secondary/20 transition-all duration-600 ${
              step >= 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`} style={{ transitionDelay: '100ms' }}></div>
          </div>
        </div>

        <div 
          className={`transition-all duration-500 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '0ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                К
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '50ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                о
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                д
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '150ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Б
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                а
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '250ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                з
              </span>
            </span>
            <span className={`inline-block transition-all duration-300 ${
              step >= 2 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
            }`} style={{ transitionDelay: '300ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                а
              </span>
            </span>
          </h1>
        </div>

        <div 
          className={`transition-all duration-400 ${
            step >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto px-4 font-light">
            Ваш путеводитель в мир программирования
          </p>
        </div>

        <div 
          className={`transition-all duration-300 ${
            step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary animate-ping"></div>
            <div className="w-3 h-3 rounded-full bg-secondary animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 animate-pulse">Загрузка...</p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;