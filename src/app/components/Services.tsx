import { useState, useEffect, useRef } from 'react';

const services = [
  {
    icon: '🔍',
    title: 'Диагностика',
    description: 'Анализ системы, финансов, команды',
    result: 'План внедрения с приоритетами',
  },
  {
    icon: '⚙️',
    title: 'Систематизация и управление',
    description: 'Оргструктура, KPI, дашборды',
    result: 'Прозрачная управляемая система',
  },
  {
    icon: '📢',
    title: 'Маркетинг и продвижение',
    description: 'Аудит, стратегия, SMM, трафик',
    result: 'Стабильный поток клиентов',
  },
  {
    icon: '👥',
    title: 'HR и команда',
    description: 'Подбор, адаптация, мотивация, оценка',
    result: 'Сильная вовлечённая команда',
  },
  {
    icon: '🤖',
    title: 'Техническая реализация и ИИ',
    description: 'CRM, воронки, боты, n8n, Make, Zapier',
    result: 'Автоматизация рутинных процессов',
  },
  {
    icon: '🧠',
    title: 'Бизнес-психология и лидерство',
    description: 'Коучинг, развитие руководителей, анти-выгорание',
    result: 'Осознанное управление без выгорания',
  },
];

export function Services() {
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-black mb-4">Направления работы</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к развитию бизнеса — от диагностики до внедрения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-yellow-600 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl">
                {service.icon}
              </div>

              <h3 className="text-black mb-3">{service.title}</h3>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-600">
                <p className="text-sm text-gray-700">
                  <span className="text-yellow-600">Результат:</span> {service.result}
                </p>
              </div>

              <button className="flex items-center gap-2 text-yellow-600 hover:gap-3 transition-all duration-300 cursor-pointer">
                Подробнее →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
