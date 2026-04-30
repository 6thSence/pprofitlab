import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cases = [
  {
    company: 'E-commerce проект',
    industry: 'Онлайн-торговля',
    before: '15 млн ₽/мес',
    after: '45 млн ₽/мес',
    growth: '+200%',
    period: '6 месяцев',
    results: [
      'Выстроена система продаж',
      'Автоматизированы процессы',
      'Сформирована команда из 12 человек',
    ],
  },
  {
    company: 'Консалтинговое агентство',
    industry: 'B2B услуги',
    before: '8 млн ₽/мес',
    after: '12 млн ₽/мес',
    growth: '+50%',
    period: '4 месяца',
    results: [
      'Систематизированы процессы',
      'Внедрена CRM',
      'Снижено выгорание руководителя',
    ],
  },
  {
    company: 'Образовательный проект',
    industry: 'EdTech',
    before: '20 млн ₽/мес',
    after: '34 млн ₽/мес',
    growth: '+70%',
    period: '8 месяцев',
    results: [
      'Построена воронка продаж',
      'Запущена HR-система',
      'Автоматизация через ИИ',
    ],
  },
];

const testimonials = [
  {
    name: 'Алексей М.',
    position: 'CEO, E-commerce',
    text: 'Дарья помогла нам выстроить систему, которая работает без моего постоянного участия. Прибыль выросла в 3 раза, а я перестал работать по 14 часов.',
    rating: 5,
  },
  {
    name: 'Елена К.',
    position: 'Основатель, Консалтинг',
    text: 'Впервые за 5 лет я чувствую, что управляю компанией, а не компания управляет мной. Системный подход и психология лидерства — это то, чего не хватало.',
    rating: 5,
  },
  {
    name: 'Дмитрий П.',
    position: 'Директор, EdTech',
    text: 'Profit Lab — это не просто консалтинг. Это реальное партнёрство и погружение в бизнес. Результаты превзошли все ожидания.',
    rating: 5,
  },
];

export function Cases() {
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
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-black mb-4">Кейсы и отзывы</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Реальные результаты клиентов Profit Lab: +30–70 % к прибыли, меньше хаоса, больше свободы
          </p>
        </div>

        {/* Кейсы */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="mb-6">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1460925895917-afdab827c52f' : index === 1 ? '1454165804606-c3d57bc86b40' : '1522202176988-66273c2fd55f'}?w=600&h=400&fit=crop`}
                    alt={caseItem.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-black mb-2">{caseItem.company}</h3>
                <p className="text-sm text-gray-500">{caseItem.industry}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">До</p>
                  <p className="text-gray-800">{caseItem.before}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">После</p>
                  <p className="text-gray-800">{caseItem.after}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg text-white">
                <span className="text-2xl">📈</span>
                <div>
                  <p className="text-sm opacity-90">Рост</p>
                  <p>{caseItem.growth}</p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm opacity-90">Период</p>
                  <p className="text-sm">{caseItem.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {caseItem.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-yellow-600 mt-1">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Отзывы */}
        <div className={`transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-black text-center mb-8">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
                className={`bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-600">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
