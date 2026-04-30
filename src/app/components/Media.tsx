import { useState, useEffect, useRef } from 'react';

const playlists = [
  {
    title: 'Психология бизнеса',
    description: 'Как работать с собой, командой и клиентами',
    videosCount: 24,
  },
  {
    title: 'ИИ для бизнеса',
    description: 'Практические кейсы использования ИИ в бизнесе',
    videosCount: 18,
  },
  {
    title: 'Ошибки в управлении',
    description: 'Разбор типичных ошибок руководителей',
    videosCount: 32,
  },
  {
    title: 'Системное мышление',
    description: 'Как выстраивать системы и процессы',
    videosCount: 21,
  },
];

export function Media() {
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

  return (
    <section id="media" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
            ▶️
          </div>
          <h2 className="text-black mb-4">Медиа и подкасты</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Полезный контент о бизнесе, психологии, ИИ и системном мышлении
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-700 cursor-pointer ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-3xl">
                    ▶️
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-black mb-2">{playlist.title}</h3>
                <p className="text-gray-600 mb-4">{playlist.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-yellow-600">📺</span>
                  <span>{playlist.videosCount} видео</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl">▶️</span>
            Смотреть на YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
