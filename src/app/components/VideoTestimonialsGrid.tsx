import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import nataliaPhoto from 'figma:asset/74df768816fbfca20470ff8f8056b8a5e8b7848d.png';
import annaPhoto from 'figma:asset/e6a7e72c889a9e35034b4dfaa4ea34b04930199b.png';
import yuliaPhoto from 'figma:asset/a31c366b75bef27154f00ea4a24682a7b50b64ad.png';
import elenaPhoto from 'figma:asset/499111c489ec3f57d5463cf17b8204c1b69359a2.png';
import tatjanaPhoto from 'figma:asset/128ac8e98fd22036967ff3e629dee82c9a472ead.png';
import dianaPhoto from 'figma:asset/8191298025a5a4864c7318f149c0935e65b8a1db.png';
import nataliaIvanovaPhoto from 'figma:asset/f2ae30c64997680ae2c7ca22b83b42d937320394.png';
import tatianaVoroninaPhoto from 'figma:asset/ac0a41326e7e1391db89503030ae259378212c70.png';
import muratPhoto from 'figma:asset/4d59e5667911260dcb1a47b271c07074e772e73c.png';
import viacheslavPhoto from 'figma:asset/c7ec1850ff46cde2f409d976498adae8ff0267c8.png';
import dmitryPhoto from 'figma:asset/b5993405d8621d6ac1b627ceed2f0acf65b5d75e.png';
import alexandrPhoto from 'figma:asset/35d33089fe666066725eba2034e71c426a24cdb1.png';
import yuliaElanPhoto from 'figma:asset/f1f6bddf63f7c9563950ea906839c41bb0468aed.png';
import yuliaDegtevaPhoto from 'figma:asset/d66c3e0badc0f498de6946202c055eea15a8cf8c.png';
import anastasiaPhoto from 'figma:asset/e6b268ebc23c6ceac6864d7b6a96e75393b82d75.png';
import mariaSemkovaPhoto from 'figma:asset/35715f6ee0cbcc2066af84fdb5a0695eecaee676.png';
import annaKoloyarovaPhoto from 'figma:asset/1848416c822f08511754d314a17f8cfeb3ec3415.png';
import viktoriaPhoto from 'figma:asset/b179363b27bc0656cb27f9e9be17d5ffa1dd314c.png';
import tatianaMarichevaPhoto from 'figma:asset/4b74b50500a83aab8e290b08cf9941ec4208a49f.png';

interface VideoTestimonial {
  name: string;
  description: string;
  image: string;
  videoId: string;
  category: string;
  quote?: string;
  featured?: boolean;
}

interface VideoTestimonialsGridProps {
  onOpenVideo?: (videoId: string) => void;
}

const testimonials: VideoTestimonial[] = [
  {
    name: 'Вячеслав Дёмин',
    description: 'Со-владелец школы психологии Ксении Деминой',
    image: viacheslavPhoto,
    videoId: 'https://youtu.be/w5CEThw8-EE?si=3BJZnQ5kV6XpdwjE',
    category: 'Психология',
    featured: true
  },
  {
    name: 'Дмитрий Щербинин',
    description: 'Сооснователь школы Натали Щербининой',
    image: dmitryPhoto,
    videoId: 'https://youtu.be/PD4LcMUnJeY?si=xvSG952Ck_b8y6r9',
    category: 'Бизнес'
  },
  {
    name: 'Александр Чуваев',
    description: 'Директор по маркетингу',
    image: alexandrPhoto,
    videoId: 'https://youtu.be/9_SlPmopP8k?si=l9jdWaMMq7thymgy',
    category: 'Маркетинг'
  },
  {
    name: 'Наталья Юрьева',
    description: 'Собственник школы "Живопись маслом"',
    image: nataliaPhoto,
    videoId: 'https://youtu.be/4m3kmbh2AIE?si=epMSDeMEfOULZS4w',
    category: 'Искусство'
  },
  {
    name: 'Татьяна Маричева',
    description: 'Собственник школы продюсеров',
    image: tatianaMarichevaPhoto,
    videoId: 'https://youtu.be/1KMeEO--En8',
    category: 'Продюсеры',
    featured: true
  },
  {
    name: 'Анна Кузнецова',
    description: 'Собственник школы по продажам "Учимся продавать"',
    image: annaPhoto,
    videoId: 'https://youtu.be/QD4ljQxxaiE',
    category: 'Продажи'
  },
  {
    name: 'Юлия Евенко',
    description: 'Собственник школы и сделали панель нормального маникюра',
    image: yuliaPhoto,
    videoId: 'https://youtu.be/rBCEII9uABQ',
    category: 'Маникюр'
  },
  {
    name: 'Диана Якушева',
    description: 'Руководитель отдела маркетинга в школе "Живопись маслом"',
    image: dianaPhoto,
    videoId: 'https://youtu.be/AZwX0rjOTa0?si=H1EHNGoDPiFNawq8',
    category: 'Маркетинг',
    featured: true
  },
  {
    name: 'Татьяна Николова',
    description: 'Собственник и продюсер школы инвестиций',
    image: tatjanaPhoto,
    videoId: 'https://youtu.be/VoqniZjChGU',
    category: 'Инвестиции'
  },
  {
    name: 'Елена Шустикова',
    description: 'Собственник школы дизайна',
    image: elenaPhoto,
    videoId: 'https://youtu.be/S0PtUSVnvUs?si=vhqasUvgwI1SX6TL',
    category: 'Дизайн'
  },
  {
    name: 'Наталья Иванова',
    description: 'Бизнес инженер',
    image: nataliaIvanovaPhoto,
    videoId: 'https://youtu.be/JM_Dgy_qzZA?si=2Ov-ABpdwzRft4V6',
    category: 'Бизнес'
  },
  {
    name: 'Юлия Дегтева',
    description: 'Собственник HR-агентства',
    image: yuliaDegtevaPhoto,
    videoId: 'https://youtu.be/HyQ1mTRGgYs?si=fMzeJD5H06LCf14E',
    category: 'HR'
  },
  {
    name: 'Мурат Танкибайев',
    description: 'Собственник Школы английского языка',
    image: muratPhoto,
    videoId: 'https://youtu.be/BkpOWzqBr30?si=rJ-3kR-fKnaUyqHe',
    category: 'Английский язык'
  },
  {
    name: 'Юлия Элан',
    description: 'Лидер сообщества консультантов по фэн-шуй',
    image: yuliaElanPhoto,
    videoId: 'https://youtu.be/lSzJHvRPPm4?si=qfUgJ5JuOL5EAZzX',
    category: 'Фэн-шуй'
  },
  {
    name: 'Татьяна Воронина',
    description: 'Проджект Школы Модного бизнеса',
    image: tatianaVoroninaPhoto,
    videoId: 'https://youtu.be/jOfBuIKpPPc?si=qXDGUsZTbJOLB8Pz',
    category: 'Модный бизнес',
    featured: true
  },
  {
    name: 'Анастасия Ушакова',
    description: 'Продюсер онлайн-школы CrystalLand',
    image: anastasiaPhoto,
    videoId: 'https://youtu.be/TtwmNIBIARM?si=k4TppTMdXBG_WEak',
    category: 'Продюсеры'
  },
  {
    name: 'Мария Семкова',
    description: 'Руководитель школы психологии Ксении Деминой',
    image: mariaSemkovaPhoto,
    videoId: 'https://youtu.be/VUjSDhkCfzA',
    category: 'Психология'
  },
  {
    name: 'Анна Колоярова',
    description: 'Операционный директор',
    image: annaKoloyarovaPhoto,
    videoId: 'https://youtu.be/tWqpwEmBRkM',
    category: 'Бизнес'
  },
  {
    name: 'Виктория Грохотова',
    description: 'Бизнес-инженер',
    image: viktoriaPhoto,
    videoId: 'https://youtu.be/RU8k1voPHFs?si=AmY9_AYf7KXNJOtH',
    category: 'Бизнес'
  }
];

