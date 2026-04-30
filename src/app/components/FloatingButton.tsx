import { useState, useEffect } from 'react';

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем кнопку после небольшого скролла
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full font-futura font-medium text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      style={{ 
        backgroundColor: '#2ba546',
        fontSize: '15px'
      }}
    >
      <span className="absolute inset-0 w-full h-full pointer-events-none">
        <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
      </span>

      <span className="flex items-center gap-3 relative z-10">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Записаться на диагностику
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      {/* Пульсирующее кольцо при hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ 
        boxShadow: '0 0 0 0 rgba(43, 165, 70, 0.7)',
        animation: 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }}></span>

      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(43, 165, 70, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(43, 165, 70, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(43, 165, 70, 0);
          }
        }
      `}</style>
    </button>
  );
}
