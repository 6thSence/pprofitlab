import { Plus } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function StableGrowth() {
  const [isVisible, setIsVisible] = useState(false);
  const [revenue, setRevenue] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    "Процессы построены вокруг технологий, а не вокруг людей",
    "Мощная команда профессионалов",
    "Не нуждается в собственнике 24\\7"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
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

  const animateCounters = () => {
    const duration = 3000; // 3 секунды
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing функция с амортизацией (ease-out-back)
      const easeOutBack = (x: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
      };
      
      const easedProgress = easeOutBack(progress);
      
      setRevenue(2.4 * easedProgress);
      setPercentage(12.5 * easedProgress);
      setEfficiency(78 * easedProgress);
      
      if (frame >= totalFrames) {
        clearInterval(timer);
        setRevenue(2.4);
        setPercentage(12.5);
        setEfficiency(78);
      }
    }, frameRate);
  };

  // Вычисляем strokeDashoffset для круговой диаграммы
  const circleCircumference = 2 * Math.PI * 50; // 314
  const circleDashArray = (efficiency / 100) * circleCircumference;

  return (
    <section id="services" className="py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Левая часть - Дашборды */}
          <div className="space-y-4 animate-fade-in">
            {/* Карточка 1 - Линейный график */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Выручка</p>
                  <p className="text-2xl" style={{ color: '#2ba546' }}>
                    ₽{revenue.toFixed(1)}M
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#e8f5e9', color: '#2ba546' }}>
                  +{percentage.toFixed(1)}%
                </div>
              </div>
              <svg viewBox="0 0 300 80" className="w-full">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2ba546" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2ba546" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="lineClip">
                    <rect 
                      x="0" 
                      y="0" 
                      width={isVisible ? "300" : "0"} 
                      height="80"
                      style={{
                        transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    />
                  </clipPath>
                </defs>
                <polyline
                  points="0,60 50,45 100,50 150,30 200,35 250,15 300,20"
                  fill="none"
                  stroke="#2ba546"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  clipPath="url(#lineClip)"
                />
                <polyline
                  points="0,60 50,45 100,50 150,30 200,35 250,15 300,20 300,80 0,80"
                  fill="url(#gradient1)"
                  opacity="0.2"
                  clipPath="url(#lineClip)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Карточка 2 - Круговая диаграмма */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-500 text-sm mb-3">Эффективность</p>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-24 h-24">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="12"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#2ba546"
                      strokeWidth="12"
                      strokeDasharray={`${circleDashArray} ${circleCircumference}`}
                      strokeDashoffset="0"
                      transform="rotate(-90 60 60)"
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dasharray 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    />
                    <text
                      x="60"
                      y="65"
                      textAnchor="middle"
                      fill="#2ba546"
                      fontSize="24"
                      fontWeight="bold"
                    >
                      {Math.round(efficiency)}%
                    </text>
                  </svg>
                </div>
              </div>

              {/* Карточка 3 - Столбчатая диаграмма */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-500 text-sm mb-3">Рост показателей</p>
                <svg viewBox="0 0 140 80" className="w-full">
                  <rect x="10" y="40" width="18" height="40" fill="#e0e0e0" rx="4" />
                  <rect 
                    x="36" 
                    y={isVisible ? "30" : "80"} 
                    width="18" 
                    height={isVisible ? "50" : "0"} 
                    fill="#2ba546" 
                    opacity="0.6" 
                    rx="4"
                    style={{
                      transition: 'height 3s cubic-bezier(0.34, 1.56, 0.64, 1), y 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                  <rect x="62" y="45" width="18" height="35" fill="#e0e0e0" rx="4" />
                  <rect 
                    x="88" 
                    y={isVisible ? "20" : "80"} 
                    width="18" 
                    height={isVisible ? "60" : "0"} 
                    fill="#2ba546" 
                    rx="4"
                    style={{
                      transition: 'height 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s, y 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
                    }}
                  />
                  <rect 
                    x="114" 
                    y={isVisible ? "35" : "80"} 
                    width="18" 
                    height={isVisible ? "45" : "0"} 
                    fill="#2ba546" 
                    opacity="0.8" 
                    rx="4"
                    style={{
                      transition: 'height 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, y 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Правая часть - Текст и преимущества */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Кнопка сверху */}
            <div>
              <button 
                className="px-6 py-2 rounded-full border-2"
                style={{ 
                  borderColor: '#2ba546',
                  color: '#2ba546',
                  fontSize: '14px'
                }}
              >
                <span>Ваш конечный результат</span>
              </button>
            </div>

            {/* Заголовок */}
            <h2 className="font-futura leading-tight">
              <span style={{ color: '#000000' }}>Стабильно растущий </span>
              <span style={{ color: '#2ba546' }}>прибыльный бизнес,</span>
            </h2>

            {/* Подзаголовок */}
            <p className="text-gray-700" style={{ fontSize: '18px' }}>
              Которым легко управлять на основе показателей
            </p>

            {/* Список преимуществ */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Plus 
                    className="flex-shrink-0 mt-1" 
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      color: '#2ba546',
                      strokeWidth: 3
                    }} 
                  />
                  <p className="text-gray-700" style={{ fontSize: '16px' }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}