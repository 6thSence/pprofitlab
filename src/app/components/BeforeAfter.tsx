import { X, Check } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function BeforeAfter() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Показываем карточки через 0.7 секунды после начала анимации линии
          setTimeout(() => {
            setShowCards(true);
          }, 700);
        }
      },
      { threshold: 0.2 }
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

  const beforeItems = [
    { text: "Нет прогнозируемой и стабильной прибыли", highlight: "стабильной прибыли" },
    { text: "Нет плана и понимания масштабирования", highlight: null },
    { text: "Нет оцифровки, управляем компанией интуитивно", highlight: null },
    { text: "Топчемся на месте и не можем вырасти", highlight: "на месте" },
    { text: "Страх кассового разрыва", highlight: "кассового разрыва" },
    { text: "Сложности делегирования", highlight: null },
    { text: "24/7 погрязли в операционке", highlight: "24/7 погрязли в операционке" },
    { text: "Выгорание собственника и команды, работа раздражает и бесит", highlight: "Выгорание" },
    { text: "Бизнес зависит от собственника", highlight: null },
    { text: "Рост только там, где фокус собственника", highlight: null },
    { text: "Несамостоятельная команда", highlight: "Несамостоятельная команда" },
    { text: "Нет регламентов и непонятно кто и как работает, хаос в компании", highlight: null }
  ];

  const afterItems = [
    { text: "Рост личного дохода и прибыли компании", highlight: "личного дохода" },
    { text: "Масштабирование компании с ростом рентабельности", highlight: null },
    { text: "Легкое и прозрачное управление бизнесом", highlight: "Легкое и прозрачное управление" },
    { text: "Спокойствие и прогнозируемая стабильная прибыль", highlight: "Спокойствие" },
    { text: "Есть четкий план роста на год вперед", highlight: "четкий план роста" },
    { text: "Команда чемпионов, которые радуют каждый день", highlight: "Команда чемпионов" },
    { text: "Сильное окружение системных предпринимателей", highlight: null },
    { text: "Больше свободного времени и улучшение качества жизни", highlight: "свободного времени" },
    { text: "Повышение личной эффективности руководителя и собственника", highlight: null },
    { text: "Свобода собственника от операционки", highlight: "Свобода собственника" },
    { text: "Команда работает слаженно, как единый организм", highlight: null },
    { text: "Собственник занимается своими стратегией, а не тушением пожаров", highlight: null }
  ];

  const renderText = (text: string, highlight: string | null, color: string) => {
    if (!highlight) return text;
    
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color }}>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="hidden py-16 lg:py-24 bg-gray-50 relative overflow-hidden m-[0px] pt-[150px] pr-[0px] pb-[96px] pl-[0px]" ref={sectionRef}>
      {/* График-линия с градиентом от красного к зеленому */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Градиент для линии от красного к зеленому */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4444" />
            <stop offset="50%" stopColor="#ff8844" />
            <stop offset="100%" stopColor="#2ba546" />
          </linearGradient>
          
          {/* Градиент для заливки вниз (слева направо от красного к зеленому) */}
          <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4444" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ff8844" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2ba546" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Маска для анимации выезжания слева направо */}
          <clipPath id="revealClip">
            <rect 
              x="0" 
              y="0" 
              width={isVisible ? "1000" : "0"} 
              height="600"
              style={{
                transition: 'width 0.5s ease-out'
              }}
            />
          </clipPath>
        </defs>
        
        {/* Заливка вниз от линии */}
        <path
          d="M 0,500 Q 250,450 500,300 T 1000,100 L 1000,600 L 0,600 Z"
          fill="url(#fillGradient)"
          clipPath="url(#revealClip)"
        />
        
        {/* Линия графика */}
        <path
          d="M 0,500 Q 250,450 500,300 T 1000,100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          clipPath="url(#revealClip)"
        />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* До нашей работы */}
          <div 
            className="relative"
            style={{
              opacity: showCards ? 1 : 0,
              transform: showCards ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            
            {/* Карточка с проблемами */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border-2 border-red-400 shadow-lg relative z-10">
              <h3 className="text-center mb-6">До нашей работы</h3>
              
              <div className="space-y-3">
                {beforeItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                    style={{ 
                      opacity: showCards ? 1 : 0,
                      transform: showCards ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `opacity 0.2s ease-out ${index * 0.02}s, transform 0.2s ease-out ${index * 0.02}s`
                    }}
                  >
                    <X 
                      className="flex-shrink-0 mt-0.5" 
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        color: '#ff4444',
                        strokeWidth: 2.5
                      }} 
                    />
                    <p className="text-gray-700 text-sm lg:text-base text-[15px]">
                      {renderText(item.text, item.highlight, '#ff4444')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* После нашей работы */}
          <div 
            className="relative"
            style={{
              opacity: showCards ? 1 : 0,
              transform: showCards ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            
            {/* Карточка с преимуществами */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border-2 border-[#2ba546] shadow-lg relative z-10">
              <h3 className="text-center mb-6">После нашей работы</h3>
              
              <div className="space-y-3">
                {afterItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                    style={{ 
                      opacity: showCards ? 1 : 0,
                      transform: showCards ? 'translateX(0)' : 'translateX(20px)',
                      transition: `opacity 0.2s ease-out ${0.1 + index * 0.02}s, transform 0.2s ease-out ${0.1 + index * 0.02}s`
                    }}
                  >
                    <Check 
                      className="flex-shrink-0 mt-0.5" 
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        color: '#2ba546',
                        strokeWidth: 2.5
                      }} 
                    />
                    <p className="text-gray-700 text-sm lg:text-base text-[15px]">
                      {renderText(item.text, item.highlight, '#2ba546')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}