interface ProblemsProps {
  onOpenVideo: (id: string) => void;
}

const cases = [
  {
    id: 'video1',
    name: 'Наталья Юрьева',
    company: 'Собственник школы "Живопись маслом"',
    avatar: '👩‍🎨',
    image: 'https://static.tildacdn.com/tild3231-3033-4962-b838-393362316162/1.png',
    before: [
      'Отсутствие систематизации в бизнесе',
      'Мысли о закрытии проекта',
      'Творческая компания без цифр и табличек'
    ],
    after: [
      'Все оцифровали и систематизировали',
      'Внедрили отчетность в виде таблиц',
      'Посчитали юнит-экономику',
      'Определили точку безубыточности',
      'Внедрили KPI для сотрудников',
      'Выделили 2 ключевых показателя',
      'Должны увеличить показатели в 4 раза',
      'Внедрили дашборд с трендами'
    ]
  },
  {
    id: 'video2',
    name: 'Диана Якушева',
    company: 'Руководитель отдела маркетинга в школе "Живопись маслом"',
    avatar: '👩‍💼',
    image: 'https://static.tildacdn.com/tild3865-6634-4764-b761-366332613330/2.png',
    before: [],
    after: []
  },
  {
    id: 'video3',
    name: 'Юлия Евенко',
    company: 'Cобственник онлайн и офлайн школ перманентного макияжа',
    avatar: '💄',
    image: 'https://static.tildacdn.com/tild6430-3938-4938-b465-306366353461/3.png',
    before: [
      'Отсутствие отчетности',
      'Плохое понимание организации процессов'
    ],
    after: [
      'Систематизировали все данные',
      'Разделили отчеты по направлениям',
      'Сделали понятные отчеты в цифрах'
    ]
  },
  {
    id: 'video4',
    name: 'Анна Кузнецова',
    company: 'Cобственник школы по продажам "Кузница продаж"',
    avatar: '👩‍🏫',
    image: 'https://static.tildacdn.com/tild3936-6135-4437-b562-353833396339/4.png',
    before: [
      'В бизнесе не хватало порядка',
      'Хотела делегировать рутину'
    ],
    after: [
      'Наняла операционного директора за 2 недели',
      'Делегировала операционные процессы за неделю',
      'Избавилась от всех рутинных задач',
      'Работает продюсером 1 день в неделю',
      'Оцифровали все процессы',
      'Выставили метрики для каждого сотрудника',
      'Прописали ЦКП каждого сотрудника',
      'Выручка выросла на 50% за 2 месяца'
    ]
  },
  {
    id: 'video5',
    name: 'Татьяна Николова',
    company: 'Cобственник и продюсер школы инвестиций',
    avatar: '👩‍💻',
    image: 'https://static.tildacdn.com/tild6132-6664-4135-a434-323563323638/5.png',
    before: [
      'Отсутствие управленческой отчетности',
      'Нет понимания оргсхемы компании'
    ],
    after: [
      'Внедрена система управленческой отчетности',
      'Построена оргсхема компании в MIRO',
      'Составлены майнд-карты и схемы процессов',
      'Снижение времени поиска ошибок с 5-6 дней до 8-12 часов'
    ]
  },
  {
    id: 'video6',
    name: 'Елена Шустикова',
    company: 'Cобственник школы дизайна',
    avatar: '🎨',
    image: 'https://static.tildacdn.com/tild6165-3035-4532-b439-366631623763/6.png',
    before: [
      'Не понимала организационную структуру'
    ],
    after: [
      'Разложили структуру по ролям',
      'Определили нужные должности',
      'Для каждого сотрудника определили ЦКП',
      'Команда поняла как влиять на результат'
    ]
  },
];

export function Problems({ onOpenVideo }: ProblemsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-futura text-4xl md:text-5xl mb-4">
            Видео-отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные истории трансформации бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseItem, idx) => (
            <div
              key={caseItem.id}
              className="bg-white border border-gray-200 rounded-large overflow-hidden hover:shadow-card hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Фото и кнопка Play */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback если изображение не загрузится
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                {/* Play кнопка по центру */}
                <button
                  onClick={() => onOpenVideo(caseItem.id)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-all duration-300 hover:scale-110 shadow-green cursor-pointer"
                >
                  <span className="text-4xl ml-2">▶</span>
                </button>
              </div>

              {/* Информация */}
              <div className="p-6">
                <h3 className="font-futura text-xl font-bold text-gray-900 mb-2">
                  {caseItem.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {caseItem.company}
                </p>

                {/* До и После только если есть данные */}
                {(caseItem.before.length > 0 || caseItem.after.length > 0) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {caseItem.before.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs font-medium text-gray-500 mb-2">До:</div>
                        <ul className="space-y-1">
                          {caseItem.before.slice(0, 2).map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {caseItem.after.length > 0 && (
                      <div>
                        <div className="text-xs font-medium text-primary mb-2">После:</div>
                        <ul className="space-y-1">
                          {caseItem.after.slice(0, 2).map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
