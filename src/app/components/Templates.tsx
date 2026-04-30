import { ImageWithFallback } from './figma/ImageWithFallback';
import templatesImage from 'figma:asset/6714959f3bfc0f9fa60bdddfb4822473f7e1cc2b.png';

interface TemplatesProps {
  onOpenPopup: (id: string) => void;
}

const categories = [
  {
    id: 'finance',
    title: 'Финансы',
    count: 28,
    icon: '💰',
    templates: [
      'ДДС (движение денежных средств)',
      'Управленческий баланс',
      'Юнит-экономика',
      'План-факт анализ'
    ]
  },
  {
    id: 'hr',
    title: 'HR и команда',
    count: 35,
    icon: '👥',
    templates: [
      'Должностные инструкции',
      'Система мотивации',
      'План адаптации',
      'Воронка найма'
    ]
  },
  {
    id: 'marketing',
    title: 'Маркетинг',
    count: 42,
    icon: '📱',
    templates: [
      'Стратегия продвижения',
      'Контент-план',
      'Скрипты продаж',
      'Воронки конверсии'
    ]
  },
  {
    id: 'processes',
    title: 'Процессы',
    count: 31,
    icon: '⚙️',
    templates: [
      'Регламенты и SOP',
      'Бизнес-процессы',
      'Чек-листы',
      'Алгоритмы работы'
    ]
  },
  {
    id: 'strategy',
    title: 'Стратегия',
    count: 18,
    icon: '🎯',
    templates: [
      'Стратегическая сессия',
      'OKR и KPI',
      'Дорожная карта',
      'SWOT-анализ'
    ]
  },
  {
    id: 'automation',
    title: 'Автоматизация',
    count: 8,
    icon: '🤖',
    templates: [
      'Интеграции CRM',
      'ИИ-промпты',
      'Автоворонки',
      'Чат-боты'
    ]
  },
];

export function Templates({ onOpenPopup }: TemplatesProps) {
  return (
    <section id="templates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
            
            {/* Мобильная версия - сначала картинка */}
            <div className="lg:hidden flex items-center justify-center order-1">
              <ImageWithFallback 
                src={templatesImage}
                alt="162 шаблона для систематизации работы отделов"
                className="w-full animate-fade-in"
                style={{ animation: 'float-gentle 6s ease-in-out infinite', transform: 'scale(1.5)' }}
              />
            </div>

            {/* Текст и кнопка */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="font-futura mb-2" style={{ fontSize: '40px', lineHeight: '1.1', color: '#2ba546' }}>
                  Готовая база шаблонов и инструментов для вашего бизнеса
                </h2>
                <p className="text-gray-600" style={{ fontSize: '15px' }}>
                  Собрана за 10+ лет и опробована на десятках проектов. Внедрим в ваш бизнес готовые решения, которые реально работают.
                </p>
              </div>

              {/* Кнопка */}
              <div>
                <a 
                  href="https://dasha-system.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                  style={{ 
                    backgroundColor: '#2ba546',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '500'
                  }}
                >
                  Скачать и внедрить прямо сейчас 
                </a>
              </div>
            </div>

            {/* Десктопная версия - картинка справа */}
            <div className="hidden lg:flex items-center justify-center lg:justify-end order-3 lg:order-2">
              <ImageWithFallback 
                src={templatesImage}
                alt="162 шаблона для систематизации работы отделов"
                className="w-full animate-fade-in"
                style={{ animation: 'float-gentle 6s ease-in-out infinite', transform: 'scale(1.5)' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}