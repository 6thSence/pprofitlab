import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const colors = [
  'красный', 'синий', 'зелёный', 'жёлтый', 'фиолетовый', 'оранжевый', 
  'розовый', 'бирюзовый', 'лиловый', 'золотой', 'серебряный', 'коралловый',
  'изумрудный', 'сапфировый', 'малиновый', 'индиго', 'бордовый', 'персиковый'
];

const songLyrics = [
  'В небе только и разговоров, что о море и о закате',
  'Я свободен, словно птица в небесах',
  'Ветер перемен так рвёт и мчит',
  'Группа крови на рукаве, мой порядковый номер на рукаве',
  'Звезда по имени Солнце',
  'Перемен требуют наши сердца',
  'А я иду, шагаю по Москве',
  'Миллион алых роз из окна',
  'Белые розы, белые розы, беззащитны шипы',
  'Что такое осень? Это небо, плачущее под ногами',
  'Мы построим новый дом, мы построим новый дом',
  'Я куплю тебе новую жизнь',
  'Последняя осень, последняя осень',
  'Владимирский централ, ветер северный',
  'Ты морячка, я моряк',
  'Летела с небес звезда',
  'Ой мороз, мороз, не морозь меня',
  'Выйду ночью в поле с конём',
  'Катюша на берег выходила',
  'Калинка-малинка моя',
];

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Привет! Я расскажу тебе про цвета и спою песни! 🎵🎨',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomSongLyric = () => {
    return songLyrics[Math.floor(Math.random() * songLyrics.length)];
  };

  const generateRandomResponse = () => {
    const responseTypes = [
      `Мой любимый цвет сегодня — ${getRandomColor()}! 🎨`,
      `${getRandomColor()}, ${getRandomColor()} и ${getRandomColor()} — вот моя радуга!`,
      `🎵 ${getRandomSongLyric()} 🎵`,
      `А знаешь, что ${getRandomColor()} цвет напоминает мне песню: "${getRandomSongLyric()}"`,
      `${getRandomColor()}! Именно ${getRandomColor()}! И ещё раз ${getRandomColor()}!`,
      `Спою тебе: ${getRandomSongLyric()} 🎤`,
      `Представь себе ${getRandomColor()} небо и ${getRandomColor()} море... ${getRandomSongLyric()}`,
      `Цвета дня: ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}! 🌈`,
      `🎶 ${getRandomSongLyric()} 🎶 А цвет этой песни — ${getRandomColor()}!`,
      `${getRandomColor()} + ${getRandomColor()} = ${getRandomColor()}! Магия!`,
    ];
    
    return responseTypes[Math.floor(Math.random() * responseTypes.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // TODO: Заменить на реальный API вызов к вашему бэкенду
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ input_as_text: inputValue }),
      // });
      // const data = await response.json();
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: generateRandomResponse(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `Ой! Что-то пошло не так... Но зато цвет ошибки — ${getRandomColor()}! 😅`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
          🎨
        </div>
        <div>
          <h3 className="text-white">Цвета и Песни Бот</h3>
          <p className="text-xs text-white/80">Онлайн</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-line text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-white/70' : 'text-gray-400'
                }`}
              >
                {message.timestamp.toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напиши что-нибудь..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xl cursor-pointer"
            aria-label="Отправить"
          >
            📤
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Нажми Enter для отправки
        </p>
      </div>
    </div>
  );
}
