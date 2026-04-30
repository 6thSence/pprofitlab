import { Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Основной контент футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            
            {/* Логотип и описание */}
            <div>
              <h3 className="font-futura mb-4" style={{ fontSize: '24px', color: '#2ba546' }}>
                Profit Lab
              </h3>
              <p className="text-gray-300" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Агентство полного цикла Дарьи Пушкарской. Комплексные решения для роста вашего бизнеса.
              </p>
            </div>

            {/* Юридическая информация */}
            <div>
              <h4 className="font-futura mb-4" style={{ fontSize: '16px', color: '#2ba546' }}>
                Юридическая информация
              </h4>
              <div className="space-y-2 text-gray-300" style={{ fontSize: '13px' }}>
                <p>ИП Пушкарская Дарья</p>
                <p>ИНН 540143688698</p>
                <p>ОГРНИП 323774600694253</p>
              </div>
            </div>

            {/* Поддержка */}
            <div>
              <h4 className="font-futura mb-4" style={{ fontSize: '16px', color: '#2ba546' }}>
                Остались вопросы?
              </h4>
              <p className="text-gray-300 mb-4" style={{ fontSize: '14px' }}>
                Напишите в нашу поддержку
              </p>
              <a 
                href="https://t.me/assistentdasha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#2ba546' }}
              >
                <Send className="w-5 h-5" />
                <span style={{ fontSize: '14px' }}>Telegram поддержка</span>
              </a>
            </div>

          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400" style={{ fontSize: '13px' }}>
                © {new Date().getFullYear()} Profit Lab. Все права защищены.
              </p>
              <p className="text-gray-400" style={{ fontSize: '13px' }}>
                Разработано с любовью к бизнесу
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
