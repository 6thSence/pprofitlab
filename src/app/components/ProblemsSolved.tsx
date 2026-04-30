import { getPlaceholderImage } from '../utils/placeholder';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ClientCase {
  name: string;
  role: string;
  image: string;
  before: string[];
  after: string[];
}

const clientCases: ClientCase[] = [
  {
    name: 'Дмитрий Щербинин',
    role: 'Сооснователь школы Натали Щербининой',
    image: getPlaceholderImage("Дмитрий"),
    before: [
      'Много вопросов и сомнений, сложности с принятием решений',
      'Нет ясности, куда двигаться и как правильно поступить в сложной ситуации',
      'Высокая нагрузка на мозг: всё приходится продумывать самостоятельно',
      'Накопленные проблемы, эмоциональное напряжение, нет с кем безопасно обсудить',
      'Недостаток структурных инструментов, всё создаётся «с нуля»',
      'Чувство тревоги и отсутствие внутренней опоры',
      'Энергия проседает, сложно держать высокий темп'
    ],
    after: [
      'Появляется уверенность: на любой вопрос есть простое и точное решение',
      'Возникает ощущение ясности: ситуация раскладывается «по полочкам»',
      'Мозг перестаёт перегружаться — решения приходят легко и быстро',
      'Дарья помогает экологично проработать эмоции и выйти в состояние спокойствия',
      'Доступ к огромной базе готовых таблиц, инструментов и систем',
      'Каждый созвон — мощный заряд мотивации, энергии и ясного фокуса',
      'Стоимость работы ощущается как в разы ниже ценности, которую приносит взаимодействие'
    ]
  },
  {
    name: 'Александра Афанасьева',
    role: 'Школа Модного Бизнеса',
    image: getPlaceholderImage("Александра"),
    before: [
      'Не понятной есть структура, непонятно, что в нашем отделе, что кому подчиняется',
      'Хаотический команды результат сотрудники, спасовавшись, не ясно какие ситрудники выполняют какие статистика, как занимаюсь ту должность и та',
      'Большое количества сотрудников, непонятно как и кому делегировали работу',
      'Нет отслеживания ежедневнеа выручки и расхода',
      'Нет папок сотрудников'
    ],
    after: [
      'Определена четкая орг. структура, видны все должности, понятна, кто за какает орг.нужно начать',
      'Определен ЦП каждого сотрудника, можно связать логическое дело, это занимает своё место и выполняют определенные сами ЦП',
      'Определена штатная деятельност, выявлены активности сотрудников и определь, для него назначили должности и сам договор обязан',
      'Сделаны трекер отделов, так закуплено печёт на дисциплина, где проблема, в каком отделе',
      'Ведётся ДДС общих статьей, сделаны журналы, Отслеживается лимензация этих показателей',
      'Создались папки сотрудников, когда находит своего новый сотрудник, он находю свою папку на все их изучения'
    ]
  },
  {
    name: 'Вячеслав Дёмин',
    role: 'Со-владелец школы психологии Ксении Деминой',
    image: getPlaceholderImage("Вячеслав"),
    before: [
      'Нет понимания, как искать и оценивать операционного директора',
      'Сложности с наймом: нет профиля должности, критериев и системы оценки',
      'Команда работает несогласованно, коммуникация «проседает»',
      'Собственник перегружен операционкой и участвует во всём лично',
      'Обратная связь руководителю вызывает сопротивление',
      'Нет системных процессов и прозрачного управления'
    ],
    after: [
      'Создан профиль должности и выстроена система найма',
      'Найден, обучен и успешно внедрён операционный менеджер',
      'Налажена коммуникация между собственником и руководителем',
      'Собственник освобождает время для стратегических задач',
      'Дарья как независимая сторона помогает давать честную обратную связь',
      'Внедрены первые системные процессы, команда работает согласованнее'
    ]
  },
  {
    name: 'Наталья Юрьева',
    role: 'Собственник школы "Живопись маслом"',
    image: getPlaceholderImage("Наталья"),
    before: [
      'Хаотическая систематизация в бизнесе',
      'Мысли в закрытом проекте',
      'Тормозящая коммитка, в которой цифры и таблицы не принятны, но я их очень игнорирую'
    ],
    after: [
      'Все оцифровано',
      'Навели порядок и упешь в ваше таблиц',
      'Посчитали юнит-экономику',
      'Создали CRM для софологичности',
      'Подкрепили, какие КП нужно внедрять, управлять статистиков',
      'Внедрили метод правили других подразделе',
      'Персона управляет бизнесом в управлении без телефона часть бегаю и у подставлений которым умею работать, орган маркетника и делал проект - в результате должны увеличить показатели в 4 раза',
      'Внедрили дашборд с трендами'
    ]
  },
  {
    name: 'Кузнецова Анна',
    role: 'Собственник школы продаж',
    image: getPlaceholderImage("Анна"),
    before: [
      'Собственник давала почевика',
      'Хотела делегировать рутину'
    ],
    after: [
      'В течениях двух недель наняла Продюсета-операционного директора сделали ему навкниях делегирования операционных процессов',
      'Благодаря этому наблюдались ло всех рутинных деятельности собственника',
      'Теперь работает продюсером и своим проекте 1 дать в неделю',
      'Очибровали все процессы',
      'Описали систем работы с каждого сотрудников',
      'Определила ЦП каждого сотрудника',
      'Разработала ПО процессы на 90 % за два месяца обучения при снижении загрузки собственника'
    ]
  },
  {
    name: 'Юлия Евенко',
    role: 'Руководитель, Сеть школ нормального маникюра ногтей и эскиз',
    image: getPlaceholderImage("Юлия"),
    before: [
      'Отсутствие отчетности',
      'Плохое понимание, как это организовать'
    ],
    after: [
      'Систематизировали все данные',
      'Сделали отчеть по направлениям',
      'Сделали понятные, удобный и простые для собственника бизнеса отчети и цифрам'
    ]
  },
  {
    name: 'Елена Шустикова',
    role: 'Собственник школы дизайна',
    image: getPlaceholderImage("Елена"),
    before: [
      'Не понимала организационную структуру'
    ],
    after: [
      'Разложили структуру по ролям',
      'Определили, какие должности еще нужны',
      'Каждого сотрудника определили ЦП',
      'Все моменты довести для команды- что позволило каждому члену команды понять их результат'
    ]
  },
  {
    name: 'Татьяна Николова',
    role: 'Собственник и продюсер школы инвестиций',
    image: getPlaceholderImage("Татьяна"),
    before: [
      'Отсутствие управленческой отчетности',
      'Нет понимание организационной схемы компании'
    ],
    after: [
      'Внедрена система управленческой отчетности',
      'Построена оргсхема компании в МИРО',
      'Составлены манифакты, схемы бизнес-процессов',
      'Снижена времени на поиск ошибок с 5-6 дней',
      'Построена безпроблем четкая система показателей'
    ]
  }
];

