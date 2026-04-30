import { useState } from 'react';
import { ChatBot } from './ChatBot';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Контейнер Hero и ChatBot */}
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Левая часть - Hero контент */}
          <div className="flex flex-col justify-center space-y-8 lg:pt-12">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-futura text-4xl md:text-5xl lg:text-6xl leading-tight">
                Агентство полного цикла
                <br />
                <span className="text-primary">Дарьи Пушкарской</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                Помогаем предпринимателям создавать системный бизнес через диагностику, 
                маркетинг, автоматизацию и внедрение ИИ
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-futura font-medium text-lg hover:bg-primary-hover transition-all duration-300 shadow-green cursor-pointer">
                  Получить консультацию
                </button>
                <button className="hidden sm:block px-8 py-4 border-2 border-primary text-primary rounded-full font-futura font-medium text-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                  Узнать больше
                </button>
              </div>
            </div>

            {/* Статистика - скрыта на мобилке */}
            <div className="hidden md:grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-futura font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600 mt-1">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-futura font-bold text-primary">6</div>
                <div className="text-sm text-gray-600 mt-1">Направлений</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-futura font-bold text-primary">162</div>
                <div className="text-sm text-gray-600 mt-1">Шаблона</div>
              </div>
            </div>
          </div>

          {/* Правая часть - ChatBot - скрыт на мобилке */}
          <div className="hidden lg:block lg:pt-0 animate-slide-in-right">
            <ChatBot />
          </div>

        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
