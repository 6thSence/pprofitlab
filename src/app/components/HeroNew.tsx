import { ImageWithFallback } from './figma/ImageWithFallback';
import daryaPhoto from 'figma:asset/c55352d006d4add25e49f74123e42471be34c248.png';
import { useEffect, useState, useRef } from 'react';

interface HeroNewProps {
  onOpenDiagnostic: () => void;
}

export function HeroNew({ onOpenDiagnostic }: HeroNewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [profitability, setProfitability] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [plan, setPlan] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Запускаем анимацию сразу после монтирования
    const timer = setTimeout(() => {
      setIsVisible(true);
      animateCounters();
    }, 300);

    return () => clearTimeout(timer);
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
      
      setProfitability(75 * easedProgress);
      setRevenue(75 * easedProgress);
      setPlan(60 * easedProgress);
      setClients(500 * easedProgress);
      setSatisfaction(98 * easedProgress);
      
      if (frame >= totalFrames) {
        clearInterval(timer);
        setProfitability(75);
        setRevenue(75);
        setPlan(60);
        setClients(500);
        setSatisfaction(98);
      }
    }, frameRate);
  };

  // Вычисляем strokeDasharray для спидометра
  const speedometerDashArray = profitability;

  return (
    <section className="relative h-screen overflow-hidden flex flex-col" ref={sectionRef}>
      {/* Фоновое изображение - правая часть (только на десктопе) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src={daryaPhoto}
            alt="Дарья Пушкарская" 
            className="absolute right-0 top-0 w-auto h-full object-contain object-right"
            style={{
              minHeight: '100%'
            }}
          />
          {/* Плавный градиент для мягкого перехода слева */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 20%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 70%)'
            }}
          ></div>
        </div>
      </div>

      {/* Хедер с логотипом */}
      <header className="relative z-10 container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-8">
          <h3 className="font-futura" style={{ fontSize: '24px', color: '#2ba546' }}>
            Profit Lab
          </h3>
        </div>
      </header>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Левая часть - текст */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in max-w-2xl">
            <h1 className="font-futura leading-tight" style={{ fontSize: '40px' }}>
              <span style={{ color: '#2ba546' }}>Наслаждайтесь свободным временем</span>{' '}
              <span style={{ color: '#000000' }}>и сосредоточьтесь на стратегии</span>
            </h1>
            
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '18px' }}>
              Мы возьмем на себя систематизацию бизнеса и порядок в финансах, чтобы ваша прибыль росла без суеты и пожаров
            </p>

            <div>
              <button 
                className="px-8 py-3 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer relative overflow-hidden group" 
                style={{ fontSize: '16px', backgroundColor: '#2ba546' }}
                onClick={onOpenDiagnostic}
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Хочу больше прибыли</span>
              </button>
            </div>
          </div>

          {/* Правая часть - карточки поверх фона (только на десктопе) */}
          <div className="hidden lg:block relative h-[500px] lg:h-[550px]">
            
            {/* Карточка "Активных клиентов" слева по центру */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-white rounded-xl shadow-lg px-4 py-3 z-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-gray-500 mb-0.5" style={{ fontSize: '10px' }}>Активных клиентов</div>
                  <div className="font-bold text-gray-900" style={{ fontSize: '20px' }}>{Math.round(clients)}+</div>
                </div>
                <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2ba546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#2ba546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2ba546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Карточка "Удовлетворённость" справа сверху */}
            <div className="absolute top-[50%] right-0 bg-white rounded-xl shadow-lg px-4 py-3 z-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-gray-500 mb-0.5" style={{ fontSize: '10px' }}>Удовлетворённость</div>
                  <div className="font-bold text-gray-900" style={{ fontSize: '18px' }}>{Math.round(satisfaction)}%</div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div 
                    className="h-1.5 bg-primary rounded-full"
                    style={{
                      width: `${satisfaction / 98 * 36}px`,
                      maxWidth: '36px',
                      transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  ></div>
                  <div 
                    className="h-1.5 bg-primary/70 rounded-full"
                    style={{
                      width: `${satisfaction / 98 * 28}px`,
                      maxWidth: '28px',
                      transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
                    }}
                  ></div>
                  <div 
                    className="h-1.5 bg-primary/40 rounded-full"
                    style={{
                      width: `${satisfaction / 98 * 20}px`,
                      maxWidth: '20px',
                      transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Карточка "Рентабельность" внизу слева - спидометр */}
            <div className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-lg p-5 z-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-gray-600 mb-2" style={{ fontSize: '13px' }}>Рентабельность</div>
              <div className="w-36 h-24 relative flex items-end justify-center">
                {/* Спидометр - полукруг */}
                <svg width="144" height="88" viewBox="0 0 144 88" className="absolute bottom-0">
                  {/* Фоновая дуга - полукруг */}
                  <path
                    d="M 14 80 A 58 58 0 0 1 130 80"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  {/* Зеленая дуга прогресса */}
                  <path
                    d="M 14 80 A 58 58 0 0 1 130 80"
                    fill="none"
                    stroke="#2ba546"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="182.2"
                    strokeDashoffset={182.2 - (182.2 * profitability / 100)}
                    style={{
                      transition: 'stroke-dashoffset 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                  
                  {/* Деления на шкале */}
                  <g stroke="#e0e0e0" strokeWidth="2.5">
                    <line x1="18" y1="77" x2="18" y2="69" />
                    <line x1="36" y1="60" x2="34" y2="54" />
                    <line x1="58" y1="46" x2="55" y2="41" />
                    <line x1="72" y1="38" x2="72" y2="31" />
                    <line x1="86" y1="46" x2="89" y2="41" />
                    <line x1="108" y1="60" x2="110" y2="54" />
                    <line x1="126" y1="77" x2="126" y2="69" />
                  </g>
                  
                  {/* Стрелка спидометра */}
                  <g
                    style={{
                      transformOrigin: '72px 80px',
                      transform: `rotate(${-90 + (profitability / 100 * 180)}deg)`,
                      transition: 'transform 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <line
                      x1="72"
                      y1="80"
                      x2="72"
                      y2="32"
                      stroke="#2ba546"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="72" cy="80" r="5" fill="#2ba546" />
                  </g>
                </svg>
                
                {/* Процент в центре внизу */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-1">
                  <span className="font-bold text-gray-900" style={{ fontSize: '22px' }}>{Math.round(profitability)}%</span>
                </div>
              </div>
            </div>

            {/* Карточка "Финансы" внизу справа - прогресс бары */}
            <div className="absolute bottom-4 right-0 bg-white rounded-2xl shadow-lg p-5 w-[210px] z-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-gray-700 mb-3 font-medium" style={{ fontSize: '13px' }}>Финансы</div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-gray-600" style={{ fontSize: '12px' }}>Выручка</span>
                    <span className="font-semibold text-gray-900" style={{ fontSize: '12px' }}>2,8 млн ₽</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${revenue}%`,
                        backgroundColor: '#2ba546',
                        transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    ></div>
                  </div>
                  <div className="text-gray-400 mt-1" style={{ fontSize: '10px' }}>За текущий месяц</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-gray-600" style={{ fontSize: '12px' }}>Чистая прибыль</span>
                    <span className="font-semibold text-gray-900" style={{ fontSize: '12px' }}>890 тыс ₽</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${plan}%`,
                        backgroundColor: '#2ba546',
                        transition: 'width 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}