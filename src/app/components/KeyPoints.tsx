import { useState, useEffect, useRef } from 'react';

export function KeyPoints() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Довольных клиентов"
    },
    {
      number: 95,
      suffix: "%",
      label: "Рекомендуют нас"
    },
    {
      number: 100,
      suffix: "+",
      label: "Готовых шаблонов"
    },
    {
      number: 5,
      suffix: "+",
      label: "Лет на рынке"
    }
  ];

  // Intersection Observer для запуска анимации при появлении в viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100"
    >
      <style>{`
        .stat-item {
          transition: all 0.3s ease;
        }
        .stat-item:hover {
          transform: translateY(-2px);
        }
        .stat-number {
          background: linear-gradient(135deg, #2ba546, #34ae15);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Компактная статистика в одну строку */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                targetNumber={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  targetNumber: number;
  suffix: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

function StatCounter({ targetNumber, suffix, label, delay, isVisible }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 2 секунды
      const steps = 60; // 60 кадров
      const increment = targetNumber / steps;
      let current = 0;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        current += increment;
        
        // Easing функция (ease-out)
        const progress = frame / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(targetNumber * easeOut);
        
        setCount(value);

        if (frame >= steps) {
          setCount(targetNumber);
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, targetNumber, delay]);

  return (
    <div 
      className="stat-item text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Цифра */}
      <div 
        className="stat-number text-4xl md:text-5xl mb-1 font-futura"
        style={{
          background: 'linear-gradient(135deg, #2ba546, #34ae15)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {count}{suffix}
      </div>
      
      {/* Лейбл */}
      <div className="text-gray-600 text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}
