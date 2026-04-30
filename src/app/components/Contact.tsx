import { useState, useEffect, useRef } from 'react';

export function Contact() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-black mb-4">Контакты</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Готовы систематизировать и масштабировать ваш бизнес? Свяжитесь с нами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-black mb-6">Получить консультацию</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full pointer-events-none">
                    <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                  </span>
                  <span className="relative z-10">📤</span>
                  <span className="relative z-10">Отправить заявку</span>
                </button>
              </form>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 text-white">
              <h3 className="mb-6">Свяжитесь с нами напрямую</h3>
              
              <div className="space-y-6">
                <a
                  href="https://t.me/DariyaSergeevnaP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Telegram</p>
                    <p>@DariyaSergeevnaP</p>
                  </div>
                </a>

                <a
                  href="mailto:d.pushkarskaya.pr@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Email</p>
                    <p className="break-all">d.pushkarskaya.pr@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h4 className="text-black mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 text-xl cursor-pointer"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 text-xl cursor-pointer"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 text-xl cursor-pointer"
                >
                  💬
                </a>
              </div>
            </div>

            <div className="bg-black rounded-2xl p-8 text-white">
              <h4 className="mb-4">Готовы начать?</h4>
              <p className="text-gray-300 mb-6">
                Пройдите бесплатную диагностику бизнеса и получите план развития
              </p>
              <button 
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                onClick={() => window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank')}
              >
                <span className="absolute inset-0 w-full h-full pointer-events-none">
                  <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
                </span>
                <span className="relative z-10">Пройти диагностику</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t border-gray-200 text-center transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-gray-600">
            © 2025 Profit Lab. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
}
