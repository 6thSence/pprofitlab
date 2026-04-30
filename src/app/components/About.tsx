import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const achievements = [
  {
    icon: '📈',
    text: '8+ лет в систематизации и масштабировании компаний до 100 млн ₽/мес',
  },
  {
    icon: '🎓',
    text: 'Магистр деловой психологии ВШЭ (2022–2024)',
  },
  {
    icon: '📄',
    text: 'Автор 160+ шаблонов и регламентов',
  },
  {
    icon: '👥',
    text: 'Спикер, ментор и коуч руководителей',
  },
];

export function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-black mb-4">Об основателе</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                alt="Дарья Пушкарская"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div>
              <h3 className="text-black mb-4">Дарья Пушкарская</h3>
              <p className="text-gray-600 mb-6">
                Основатель Profit Lab, трекер стартапов Сколково, спикер курса по бизнес-психологии в НИУ ВШЭ, операционный директор и бизнес-психолог
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                  className={`flex gap-4 items-start p-4 bg-white rounded-lg border border-gray-100 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                    {achievement.icon}
                  </div>
                  <p className="text-gray-700">{achievement.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#cases"
                className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Посмотреть кейсы
              </a>
              <a
                href="#about"
                className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                Узнать о Дарье
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
