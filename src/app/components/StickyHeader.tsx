'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface StickyHeaderProps {
  onOpenDiagnostic: () => void;
}

export function StickyHeader({ onOpenDiagnostic }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Показываем header после прокрутки 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Определяем активную секцию
      const sections = ['about', 'services', 'cases', 'templates', 'faq', 'diagnostic-booking'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, scrollTo?: string) => {
    const targetId = scrollTo || sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset для sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'О нас' },
    { id: 'services', label: 'Услуги', scrollTo: 'diagnostic-booking' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'templates', label: 'Шаблоны' },
    { id: 'faq', label: 'FAQ' },
    { id: 'diagnostic-booking', label: 'Контакты' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <h3 
            className="font-futura cursor-pointer" 
            style={{ fontSize: '20px', color: '#2ba546' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Profit Lab
          </h3>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.scrollTo)}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? 'font-medium'
                    : 'hover:opacity-70'
                }`}
                style={{ 
                  color: activeSection === item.id ? '#2ba546' : '#374151',
                  fontSize: '14px'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-4">

            <button
              onClick={onOpenDiagnostic}
              className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-full hover:bg-[#34ae15] transition-colors shadow-md cursor-pointer relative overflow-hidden group"
              style={{ fontSize: '14px' }}
            >
              <span className="absolute inset-0 w-full h-full pointer-events-none">
                <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></span>
              </span>
              <span className="relative z-10">Записаться на диагностику</span>
              
              <style>{`
                @keyframes shimmer {
                  0% {
                    transform: translateX(-100%) skewX(12deg);
                  }
                  100% {
                    transform: translateX(500%) skewX(12deg);
                  }
                }
                .animate-shimmer {
                  animation: shimmer 3s ease-in-out infinite;
                  animation-delay: 1s;
                }
              `}</style>
            </button>

            {/* Бургер-меню для мобильных */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.scrollTo)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-50 font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                  style={{ 
                    color: activeSection === item.id ? '#2ba546' : '#374151'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={onOpenDiagnostic}
                className="sm:hidden bg-primary text-white px-6 py-2.5 rounded-full hover:bg-[#34ae15] transition-colors shadow-md text-center mt-2 relative overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Записаться на диагностику</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
