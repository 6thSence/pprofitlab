import { GraduationCap, Users, UserCheck, Briefcase, Sparkles } from 'lucide-react';

interface TrainingFormatsProps {
  onOpenDiagnostic?: () => void;
}

export function TrainingFormats({ onOpenDiagnostic }: TrainingFormatsProps = {}) {
  const formats = [
    {
      icon: Users,
      title: 'Корпоративные программы',
      description: 'Обучение для компаний, которым важно усилить команды и выстроить систему управления.',
      topics: 'Управление проектами, систематизация процессов, делегирование, оргструктура, командная эффективность, KPI и финансы, ИИ-инструменты, автоматизация.',
      formats: 'Интенсивы 1–3 дня, модульные программы 2–12 недель, корпоративные акселераторы.',
      accent: '#2ba546'
    },
    {
      icon: Briefcase,
      title: 'Обучение отдела продаж',
      description: 'Развитие отдела продаж под ключ: постановка структуры и воронки, обучение менеджеров, отработка скриптов и возражений, внедрение CRM и отчётности.',
      result: 'Рост конверсий, стабильная выручка, сильные менеджеры продаж.',
      accent: '#34ae15'
    },
    {
      icon: UserCheck,
      title: 'Индивидуальное обучение для собственников и руководителей',
      description: 'Для тех, кто хочет быстро решить задачи бизнеса и усилить управленческие навыки.',
      formats: 'Наставничество 1:1, стратегические сессии, индивидуальная программа «Операционный директор под ключ» (6 недель).',
      accent: '#2db54d'
    },
    {
      icon: Sparkles,
      title: 'ИИ-практикум для бизнеса',
      description: 'Практическая программа по внедрению ИИ в работу руководителя и команды.',
      focus: 'Автоматизация задач, создание ИИ-сотрудников, связка инструментов, перепроектирование процессов через ИИ.',
      result: 'Экономия 20–80% времени и рост эффективности бизнеса за счёт автоматизации.',
      accent: '#34ae15'
    },
    {
      icon: GraduationCap,
      title: 'Подготовка специалистов',
      description: 'Комплексные программы для развития ключевых ролей в вашей команде.',
      programs: [
        { name: 'Бизнес-ассистенты', duration: '4 недели', focus: 'основы делегирования, коммуникация, ИИ-инструменты, отчётность' },
        { name: 'Проектные менеджеры', duration: '5 недель', focus: 'методологии, сроки, риски, управление задачами, ИИ в управлении' },
        { name: 'Операционные директора', duration: '6 месяцев', focus: 'оргструктура, финансы, управление командой, процессы, систематизация, автоматизация, ИИ — флагманское обучение Profit Lab' }
      ],
      accent: '#2ba546',
      fullWidth: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary mb-6">
            Обучение и развитие команд от Profit Lab
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Мы обучаем руководителей, команды и специалистов так, чтобы бизнес рос быстрее, процессы работали стабильнее, 
            а сотрудники выполняли задачи качественно — уже с первой недели.<br/>
            <span className="text-gray-600" style={{ fontSize: '16px' }}>
              Форматы: корпоративные программы, индивидуальное наставничество, подготовка специалистов и обучение отделов.
            </span>
          </p>
        </div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 ${format.fullWidth ? 'md:col-span-2' : ''}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${format.accent}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: format.accent }} />
                  </div>
                  <h3 className="text-gray-900" style={{ fontSize: '22px', lineHeight: '1.3' }}>
                    {format.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {format.description}
                </p>

                {/* Additional Info */}
                {format.topics && (
                  <div className="mb-3">
                    <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <span className="text-primary">Темы:</span> {format.topics}
                    </p>
                  </div>
                )}

                {format.focus && (
                  <div className="mb-3">
                    <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <span className="text-primary">Фокус:</span> {format.focus}
                    </p>
                  </div>
                )}

                {format.programs && (
                  <div className="space-y-3 mb-3">
                    {format.programs.map((program, pIndex) => (
                      <div key={pIndex} className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-900 mb-1" style={{ fontSize: '15px' }}>
                          <span style={{ color: format.accent }}>•</span> <strong>{program.name}</strong> ({program.duration})
                        </p>
                        <p className="text-gray-600 text-sm pl-3">
                          {program.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {format.formats && (
                  <div className="mb-3">
                    <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <span className="text-primary">Форматы:</span> {format.formats}
                    </p>
                  </div>
                )}

                {format.result && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-700" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      <span className="text-primary">→</span> <strong>Результат:</strong> {format.result}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-[#34ae15]/5 rounded-2xl p-10 border border-primary/10">
          <p className="text-gray-800 mb-6" style={{ fontSize: '20px' }}>
            Чтобы узнать, какое обучение вам необходимо:
          </p>
          <button
            onClick={() => onOpenDiagnostic?.()}
            className="bg-primary text-white px-10 py-4 rounded-full hover:bg-[#34ae15] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden group"
            style={{ fontSize: '18px' }}
          >
            <span className="absolute inset-0 w-full h-full pointer-events-none">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
            </span>
            <span className="relative z-10">Запишитесь на диагностику</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
