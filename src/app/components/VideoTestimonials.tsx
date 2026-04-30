interface VideoTestimonialsProps {
  onOpenVideo: (id: string) => void;
}

const videos = [
  {
    id: 'youtubevideo7',
    name: 'Виктория Грохотова',
    company: 'Бизнес инженер',
    image: 'https://static.tildacdn.com/tild3461-6237-4331-a531-363938326234/7.png',
  },
  {
    id: 'youtubevideo8',
    name: 'Наталья Иванова',
    company: 'Бизнес инженер',
    image: 'https://static.tildacdn.com/tild3436-3664-4263-b230-363434323761/8.png',
  },
  {
    id: 'youtubevideo9',
    name: 'Татьяна Воронина',
    company: '',
    image: 'https://static.tildacdn.com/tild3864-6433-4330-a339-316339306462/9.png',
  },
  {
    id: 'youtubevideo10',
    name: 'Мурат Танкибайев',
    company: 'Собственник Школы английского языка',
    image: 'https://static.tildacdn.com/tild3237-3436-4535-b036-386631633366/10.png',
  },
];

export function VideoTestimonials({ onOpenVideo }: VideoTestimonialsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-futura text-4xl md:text-5xl mb-4">
            Ещё отзывы клиентов
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
              onClick={() => onOpenVideo(video.id)}
            >
              <div className="bg-white border border-gray-200 rounded-large overflow-hidden hover:shadow-card hover:border-primary transition-all duration-300">
                {/* Фото с play кнопкой */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <img 
                    src={video.image} 
                    alt={video.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Play кнопка */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-green">
                      <span className="text-2xl ml-1">▶</span>
                    </div>
                  </div>
                </div>

                {/* Информация */}
                <div className="p-4">
                  <h3 className="font-futura text-lg font-bold text-gray-900 mb-1">
                    {video.name}
                  </h3>
                  {video.company && (
                    <p className="text-sm text-gray-600">
                      {video.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
