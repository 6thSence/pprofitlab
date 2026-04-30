import { ImageWithFallback } from './figma/ImageWithFallback';
import daryaPhoto from 'figma:asset/c21177797cf316cbef2e1c1a1b098ef556b3f8c7.png';
import skolkovoLogo from 'figma:asset/2bec1321fc0d1166dbfbac9e7ba66dd6e5e5ca01.png';
import hseLogo from 'figma:asset/dc7ab46378cd7c00f10b06da699bf8ebe9a6477b.png';
import centralUniversityLogo from 'figma:asset/afea57f9943d929bd43b3e8592227f749f4b9f91.png';

export function AboutDarya() {
  const keyRoles = [
    'Ментор стартапов <strong>Сколково</strong>',
    'Лектор <strong>Высшей школы экономики (ВШЭ)</strong>',
    'Ментор технологических проектов в <strong>Центральном университете (Test&Learn)</strong>',
    'Предприниматель, основатель <strong>Profit Lab</strong>',
    'Бизнес-психолог (магистр <strong>ВШЭ</strong>)',
    '<strong>Профайлер</strong>, executive-коуч (<strong>ICF</strong>)',
    'Эксперт по операционному управлению и системному масштабированию бизнеса'
  ];

  const professionalAchievements = [
    '<strong>8+ лет</strong> управленческого опыта на уровне операционного директора',
    'Управляла командами <strong>100+ человек</strong> и операционными контурами в проектах с оборотом <strong>20–100 млн ₽/мес</strong>',
    'Запуск и развитие продуктов с выручкой <strong>80+ млн ₽</strong>',
    'Систематизация компаний за <strong>3–6 месяцев</strong> по авторской технологии <strong>Profit Lab</strong>',
    'Масштабировала собственный бизнес-проект <strong>Web Hero School</strong> (школа программирования) с нуля до оборота <strong>5 млн ₽</strong> и команды более <strong>40 сотрудников</strong>',
    'Реализовала <strong>50+ проектов</strong> по внедрению процессов, оргструктур, регламентов и систем управления',
    'Магистр <strong>ВШЭ</strong> по направлению "Психологии в бизнесе". Диссертация: "Когнитивно-поведенческий коучинг как инструмент улучшения психологического состояния первых лиц компании"'
  ];

  const techExpertise = [
    'Практик <strong>AI-интеграций</strong>: разработка <strong>AI-агентов</strong>, <strong>RAG-систем</strong>, корпоративных баз знаний и внутренних ассистентов',
    'Построение цифровых операционных систем на базе <strong>GPT</strong>, <strong>Notion</strong>, автоматизации и гибридной логики',
    'Сильный технический фундамент: в прошлом опыт работы программистом в <strong>2GIS</strong>, <strong>Mail.ru</strong>, <strong>Tinkoff</strong>'
  ];

  const publicActivity = [
    'Спикер бизнес сообществ и конференций: <strong>«Yuonesis» Татьяны Маричевой</strong>, <strong>«Триллион» Михаила Гребенюка</strong>, <strong>Women in Tech</strong>, <strong>BORTA</strong>, <strong>SEO CLUB</strong> и др.',
    'Провела <strong>20+ стратегических сессий</strong> для крупных компаний, включая команду <strong>Ольги Паратновой</strong>',
    'Гость подкастов <strong>«Психологический анализ бизнеса»</strong>, <strong>«Сделано с нуля»</strong>, <strong>«Просвет»</strong> и др.',
    'Автор программ: <strong>«Операционный директор»</strong>, <strong>«Как создавать регламенты»</strong>, <strong>«ИИ-практикум для бизнеса»</strong>'
  ];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Левая часть - информация */}
            <div className="space-y-4 animate-slide-in-left">
              {/* Мобильный порядок: теги + заголовок + фото */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center px-5 py-2 bg-gray-100 rounded-full text-gray-700 font-medium" style={{ fontSize: '13px' }}>
                  Эксперт уровня C-suite
                </div>
                <div className="inline-flex items-center px-5 py-2 bg-gray-100 rounded-full text-gray-700 font-medium" style={{ fontSize: '13px' }}>
                  Основатель Profit Lab
                </div>
              </div>

              <h2 className="font-futura leading-tight" style={{ fontSize: '40px', color: '#2ba546' }}>
                Дарья Пушкарская
              </h2>

              {/* Фото на мобилке сразу после заголовка */}
              <div className="lg:hidden relative animate-slide-in-right">
                <div className="rounded-large overflow-hidden bg-white">
                  <img 
                    src={daryaPhoto}
                    alt="Дарья Пушкарская"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Ключевые роли */}
              <div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px' }}>
                  Ключевые роли
                </h3>
                <div className="space-y-2">
                  {keyRoles.map((role, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z" fill="#2ba546"/>
                        </svg>
                      </div>
                      <p className="text-gray-700" style={{ fontSize: '13px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: role }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Логотипы партнёров */}
              <div className="pt-2">
                <div className="flex items-center gap-6">
                  <ImageWithFallback 
                    src={skolkovoLogo}
                    alt="Сколково"
                    className="h-10 w-auto object-contain"
                  />
                  <ImageWithFallback 
                    src={hseLogo}
                    alt="Высшая школа экономики"
                    className="h-12 w-auto object-contain"
                  />
                  <ImageWithFallback 
                    src={centralUniversityLogo}
                    alt="Центральный университет"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Профессиональные достижения */}
              <div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px' }}>
                  Профессиональные достижения
                </h3>
                <div className="space-y-2">
                  {professionalAchievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z" fill="#2ba546"/>
                        </svg>
                      </div>
                      <p className="text-gray-700" style={{ fontSize: '13px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: achievement }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Технологическая экспертиза */}
              <div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px' }}>
                  Технологическая экспертиза
                </h3>
                <div className="space-y-2">
                  {techExpertise.map((tech, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z" fill="#2ba546"/>
                        </svg>
                      </div>
                      <p className="text-gray-700" style={{ fontSize: '13px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: tech }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Экспертная и общественная деятельность */}
              <div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px' }}>
                  Экспертная и общественная деятельность
                </h3>
                <div className="space-y-2">
                  {publicActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z" fill="#2ba546"/>
                        </svg>
                      </div>
                      <p className="text-gray-700" style={{ fontSize: '13px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: activity }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка на мобилке в конце всего контента */}
              <div className="lg:hidden">
                <button 
                  onClick={() => window.open('https://t.me/DariyaSergeevnaP', '_blank')}
                  className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full pointer-events-none">
                    <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                  </span>
                  <span className="relative z-10">Задать вопрос Дарье</span>
                </button>
              </div>
            </div>

            {/* Правая часть - фото (только на десктопе) */}
            <div className="hidden lg:block relative animate-slide-in-right lg:sticky lg:top-8">
              <div className="rounded-large overflow-hidden bg-white">
                <img 
                  src={daryaPhoto}
                  alt="Дарья Пушкарская"
                  className="w-full h-auto object-contain"
                />
              </div>
              <button 
                onClick={() => window.open('https://t.me/DariyaSergeevnaP', '_blank')}
                className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Задать вопрос Дарье</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
