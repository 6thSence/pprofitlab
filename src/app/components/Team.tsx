import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import marinaPhoto from 'figma:asset/6b718ad9ad025efc053843adc6391600e9a1c674.png';
import nikitaPhoto from 'figma:asset/c41f42c581403ab70b6efb251d90aab2fe6ca9f7.png';
import annaKoloyarovaPhoto from 'figma:asset/1871f236b0b51b77464451d981d01343eb0a75da.png';
import dianaPhoto from 'figma:asset/538e28fcd8760443db795f17f4966c8e9bb2380e.png';
import evgeniaPhoto from 'figma:asset/bf1bf8308c5f6856c93a7de55e278e717ffcdf51.png';
import nataliaPhoto from 'figma:asset/5105ed9d24f6303fe9996151770572b3aa912992.png';
import kseniaPhoto from 'figma:asset/5c532552ed52140be499ebfef12174e72e639ce9.png';
import marinaGolubnichayaPhoto from 'figma:asset/3e6ea5758b70bb83998f1bcbb66e3b40494b6410.png';

const teamMembers = [
  {
    name: 'Марина Рябова',
    position: 'Финансовый директор',
    image: marinaPhoto,
    description: 'Эксперт по управленческому учету, финансовому моделированию и стратегическому управлению финансами',
    experience: '20+ лет опыта',
    achievements: [
      'Внедрение и автоматизация управленческого учета',
      'Моделирование финансовых сценариев для принятия решений',
      'Разработка антикризисных стратегий и вывод компаний из убытков',
      'Оптимизация налогообложения и повышение прозрачности финансов',
      'Формирование финансовой структуры и контроль ключевых показателей эффективности (KPI)',
      'Настройка процессов планирования, бюджетирования и контроля'
    ]
  },
  {
    name: 'Анна Колоярова',
    position: 'Операционный директор',
    image: annaKoloyarovaPhoto,
    description: 'Эксперт по аналитике бизнес-процессов и построению эффективных кросс-функциональных команд в международных проектах',
    experience: 'MBA Операционное управление',
    achievements: [
      'Системное видение: от стратегии и продуктового запуска до операционного исполнения',
      'Строю управляемые команды и процессы "под рост"',
      'Аналитика и оптимизация бизнес-процессов для масштабирования',
      'Построение кросс-функциональных команд в международных проектах',
      'Разработка стратегии операционного развития и её внедрение'
    ]
  },
  {
    name: 'Никита Дик',
    position: 'Операционный директор / Эксперт по бизнес-автоматизации и AI-решениям',
    image: nikitaPhoto,
    description: 'Специалист по систематизации процессов, финансовому учёту и созданию умных управленческих систем на базе нейросетей и автоматизаций',
    experience: '8+ лет опыта',
    achievements: [
      'Снижение операционных расходов до 30% за счёт оптимизации процессов и автоматизации рутины',
      'Разработка AI-ассистентов для команд (Telegram-боты, умные базы знаний, рабочие помощники)',
      'Внедрение нейросетей на основе AI и n8n в операционку: анализ данных, автопроцессы, принятие решений',
      'Настройка и кастомизация AmoCRM, РитейлCRM, МойСклад, 1С УНФ',
      'Создание управленческой отчётности и финансовых моделей'
    ]
  },
  {
    name: 'Диана Багдасарян',
    position: 'Юрист-практик в digital-среде',
    image: dianaPhoto,
    description: 'Эксперт по цифровому праву с фокусом на инфлюенс-маркетинг, онлайн-бизнес и интеллектуальную собственность',
    experience: '6+ лет юридической практики в digital',
    achievements: [
      'Архитектор правовой устойчивости онлайн-проектов',
      'Эксперт в сопровождении инфлюенсеров, агентств и образовательных платформ',
      'Выстроила юридическую защиту для десятков digital-проектов',
      'Создание внутренних регламентов, сопровождение рекламных интеграций',
      'Специализация: ФАС, маркировка, интеллектуальные права, договоры с блогерами, юридический due diligence'
    ]
  },
  {
    name: 'Ксения Куликова',
    position: 'Руководитель направления бизнес-ассистентов',
    image: kseniaPhoto,
    description: 'Эксперт по подбору, обучению и сопровождению ассистентов для предпринимателей. Превращает новичков в самостоятельных, ценных специалистов',
    experience: '3+ года опыта в управлении командой ассистентов',
    achievements: [
      'Руководит направлением: курирует обучение ассистентов, создаёт программы и методики',
      'Подбирает ассистентов под конкретные задачи и стиль предпринимателя',
      'Настраивает процесс адаптации: от онбординга до выхода на результат',
      'Сопровождает обе стороны на этапе встраивания в команду',
      'Помогает собственникам освободить время и сосредоточиться на стратегии, делегируя операционку'
    ]
  },
  {
    name: 'Наталья Панфилова',
    position: 'Технический директор',
    image: nataliaPhoto,
    description: 'Эксперт по автоматизации, CRM-системам и технической сборке digital-проектов. Собирает из хаоса стройную систему, которая работает без сбоев',
    experience: '7+ лет опыта в техническом управлении',
    achievements: [
      'Внедряет CRM под ключ: от стратегии до настроек и обучения команды',
      'Настраивает автоворонки, квизы, оплату, чат-ботов, интеграции, сквозную аналитику',
      'Работает с Bitrix24, amoCRM, Tilda, GetCourse, YClients, LPTracker, Notion, Airtable, n8n, Albato, Zapier',
      'Выстраивает структуру и процессы инфосистем «на вырост»',
      'Помогает продюсерам, блогерам, онлайн-школам запускать системы, а не просто лендинги'
    ]
  },
  {
    name: 'Евгения Фармани',
    position: 'Дизайнер сайтов и визуала',
    image: evgeniaPhoto,
    description: 'Эксперт по digital-дизайну с акцентом на маркетинговую эффективность. Работает с крупными блогерами и экспертами',
    experience: '5+ лет опыта в веб-дизайне',
    achievements: [
      'Сильные продающие маркетинговые материалы, которые действительно конвертят',
      'Упаковка личных брендов, онлайн-школ, блогеров и digital-продуктов',
      'Продуманные лендинги, сайты, презентации, обложки, гайды и визуальные воронки',
      'Владение инструментами ИИ: создание нейрофотосессий, генеративный визуал',
      'Опыт оформления запусков, автоворонок, бесплатников и вебинаров с вовлекающим визуалом'
    ]
  },
  {
    name: 'Голубничая Марина',
    position: 'Специалист по трафику (ТГ, Ютуб, ВК)',
    image: marinaGolubnichayaPhoto,
    description: 'Эксперт по привлечению трафика и продвижению в социальных сетях с фокусом на рост узнаваемости и продаж',
    experience: '6+ лет опыта',
    achievements: [
      'Рост узнаваемости и продаж бренда через стратегическую работу с трафиком',
      'Понятные простые таблицы, структурность и еженедельные отчеты',
      'Работа с любыми бюджетами: от стартапов до крупных проектов',
      'Комплексное продвижение в Telegram, YouTube и ВКонтакте',
      'Настройка таргетированной рекламы и аналитика эффективности кампаний'
    ]
  }
];

