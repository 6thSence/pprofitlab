import { getPlaceholderImage } from '../utils/placeholder';
'use client';

import { useState, useEffect } from 'react';

export function DiagnosticBooking() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [spotsLeft] = useState(3);

  // Таймер обратного отсчета
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="diagnostic-booking" className="relative py-32 overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getPlaceholderImage("Диагностика")}
          alt="Дарья Пушкарская"
          className="w-full h-full object-cover"
        />
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-left">
          
          {/* Плашка с срочностью */}
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8 animate-fade-in" style={{ fontSize: '15px' }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Осталось {spotsLeft} места в этом месяце
          </div>

          {/* Заголовок */}
          <h2 className="font-futura text-white mb-6 animate-fade-in" style={{ fontSize: '56px', lineHeight: '1.2', animationDelay: '0.1s' }}>
            Запишись на диагностику
          </h2>

          {/* Подзаголовок */}
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Получите радар-карту вашего бизнеса и план первых шагов для роста прибыли
          </p>

          {/* Преимущества */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <span className="text-primary text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="text-white font-medium mb-1">Бесплатно</div>
                <div className="text-white/70 text-sm"><span className="line-through">25 000 рублей</span> </div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <span className="text-primary text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="text-white font-medium mb-1">Онлайн</div>
                <div className="text-white/70 text-sm">Встреча в Zoom от 30 до 60 минут</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <span className="text-primary text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="text-white font-medium mb-1">Конкретика</div>
                <div className="text-white/70 text-sm">План роста по 8 зонам бизнеса</div>
              </div>
            </div>
          </div>

          {/* Таймер */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-md">
            <div className="text-white/70 text-sm mb-3">Специальное предложение истекает через:</div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="bg-primary/20 rounded-lg px-4 py-3 mb-2">
                  <span className="text-white font-futura text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <div className="text-white/60 text-xs">часов</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-lg px-4 py-3 mb-2">
                  <span className="text-white font-futura text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <div className="text-white/60 text-xs">минут</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-lg px-4 py-3 mb-2">
                  <span className="text-white font-futura text-3xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <div className="text-white/60 text-xs">секунд</div>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <button 
            className="cursor-pointer px-12 py-5 rounded-full font-futura font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in text-xl group relative overflow-hidden"
            style={{ 
              backgroundColor: '#2ba546',
              animationDelay: '0.2s'
            }}
            onClick={() => window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank')}
          >
            <span className="absolute inset-0 w-full h-full pointer-events-none">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
            </span>
            <span className="relative z-10">Хочу системный бизнес</span>
            <span className="relative z-10 inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p className="text-white/60 text-sm mt-4">
            После заполнения формы с вами свяжется наш менеджер для уточнения деталей
          </p>

        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-float" style={{ backgroundColor: '#2ba546' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#34ae15', animationDelay: '1s' }}></div>
    </section>
  );
}