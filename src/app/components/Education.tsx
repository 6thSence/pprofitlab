import { useState, useEffect, useRef } from 'react';

const programs = [
  'Операционный директор',
  'Бизнес-ассистент',
  'Как создавать регламенты',
  'ИИ для бизнеса',
  'Эффективное мышление',
];

export function Education() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
            🎓
          </div>
          <h2 className="text-black mb-4">Обучение и развитие</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Обучаем руководителей и команды — индивидуально или корпоративно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-1000 delay-200 ${inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-2xl">
                👤
              </div>
              <h3 className="text-black">Индивидуально</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Персональное обучение и коучинг для руководителей с фокусом на ваши задачи и контекст бизнеса
            </p>
            <ul className="space-y-3 mb-6">
              {programs.map((program, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-yellow-600 mt-1">•</span>
                  {program}
                </li>
              ))}
            </ul>
          </div>

          <div className={`bg-black text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-2xl">
                🏢
              </div>
              <h3>Корпоративно</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Обучим ваших сотрудников работе с системами, процессами, ИИ и инструментами управления
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  Адаптация программ под вашу специфику
                </p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  Практические кейсы из вашего бизнеса
                </p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  Сопровождение после обучения
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Посмотреть программы
          </a>
        </div>
      </div>
    </section>
  );
}