export function Team() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
        
          {/* Заголовок */}
          <div className="mb-12">
            <h2 className="font-futura mb-4" style={{ fontSize: '40px', lineHeight: '1.2' }}>
              Команда, которая усилит ваш бизнес
            </h2>
            <p className="text-gray-600 max-w-3xl" style={{ fontSize: '16px' }}>
              Мы собираем под каждую задачу проверенных экспертов из собственной базы из 50+ партнёров и специалистов — чтобы дать вашему проекту максимальный результат.
            </p>
          </div>

          {/* Сетка команды */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`group relative bg-white overflow-hidden cursor-pointer animate-fade-in transition-all duration-300 ${
                  idx >= 2 && !showAll ? 'hidden md:block' : ''
                }`}
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  aspectRatio: '3/4',
                  borderRadius: '20px',
                  border: '3px solid #e5e7eb'
                }}
              >
                {/* Фото на фоне */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }}
                  />
                  {/* Легкий градиент снизу */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Белая плашка внизу с именем */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-5 transition-all duration-300">
                  <h3 className="font-futura text-gray-900" style={{ fontSize: '18px' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-500" style={{ fontSize: '13px' }}>
                    {member.position}
                  </p>
                </div>

                {/* Overlay с полной информацией при hover */}
                <div className="absolute inset-0 bg-white/97 backdrop-blur-sm p-5 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[17px] overflow-y-auto">
                  <div>
                    <h3 className="font-futura mb-1.5" style={{ fontSize: '20px', color: '#2ba546' }}>
                      {member.name}
                    </h3>
                    <p className="font-medium text-gray-700 mb-3" style={{ fontSize: '13px' }}>
                      {member.position}
                    </p>
                    
                    <p className="text-gray-600 mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      {member.description}
                    </p>

                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: '#e8f5e9', color: '#2ba546' }}>
                      {member.experience}
                    </div>

                    <div className="space-y-1.5">
                      {member.achievements.slice(0, 4).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#2ba546' }}></div>
                          <span className="text-[11px] text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}

            {/* Блок с цифрой "более 30" */}
            <div
              className="relative bg-white overflow-hidden flex items-center justify-center animate-fade-in"
              style={{ 
                animationDelay: `${teamMembers.length * 0.1}s`,
                aspectRatio: '3/4',
                borderRadius: '20px',
                border: '3px solid #e5e7eb',
                backgroundColor: '#f9fafb'
              }}
            >
              <div className="text-center px-6">
                <div className="font-futura mb-4" style={{ fontSize: '80px', lineHeight: '1', color: '#2ba546' }}>
                  50+
                </div>
                <p className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.4' }}>
                  проверенных специалистов и экспертов
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка "Показать еще" - только на мобилке */}
          {!showAll && teamMembers.length > 2 && (
            <div className="text-center md:hidden">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                Показать еще
              </button>
            </div>
          )}

        </div>
      </div>

      <style>{`
        .group:hover {
          border-color: #2ba546 !important;
        }
        .group:hover img {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  );
}