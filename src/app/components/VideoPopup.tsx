interface VideoPopupProps {
  videoId: string;
  onClose: () => void;
}

// Маппинг ID на YouTube video ID из оригинального кода
const videoMap: Record<string, string> = {
  'video1': '4m3kmbh2AIE',
  'video2': 'AZwX0rjOTa0',
  'video3': '0zt5b72GzSQ',
  'video4': 'IKegqHTzxIo',
  'video5': 'IHEFIs5MghY',
  'video6': 'PSk7Y4JJLGo',
  'youtubevideo1': '4m3kmbh2AIE',
  'youtubevideo2': 'AZwX0rjOTa0',
  'youtubevideo3': '0zt5b72GzSQ',
  'youtubevideo4': 'IKegqHTzxIo',
  'youtubevideo5': 'IHEFIs5MghY',
  'youtubevideo6': 'PSk7Y4JJLGo',
  'youtubevideo7': '3C3_C12UT5w',
  'youtubevideo8': 'jmZ3GU36zu0',
  'youtubevideo9': '4QC7KCMiIn8',
  'youtubevideo10': '5Zv-ctv84xY',
  'youtubevideo11': '1KMeEO--En8',
  'testimonial-1': '1KMeEO--En8',
};

export function VideoPopup({ videoId, onClose }: VideoPopupProps) {
  // Функция для извлечения YouTube ID из разных форматов ссылок
  const extractYouTubeId = (url: string): string => {
    // Если это уже ID из videoMap
    if (videoMap[url]) {
      return videoMap[url];
    }
    
    // Если это полная ссылка YouTube
    if (url.includes('youtu.be/')) {
      // Формат: https://youtu.be/VIDEO_ID или https://youtu.be/VIDEO_ID?si=...
      const match = url.match(/youtu\.be\/([^?]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    if (url.includes('youtube.com/watch')) {
      // Формат: https://www.youtube.com/watch?v=VIDEO_ID
      const match = url.match(/[?&]v=([^&]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    // Если ничего не подошло, возвращаем исходную строку или дефолтное значение
    return url.length === 11 ? url : '4m3kmbh2AIE';
  };

  const youtubeId = extractYouTubeId(videoId);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-black rounded-large overflow-hidden shadow-popup animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Видео */}
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}