export function VideoTestimonialsGrid({ onOpenVideo }: VideoTestimonialsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['Все', 'Бизнес', 'Психология', 'Маркетинг', 'Продюсеры'];
  
  const filteredTestimonials = selectedCategory === 'Все' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)' }}>
      
      {/* Декоративные элементы фона */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #2ba546 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #34ae15 0%, transparent 70%)' }}></div>
      
      <style>{`
        @keyframes playPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(43, 165, 70, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(43, 165, 70, 0); }
        }
        @keyframes shimmerGold {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .play-pulse {
          animation: playPulse 2s ease-in-out infinite;
        }
        .gold-shimmer {
          background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmerGold 3s ease-in-out infinite;
        }
        .featured-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        .featured-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #DAA520, #FFD700, #DAA520);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
        }
      `}</style>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="font-futura text-3xl md:text-4xl mb-4">
              Отзывы наших клиентов
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Более 150 успешных проектов. Наши клиенты делятся реальным опытом работы с агентством.
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                style={{
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, #2ba546, #34ae15)' 
                    : '#ffffff',
                  color: selectedCategory === category ? '#ffffff' : '#374151',
                  border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                  transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Сетка видео-отзывов с мозаичным layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, idx) => {
              const isFeatured = testimonial.featured || false; // Используем явное поле featured
              const isLarge = idx % 5 === 0; // Каждый 5-й большой
              const isHidden = idx >= 3 && !showAll; // На мобилке скрываем после 3-х
              
              return (
                <div
                  key={idx}
                  className={`${isLarge ? 'lg:col-span-2 lg:row-span-1' : ''} ${isHidden ? 'hidden md:block' : ''} animate-fade-in group cursor-pointer`}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                  onClick={() => onOpenVideo?.(testimonial.videoId)}
                >
                  <div className={`h-full rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isFeatured ? 'featured-card' : 'bg-white border border-gray-200'}`}>
                    
                    {/* Featured badge */}
                    {isFeatured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4" style={{ background: 'linear-gradient(135deg, #DAA520, #FFD700)', color: '#ffffff' }}>
                        ⭐ Топ отзыв
                      </div>
                    )}
                    
                    {/* Кавычки */}
                    <div className="text-6xl leading-none mb-4 opacity-20" style={{ color: isFeatured ? '#DAA520' : '#2ba546' }}>
                      "
                    </div>
                    
                    <div className="flex gap-4 items-start mb-4">
                      {/* Фото и кнопка play */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                          <ImageWithFallback 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center play-pulse"
                            style={{ 
                              backgroundColor: isFeatured ? '#DAA520' : '#2ba546',
                              boxShadow: isFeatured 
                                ? '0 4px 20px rgba(218, 165, 32, 0.4)' 
                                : '0 4px 20px rgba(43, 165, 70, 0.4)'
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5.14v13.72L19 12 8 5.14z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Информация */}
                      <div className="flex-1">
                        <h3 className="mb-1" style={{ fontSize: '18px', color: isFeatured ? '#DAA520' : '#2ba546' }}>
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Категория badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#f0fdf4', color: '#2ba546' }}>
                      {testimonial.category}
                    </div>
                    
                    {/* Hover effect - золотой shimmer */}
                    {isFeatured && (
                      <div className="absolute inset-0 rounded-3xl gold-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Кнопка "Показать еще" - только на мобилке */}
          {!showAll && filteredTestimonials.length > 3 && (
            <div className="mt-8 text-center md:hidden">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                Показать еще
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}