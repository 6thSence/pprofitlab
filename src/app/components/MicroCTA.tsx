'use client';

interface MicroCTAProps {
  variant?: 'default' | 'minimal';
  text?: string;
  onOpenDiagnostic?: () => void;
}

export function MicroCTA({ variant = 'default', text, onOpenDiagnostic }: MicroCTAProps) {
  const openDiagnostic = () => {
    if (onOpenDiagnostic) {
      onOpenDiagnostic();
    } else {
      window.open('https://system-edu.getcourse.ru/pl/lite/widget/show?id=662838', '_blank');
    }
  };

  if (variant === 'minimal') {
    return (
      <div className="py-8 text-center">
        <button
          onClick={openDiagnostic}
          className="text-primary hover:text-[#34ae15] transition-colors inline-flex items-center gap-2 group"
        >
          <span className="border-b-2 border-primary/30 group-hover:border-primary transition-colors">
            {text || 'Записаться на бесплатную диагностику'}
          </span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            {text || 'Готовы узнать, как это будет работать в вашем бизнесе?'}
          </p>
          <button
            onClick={openDiagnostic}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-[#34ae15] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2 relative overflow-hidden group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full pointer-events-none">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out skew-x-12"></span>
            </span>
            <span className="relative z-10">Записаться на диагностику</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Диагностика бесплатная • Онлайн-встреча 60 минут
          </p>
        </div>
      </div>
    </section>
  );
}
