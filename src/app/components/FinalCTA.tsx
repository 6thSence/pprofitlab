export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark relative overflow-hidden">
      {/* Фоновое изображение с эффектом */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Бейдж */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium mb-8 animate-fade-in">
            🎯 Сделай первый шаг —
          </div>

          {/* Заголовок */}
          <h2 className="font-futura text-5xl md:text-6xl leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Запишись<br />на диагностику
          </h2>

          {/* Описание */}
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Получите бесплатный разбор вашего бизнеса и индивидуальный план развития
          </p>

          {/* Кнопка */}
          <button 
            className="px-12 py-5 bg-white text-primary rounded-full font-futura font-medium text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 animate-fade-in cursor-pointer relative overflow-hidden group" 
            style={{ animationDelay: '0.3s' }}
            onClick={() => window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank')}
          >
            <span className="absolute inset-0 w-full h-full pointer-events-none">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
            </span>
            <span className="relative z-10">Хочу системный бизнес</span>
          </button>

          {/* Преимущества диагностики */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-large p-6">
              <div className="text-4xl mb-3">⏱</div>
              <div className="font-futura text-lg mb-1">2-3 часа</div>
              <div className="text-sm opacity-80">Длительность сессии</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-large p-6">
              <div className="text-4xl mb-3">💎</div>
              <div className="font-futura text-lg mb-1">Бесплатно</div>
              <div className="text-sm opacity-80">Стоимость 50 000 ₽</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-large p-6">
              <div className="text-4xl mb-3">📊</div>
              <div className="font-futura text-lg mb-1">План действий</div>
              <div className="text-sm opacity-80">Индивидуальная стратегия</div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 text-sm opacity-75 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p>✓ Конфиденциально &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Без обязательств &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Только ценность</p>
          </div>

        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
}
