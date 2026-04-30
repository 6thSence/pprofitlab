import { useState, useEffect } from 'react';
import { HeroNew } from './components/HeroNew';
import { KeyPoints } from './components/KeyPoints';
import { StableGrowth } from './components/StableGrowth';
import { TargetAudience } from './components/TargetAudience';
import { BeforeAfter } from './components/BeforeAfter';
import { SixSteps } from './components/SixSteps';
import { Templates } from './components/Templates';
import { AboutDarya } from './components/AboutDarya';
import { Team } from './components/Team';
import { ProblemsSolved } from './components/ProblemsSolved';
import { VideoTestimonialsGrid } from './components/VideoTestimonialsGrid';
import { DiagnosticBooking } from './components/DiagnosticBooking';
import { Footer } from './components/Footer';
import { VideoPopup } from './components/VideoPopup';
import { TemplatePopup } from './components/TemplatePopup';
import { DiagnosticModal } from './components/DiagnosticModal';
import { StickyHeader } from './components/StickyHeader';
import { MicroCTA } from './components/MicroCTA';
import { FAQ } from './components/FAQ';
import { TrainingFormats } from './components/TrainingFormats';
import { ExitPopup } from './components/ExitPopup';
import { BusinessCheckup } from './components/BusinessCheckup';

export default function App() {
  const [activeVideoPopup, setActiveVideoPopup] = useState<string | null>(null);
  const [activeTemplatePopup, setActiveTemplatePopup] = useState<string | null>(null);
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false);

  useEffect(() => {
    if (activeVideoPopup || activeTemplatePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideoPopup, activeTemplatePopup]);

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <HeroNew onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <KeyPoints />
      <TargetAudience onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <ProblemsSolved />
      <BusinessCheckup onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <StableGrowth />
      <SixSteps onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <MicroCTA text="Готовы к трансформации вашего бизнеса?" onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <AboutDarya />
      <VideoTestimonialsGrid onOpenVideo={setActiveVideoPopup} />
      <Team />
      <TrainingFormats onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
      <Templates onOpenPopup={setActiveTemplatePopup} />
      <FAQ />
      <DiagnosticBooking />
      
      <Footer />
      
      {activeVideoPopup && (
        <VideoPopup 
          videoId={activeVideoPopup} 
          onClose={() => setActiveVideoPopup(null)} 
        />
      )}

      {activeTemplatePopup && (
        <TemplatePopup 
          templateId={activeTemplatePopup} 
          onClose={() => setActiveTemplatePopup(null)} 
        />
      )}

      <DiagnosticModal 
        isOpen={isDiagnosticModalOpen}
        onClose={() => setIsDiagnosticModalOpen(false)}
      />

      <ExitPopup onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)} />
    </div>
  );
}