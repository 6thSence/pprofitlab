interface TemplatePopupProps {
  templateId: string;
  onClose: () => void;
}

const templateCategories: Record<string, {
  title: string;
  icon: string;
  templates: Array<{name: string; description: string}>;
}> = {
  finance: {
    title: 'Финансы',
    icon: '💰',
    templates: [
      { name: 'ДДС (движение денежных средств)', description: 'Полный контроль денежных потоков' },
      { name: 'Управленческий баланс', description: 'Активы и пассивы компании' },
      { name: 'Юнит-экономика', description: 'Расчет на единицу продукта' },
      { name: 'План-факт анализ', description: 'Сравнение плановых и фактических показателей' },
      { name: 'Точка безубыточности', description: 'Минимальный объем для окупаемости' },
      { name: 'P&L отчет', description: 'Отчет о прибылях и убытках' },
      { name: 'Дашборд финансовых KPI', description: 'Ключевые финансовые показатели' },
      { name: 'Бюджетирование', description: 'Планирование доходов и расходов' },
    ]
  },
  hr: {
    title: 'HR и команда',
    icon: '👥',
    templates: [
      { name: 'Должностные инструкции', description: 'Полное описание обязанностей' },
      { name: 'Система мотивации', description: 'KPI и бонусная схема' },
      { name: 'План адаптации', description: 'Онбординг новых сотрудников' },
      { name: 'Воронка найма', description: 'От поиска до оффера' },
      { name: 'Матрица компетенций', description: 'Оценка навыков команды' },
      { name: 'План развития сотрудника', description: 'Индивидуальная траектория роста' },
      { name: 'Оргструктура', description: 'Схема подчиненности' },
      { name: 'ЦКП (целевой конечный продукт)', description: 'Результат каждой должности' },
    ]
  },
  marketing: {
    title: 'Маркетинг',
    icon: '📱',
    templates: [
      { name: 'Стратегия продвижения', description: 'План маркетинговых активностей' },
      { name: 'Контент-план', description: 'График публикаций' },
      { name: 'Скрипты продаж', description: 'Готовые сценарии диалогов' },
      { name: 'Воронки конверсии', description: 'Путь клиента к покупке' },
      { name: 'Customer Journey Map', description: 'Карта пути клиента' },
      { name: 'Медиаплан', description: 'Планирование рекламных кампаний' },
      { name: 'Анализ конкурентов', description: 'Сравнительная таблица' },
      { name: 'Калькулятор LTV и CAC', description: 'Экономика привлечения' },
    ]
  },
  processes: {
    title: 'Процессы',
    icon: '⚙️',
    templates: [
      { name: 'Регламенты и SOP', description: 'Стандартные операционные процедуры' },
      { name: 'Бизнес-процессы', description: 'Схемы основных процессов' },
      { name: 'Чек-листы', description: 'Контрольные списки задач' },
      { name: 'Алгоритмы работы', description: 'Пошаговые инструкции' },
      { name: 'Карта процессов', description: 'Визуализация всех процессов' },
      { name: 'Матрица ответственности RACI', description: 'Кто за что отвечает' },
      { name: 'План проектов', description: 'Управление проектами' },
      { name: 'Риск-менеджмент', description: 'Управление рисками' },
    ]
  },
  strategy: {
    title: 'Стратегия',
    icon: '🎯',
    templates: [
      { name: 'Стратегическая сессия', description: 'Шаблон проведения' },
      { name: 'OKR и KPI', description: 'Цели и ключевые результаты' },
      { name: 'Дорожная карта', description: 'План развития на год' },
      { name: 'SWOT-анализ', description: 'Анализ сильных/слабых сторон' },
      { name: 'Видение и миссия', description: 'Формулировка ценностей' },
      { name: 'Конкурентная стратегия', description: 'Позиционирование на рынке' },
      { name: 'Сценарное планирование', description: 'Стратегии на разные сценарии' },
      { name: 'Balanced Scorecard', description: 'Сбалансированная система показателей' },
    ]
  },
  automation: {
    title: 'Автоматизация',
    icon: '🤖',
    templates: [
      { name: 'Интеграции CRM', description: 'Настройка связей систем' },
      { name: 'ИИ-промпты', description: 'Готовые запросы для ChatGPT' },
      { name: 'Автоворонки', description: 'Автоматизация продаж' },
      { name: 'Чат-боты', description: 'Сценарии для ботов' },
      { name: 'Email-автоматизация', description: 'Цепочки писем' },
      { name: 'Автоотчеты', description: 'Настройка автоматической отчетности' },
      { name: 'Интеграции с ИИ', description: 'Подключение AI-инструментов' },
      { name: 'Роботизация процессов', description: 'RPA для рутины' },
    ]
  },
};

export function TemplatePopup({ templateId, onClose }: TemplatePopupProps) {
  const category = templateCategories[templateId];

  if (!category) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-large shadow-popup animate-scale-in my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Заголовок */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-5xl">{category.icon}</div>
            <div>
              <h2 className="font-futura text-3xl text-gray-900">
                {category.title}
              </h2>
              <p className="text-gray-600 mt-1">
                {category.templates.length} готовых шаблонов
              </p>
            </div>
          </div>
        </div>

        {/* Список шаблонов */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.templates.map((template, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50 border border-gray-200 rounded-large hover:border-primary hover:bg-white transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-futura text-lg text-gray-900 mb-1">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {template.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Футер */}
        <div className="p-8 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="font-futura text-xl text-gray-900 mb-1">
                Получите все шаблоны
              </div>
              <div className="text-gray-600 text-sm">
                При покупке любого тарифа обучения
              </div>
            </div>
            <button className="px-8 py-4 bg-primary text-white rounded-full font-futura font-medium text-lg hover:bg-primary-hover transition-all duration-300 shadow-green whitespace-nowrap cursor-pointer">
              Получить доступ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
