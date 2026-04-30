import { getPlaceholderImage } from '../utils/placeholder';
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ExitPopupProps {
  onOpenDiagnostic?: () => void;
}

export function ExitPopup({ onOpenDiagnostic }: ExitPopupProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
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

  // Отслеживание попытки покинуть страницу
  useEffect(() => {
    // Проверяем, показывали ли уже popup в этой сессии
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Если курсор ушел к верхней части экрана (попытка закрыть вкладку)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBooking = () => {
    if (onOpenDiagnostic) {
      onOpenDiagnostic();
    } else {
      window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Popup Content */}
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-scale-in">
        {/* Кнопка закрытия */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Основной контент с фоном */}
        <div className="relative overflow-hidden rounded-3xl">
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
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-3xl">
              
              {/* Плашка с срочностью */}
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-6 animate-fade-in" style={{ fontSize: '15px' }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Осталось {spotsLeft} места в этом месяце
              </div>

              {/* Заголовок */}
              <h2 className="font-futura text-white mb-4 animate-fade-in" style={{ fontSize: '48px', lineHeight: '1.2', animationDelay: '0.1s' }}>
                Подождите! Не уходите без диагностики
              </h2>

              {/* Подзаголовок */}
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                Получите радар-карту вашего бизнеса и план первых шагов для роста прибыли
              </p>

              {/* Кнопка */}
              <button 
                className="px-12 py-5 rounded-full font-futura font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in text-xl group relative overflow-hidden cursor-pointer mb-6"
                style={{ 
                  backgroundColor: '#2ba546',
                  animationDelay: '0.2s'
                }}
                onClick={handleBooking}
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Хочу системный бизнес</span>
                <span className="relative z-10 inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>

              {/* Таймер */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 max-w-md">
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

              {/* Преимущества */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
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

              <p className="text-white/60 text-sm mt-4">
                После заполнения формы с вами свяжется наш менеджер для уточнения деталей
              </p>

            </div>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-float" style={{ backgroundColor: '#2ba546' }}></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#34ae15', animationDelay: '1s' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
