'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BusinessCheckupProps {
  onOpenDiagnostic: () => void;
}

export function BusinessCheckup({ onOpenDiagnostic }: BusinessCheckupProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [showResult, setShowResult] = useState(false);
  const [pulseButton, setPulseButton] = useState(false);



  const problems = [
    { id: 1, text: 'Непредсказуемая прибыль из месяца в месяц', emoji: '📉' },
    { id: 2, text: 'Вы не знаете точные цифры своего бизнеса', emoji: '🤷' },
    { id: 3, text: 'Клиенты приходят нестабильно', emoji: '🎲' },
    { id: 4, text: 'Команда работает неэффективно', emoji: '😴' },
    { id: 5, text: 'Нет четких процессов и регламентов', emoji: '🌀' },
    { id: 6, text: 'Вы работаете 24/7, бизнес "на вас"', emoji: '🔥' },
    { id: 7, text: 'Нет системы аналитики и отчетности', emoji: '📊' },
    { id: 8, text: 'Высокая текучка кадров', emoji: '🚪' },
    { id: 9, text: 'Не понимаете, какой канал маркетинга работает', emoji: '🎯' },
    { id: 10, text: 'Постоянно "тушите пожары"', emoji: '🚒' },
    { id: 11, text: 'Нет времени на стратегию и развитие', emoji: '⏰' },
    { id: 12, text: 'Выгорание и усталость от бизнеса', emoji: '😫' },
  ];

  const handleCheck = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
    setShowResult(newChecked.size > 0);
  };

  const count = checkedItems.size;
  const percentage = (count / problems.length) * 100;

  // Определяем уровень критичности
  const getSeverityLevel = () => {
    if (count === 0) return { level: 'none', color: '#9CA3AF', label: 'Не выбрано' };
    if (count <= 2) return { level: 'mild', color: '#10B981', label: 'Легкий дискомфорт' };
    if (count <= 5) return { level: 'moderate', color: '#F59E0B', label: 'Требуется внимание' };
    if (count <= 8) return { level: 'serious', color: '#F97316', label: 'Серьезные симптомы' };
    return { level: 'critical', color: '#EF4444', label: 'Критическое состояние' };
  };

  const getDiagnosis = () => {
    if (count === 0) return null;
    if (count <= 2) {
      return {
        title: '✅ Состояние стабильное',
        text: 'У вас всё неплохо, но есть зоны роста. Диагностика поможет выйти на новый уровень.',
        urgency: 'low',
        cta: 'Узнать точки роста'
      };
    }
    if (count <= 5) {
      return {
        title: '⚠️ Требуется консультация',
        text: 'Обнаружены несколько проблемных зон. Рекомендуем провести диагностику, чтобы не допустить осложнений.',
        urgency: 'medium',
        cta: 'Записаться на диагностику'
      };
    }
    if (count <= 8) {
      return {
        title: '🚨 СРОЧНО требуется помощь!',
        text: 'Ваш бизнес показывает серьезные симптомы. Без вмешательства ситуация будет ухудшаться!',
        urgency: 'high',
        cta: 'СРОЧНО записаться'
      };
    }
    return {
      title: '🆘 КРИТИЧЕСКОЕ состояние!',
      text: 'Ваш бизнес находится в зоне риска! Без немедленных изменений бизнес может не выжить. Действуйте СЕЙЧАС!',
      urgency: 'critical',
      cta: 'СПАСТИ БИЗНЕС СЕЙЧАС!'
    };
  };

  const severity = getSeverityLevel();
  const diagnosis = getDiagnosis();

  // Пульсация кнопки при критическом состоянии
  useEffect(() => {
    if (count >= 9) {
      setPulseButton(true);
    } else {
      setPulseButton(false);
    }
  }, [count]);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#2ba546' }}>
                👨‍⚕️ Бизнес-диагностика
              </p>
              <h2 className="font-futura text-3xl md:text-4xl mb-4">
                Как понять, что вам тоже нужно к нам?
              </h2>
              <p className="text-gray-600 text-lg">
                Отметьте проблемы, которые есть в вашем бизнесе, и получите рекомендацию
              </p>
            </motion.div>
          </div>

          {/* Прогресс бар */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 bg-white rounded-2xl p-6 shadow-lg border-2"
            style={{ borderColor: severity.color }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Уровень проблем:</span>
              <span className="font-bold" style={{ color: severity.color }}>
                {severity.label}
              </span>
            </div>
            
            {/* Анимированный прогресс бар */}
            <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full relative"
                style={{ backgroundColor: severity.color, overflow: 'hidden' }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Анимированный блик - только внутри заполненной части */}
                {percentage > 0 && (
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ left: '-64px' }}
                      animate={{ left: '100%' }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                )}
              </motion.div>
              
              {/* Счетчик */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-white mix-blend-difference">
                  {count} из {problems.length}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Сетка с проблемами */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {problems.map((problem, index) => {
              const isChecked = checkedItems.has(problem.id);
              return (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <label
                    className={`
                      relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 group
                      ${isChecked 
                        ? 'bg-gradient-to-br from-red-50 to-orange-50 border-2 shadow-lg scale-[1.02]' 
                        : 'bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-md'
                      }
                    `}
                    style={isChecked ? { borderColor: severity.color } : {}}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheck(problem.id)}
                      className="sr-only"
                    />
                    
                    {/* Кастомный чекбокс */}
                    <div className={`
                      relative flex-shrink-0 w-6 h-6 rounded-md border-2 transition-all duration-300
                      ${isChecked 
                        ? 'border-transparent shadow-md' 
                        : 'border-gray-300 group-hover:border-green-400'
                      }
                    `}
                    style={isChecked ? { backgroundColor: severity.color } : {}}
                    >
                      {isChecked && (
                        <motion.svg
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </motion.svg>
                      )}
                    </div>

                    {/* Текст */}
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <span className="text-2xl flex-shrink-0">{problem.emoji}</span>
                        <p className={`transition-colors duration-300 ${
                          isChecked ? 'text-gray-900 font-medium' : 'text-gray-700'
                        }`}>
                          {problem.text}
                        </p>
                      </div>
                    </div>

                    {/* Индикатор выбора */}
                    {isChecked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: severity.color }}
                      >
                        <span className="text-sm font-bold">!</span>
                      </motion.div>
                    )}
                  </label>
                </motion.div>
              );
            })}
          </div>

          {/* Результат и рекомендация */}
          <AnimatePresence>
            {showResult && diagnosis && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl p-8 shadow-2xl border-3"
                style={{ borderColor: severity.color }}
              >
                {/* Иконка врача */}
                <div className="flex items-start gap-6 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: `${severity.color}20` }}
                  >
                    👨‍⚕️
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: severity.color }}
                    >
                      {diagnosis.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {diagnosis.text}
                    </p>
                  </div>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: severity.color }}>
                      {count}
                    </div>
                    <div className="text-sm text-gray-600">проблем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: severity.color }}>
                      {Math.round(percentage)}%
                    </div>
                    <div className="text-sm text-gray-600">критичность</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      60
                    </div>
                    <div className="text-sm text-gray-600">минут до решения</div>
                  </div>
                </div>

                {/* CTA кнопка */}
                <motion.button
                  onClick={onOpenDiagnostic}
                  className={`
                    w-full py-5 rounded-full text-white font-bold text-lg
                    transition-all duration-300 cursor-pointer
                    relative overflow-hidden group
                    ${pulseButton ? 'animate-pulse-strong' : ''}
                  `}
                  style={{ backgroundColor: severity.color }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Блик */}
                  <span className="absolute inset-0 w-full h-full pointer-events-none">
                    <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                  </span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {diagnosis.cta}
                    {count >= 6 && <span className="animate-bounce">→</span>}
                  </span>
                </motion.button>

                {/* Дополнительная мотивация для критических случаев */}
                {count >= 9 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-4 text-red-600 font-bold animate-pulse"
                  >
                    ⚡ Каждый день промедления = потерянная прибыль
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-pulse-strong {
          animation: pulse-strong 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-strong {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
      `}} />
    </section>
  );
}