export function ProblemsSolved() {
  const [activeStates, setActiveStates] = useState<{ [key: number]: 'before' | 'after' }>(
    clientCases.reduce((acc, _, idx) => ({ ...acc, [idx]: 'before' }), {})
  );
  const [showAll, setShowAll] = useState(false);

  const toggleState = (index: number) => {
    setActiveStates(prev => ({
      ...prev,
      [index]: prev[index] === 'before' ? 'after' : 'before'
    }));
  };

  // На мобилке показываем только первые 3 карточки, если не нажата кнопка "Показать еще"
  const displayedCases = showAll ? clientCases : clientCases;

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок */}
          <div className="mb-12">
            <h2 className="font-futura" style={{ fontSize: '40px', lineHeight: '1.2' }}>
              Проблемы клиентов, которые были решены
            </h2>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCases.map((clientCase, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 border border-gray-200 rounded-large p-6 hover:shadow-card transition-all duration-300 animate-fade-in flex flex-col ${
                  idx >= 3 && !showAll ? 'hidden md:flex' : ''
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Аватар и имя */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <ImageWithFallback 
                      src={clientCase.image}
                      alt={clientCase.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-futura" style={{ fontSize: '16px', color: '#2ba546' }}>
                      {clientCase.name}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {clientCase.role}
                    </div>
                  </div>
                </div>

                {/* Переключатель До/После */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setActiveStates(prev => ({ ...prev, [idx]: 'before' }))}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeStates[idx] === 'before'
                        ? 'bg-white border-2 text-gray-700'
                        : 'bg-transparent border-2 border-gray-300 text-gray-500'
                    }`}
                    style={activeStates[idx] === 'before' ? { borderColor: '#2ba546' } : {}}
                  >
                    До
                  </button>
                  <button
                    onClick={() => setActiveStates(prev => ({ ...prev, [idx]: 'after' }))}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeStates[idx] === 'after'
                        ? 'bg-white border-2 text-gray-700'
                        : 'bg-transparent border-2 border-gray-300 text-gray-500'
                    }`}
                    style={activeStates[idx] === 'after' ? { borderColor: '#2ba546' } : {}}
                  >
                    После
                  </button>
                </div>

                {/* Контент До/После */}
                <div className="flex-1">
                  {activeStates[idx] === 'before' ? (
                    <ul className="space-y-2">
                      {clientCase.before.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-700" style={{ fontSize: '13px' }}>
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2">
                      {clientCase.after.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-700" style={{ fontSize: '13px' }}>
                          <span className="mt-0.5" style={{ color: '#2ba546' }}>•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Показать еще" - только на мобилке */}
          {!showAll && clientCases.length > 3 && (
            <div className="mt-8 text-center md:hidden">
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
    </section>
  );
}