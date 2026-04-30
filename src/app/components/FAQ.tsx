'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Стоимость зависит от масштаба задач и текущего состояния бизнеса. Диагностика бесплатная, по её результатам мы всегда предлагаем несколько вариантов сотрудничества с разными ценовыми диапазонами на выбор — чтобы вы могли подобрать оптимальный формат под свои цели и бюджет.'
    },
    {
      question: 'За какой срок будут первые результаты?',
      answer: 'Уже после диагностики (60 минут) вы получите план развития и поймете свои точки роста. Первые измеримые результаты — через 30-45 дней после начала работы. Прибыль начинает расти в среднем через 2-3 месяца работы.'
    },
    {
      question: 'Подойдет ли мне, если у меня маленький бизнес?',
      answer: 'Мы работаем с бизнесами с годовым оборотом от 10 млн рублей и командой от 3 человек. Но даже если ваш бизнес меньше — приходите на диагностику! Мы определим ваш этап и порекомендуем подходящие решения: обучение от Profit Lab Academy или готовые шаблоны для роста, которые помогут вырасти до уровня, когда мы сможем работать вместе максимально эффективно.'
    },
    {
      question: 'Что если я уже работал с консультантами и не получил результата?',
      answer: 'Это частая ситуация. Наше отличие — мы не просто даем советы, а внедряем системы и работаем до результата. У нас есть собственные проверенные инструменты, шаблоны и методики. Плюс мы фокусируемся на конкретных цифрах и метриках, а не на абстрактных рекомендациях.'
    },
    {
      question: 'Сколько времени мне нужно будет уделять?',
      answer: 'В начале — 4-6 часов в неделю на встречи и внедрение. По мере выстраивания системы — 2-3 часа в неделю. Наша задача — не занять ваше время, а освободить его через делегирование и автоматизацию.'
    },
    {
      question: 'Работаете ли вы с моей нишей?',
      answer: 'Мы работаем с услугами и продуктами в B2B и B2C: от медицинских клиник до IT-компаний, от производства до образования. Если у вас есть команда от 5 человек и стабильные продажи — мы найдем точки роста независимо от ниши.'
    },
    {
      question: 'Как проходит диагностика?',
      answer: 'Это онлайн-встреча 60 минут с нашим операционным директором. Мы разбираем 8 ключевых зон бизнеса: финансы, команду, процессы, маркетинг, продажи и другие. По итогам вы получаете радар-карту вашего бизнеса и план первых шагов для роста.'
    },
    {
      question: 'Даете ли вы гарантии результата?',
      answer: 'Мы гарантируем качество внедрения наших систем и инструментов. Результат зависит от двух сторон — нашей экспертизы (она у нас есть) и вашей готовности внедрять изменения. 98% наших клиентов довольны результатом и продолжают работать с нами.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-futura text-3xl md:text-4xl mb-4">
            Частые вопросы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Собрали ответы на вопросы, которые чаще всего задают перед началом работы
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <button 
            onClick={() => window.open('https://t.me/DariyaSergeevnaP', '_blank')}
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#34ae15] transition-colors shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full pointer-events-none">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
            </span>
            <span className="relative z-10">Задать вопрос про диагностику</span>
          </button>
        </div>
      </div>
    </section>
  );
}