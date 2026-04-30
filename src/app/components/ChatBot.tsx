import { useState, useEffect } from 'react';

const colors = [
  'красный', 'синий', 'зеленый', 'желтый', 'фиолетовый', 'оранжевый', 
  'розовый', 'голубой', 'бирюзовый', 'золотой'
];

const quotes = [
  'А я иду, шагаю по Москве...',
  'Я свободен, словно птица в небесах...',
  'Все идет по плану...',
  'Мы будем жить с тобой на берегу...',
  'Прекрасное далёко, не будь ко мне жестоко...',
  'Миллион, миллион, миллион алых роз...',
  'Где-то на белом свете...',
  'В траве сидел кузнечик...',
];

export function ChatBot() {
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([
    { text: 'Привет! Я развлекательный бот 🎨', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Добавляем сообщение пользователя
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Бот отвечает через секунду
    setTimeout(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      const botResponse = Math.random() > 0.5 
        ? `Мой любимый цвет — ${randomColor}! 🌈`
        : `"${randomQuote}" 🎵`;

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-large shadow-card p-6 max-w-md mx-auto lg:mx-0">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-xl">
          🤖
        </div>
        <div>
          <div className="font-futura font-bold text-lg">Развлекательный бот</div>
          <div className="text-sm text-gray-500">Говорю цвета и цитаты</div>
        </div>
      </div>

      {/* Чат */}
      <div className="space-y-3 mb-4 h-64 overflow-y-auto pr-2">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
          >
            <div 
              className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                msg.isBot 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-primary text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Инпут */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Напиши что-нибудь..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary transition-colors"
        />
        <button
          onClick={handleSend}
          className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-300 font-medium cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  );
}
