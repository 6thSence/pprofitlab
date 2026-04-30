import { Users, TrendingUp, Target, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface AudienceSegment {
  icon: typeof Users;
  title: string;
  description: string;
  pains: string[];
  color: string;
}

const audienceSegments: AudienceSegment[] = [
  {
    icon: Building2,
    title: 'Собственники онлайн-школ',
    description: 'Выручка от 1 млн рублей в месяц',
    pains: [
      'Хаос в финансах — непонятно, куда уходят деньги',
      'Перегружены операционкой, нет времени на развитие',
      'Команда работает несогласованно, процессы не выстроены'
    ],
    color: '#2ba546'
  },
  {
    icon: TrendingUp,
    title: 'Собственники бизнеса с запросом на рост',
    description: 'Готовы инвестировать в систематизацию',
    pains: [
      'Достигли потолка, бизнес не растет дальше',
      'Собственник — узкое горлышко во всех процессах',
      'Нет понимания, какие показатели отслеживать для роста'
    ],
    color: '#34ae15'
  },
  {
    icon: Target,
    title: 'Операционные директора',
    description: 'Нужна поддержка в выстраивании систем',
    pains: [
      'Нет готовых инструментов и шаблонов для работы',
      'Сложно внедрять изменения без сопротивления команды',
      'Один в поле воин — вся ответственность на мне'
    ],
    color: '#2db54d'
  },
  {
    icon: Users,
    title: 'Продюсеры инфобизнеса',
    description: 'Запускают и ведут образовательные проекты',
    pains: [
      'Хаотичное управление несколькими проектами одновременно',
      'Нет системы контроля качества и дедлайнов',
      'Выгорание из-за постоянных авралов и переработок'
    ],
    color: '#2ba546'
  },
  {
    icon: Briefcase,
    title: 'Руководители отделов',
    description: 'РОПы, маркетологи, руководители продаж',
    pains: [
      'Нет четких KPI и критериев оценки работы отдела',
      'Команда не понимает целей и работает вразнобой',
      'Не хватает инструментов для эффективного управления'
    ],
    color: '#34ae15'
  },
  {
    icon: GraduationCap,
    title: 'Эксперты, создающие свою школу',
    description: 'Переход от личного бренда к бизнесу',
    pains: [
      'Не понимаю, с чего начать построение бизнес-структуры',
      'Хочу делегировать, но боюсь потерять контроль',
      'Непонятно, как считать финансы и планировать рост'
    ],
    color: '#2db54d'
  }
];

interface TargetAudienceProps {
  onOpenDiagnostic?: () => void;
}

export function TargetAudience({ onOpenDiagnostic }: TargetAudienceProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Фоновая анимация - график с градиентом */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Градиент для линии - зеленые оттенки */}
          <linearGradient id="lineGradientTA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34ae15" />
            <stop offset="50%" stopColor="#2ba546" />
            <stop offset="100%" stopColor="#2db54d" />
          </linearGradient>
          
          {/* Градиент для заливки */}
          <linearGradient id="fillGradientTA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34ae15" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#2ba546" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2db54d" stopOpacity="0.08" />
          </linearGradient>
          
          {/* Маска для анимации выезжания слева направо */}
          <clipPath id="revealClipTA">
            <rect 
              x="0" 
              y="0" 
              width={isVisible ? "1000" : "0"} 
              height="600"
              style={{
                transition: 'width 1.2s ease-out'
              }}
            />
          </clipPath>
        </defs>
        
        {/* Заливка вниз от линии */}
        <path
          d="M 0,400 Q 250,380 500,250 T 1000,150 L 1000,600 L 0,600 Z"
          fill="url(#fillGradientTA)"
          clipPath="url(#revealClipTA)"
        />
        
        {/* Линия графика */}
        <path
          d="M 0,400 Q 250,380 500,250 T 1000,150"
          fill="none"
          stroke="url(#lineGradientTA)"
          strokeWidth="3"
          strokeLinecap="round"
          clipPath="url(#revealClipTA)"
        />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-futura mb-4" style={{ fontSize: '40px', lineHeight: '1.2' }}>
              Кто к нам обращается?
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '16px' }}>
              Мы помогаем собственникам и руководителям онлайн-бизнеса навести порядок и масштабироваться
            </p>
          </div>

          {/* Сетка сегментов ЦА */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {audienceSegments.map((segment, idx) => {
              const Icon = segment.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Иконка */}
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${segment.color}15` }}
                  >
                    <Icon 
                      style={{ 
                        width: '22px', 
                        height: '22px', 
                        color: segment.color,
                        strokeWidth: 2
                      }} 
                    />
                  </div>

                  {/* Заголовок */}
                  <h3 className="font-futura mb-1" style={{ fontSize: '16px', color: segment.color }}>
                    {segment.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-600 mb-3" style={{ fontSize: '11px' }}>
                    {segment.description}
                  </p>

                  {/* Боли - компактно */}
                  <ul className="space-y-1.5">
                    {segment.pains.map((pain, painIdx) => (
                      <li 
                        key={painIdx} 
                        className="flex items-start gap-1.5 text-gray-700"
                        style={{ fontSize: '12px', lineHeight: '1.4' }}
                      >
                        <span className="mt-0.5 flex-shrink-0" style={{ color: segment.color }}>•</span>
                        <span className="flex-1">{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Призыв к действию - компактно */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 border-2 shadow-lg max-w-3xl mx-auto" style={{ borderColor: '#2ba546' }}>
              <h3 className="font-futura mb-2" style={{ fontSize: '22px', color: '#2ba546' }}>
                Узнали себя?
              </h3>
              <p className="text-gray-700 mb-4 max-w-xl mx-auto" style={{ fontSize: '14px' }}>
                Запишитесь на бесплатную диагностику — разберем вашу ситуацию и найдем точки роста
              </p>
              <button 
                className="px-7 py-2.5 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden group cursor-pointer"
                style={{ fontSize: '14px', backgroundColor: '#2ba546' }}
                onClick={() => onOpenDiagnostic?.()}
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Записаться на диагностику</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}