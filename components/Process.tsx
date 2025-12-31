import React from 'react';
import { Download, PhoneCall, Calendar, FileText, Briefcase, Key, Home } from 'lucide-react';

export const AdditionalInfo: React.FC = () => (
  <section className="py-20 bg-primary-50 border-t border-gray-100 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-display font-bold text-primary-900 mb-8">Informacje dodatkowe</h2>
      <a 
        href="#" 
        onClick={(e) => e.preventDefault()} 
        className="bg-white text-primary-900 border border-gray-200 px-10 py-4 rounded-full font-bold shadow-soft hover:shadow-lg hover:border-primary-200 transition-all inline-flex items-center justify-center gap-3 mx-auto cursor-pointer"
      >
        <Download size={20} className="text-primary-600" /> Pobierz prospekt informacyjny
      </a>
    </div>
  </section>
);

export const ProcessSection: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Help Block */}
        <div className="bg-primary-900 rounded-[2.5rem] p-10 md:p-16 text-center mb-24 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">Jak jeszcze możemy Ci pomóc?</h2>
          <p className="text-primary-200 mb-10 max-w-2xl mx-auto text-lg relative z-10 font-light">
            Współpracujemy z doświadczonymi ekspertami kredytowymi, którzy bezpłatnie pomogą Ci sprawdzić zdolność kredytową i wybrać najlepszą ofertę finansowania.
          </p>
          <a 
            href="#kontakt"
            onClick={(e) => handleScroll(e, '#kontakt')} 
            className="bg-white text-primary-900 px-10 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors inline-block cursor-pointer shadow-lg relative z-10"
          >
            Umów bezpłatną konsultację
          </a>
        </div>

        {/* Timeline */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">Jak wygląda proces zakupu?</h2>
          <p className="text-gray-500 text-lg">Przeprowadzimy Cię przez każdy etap, zapewniając bezpieczeństwo.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line for mobile/desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-100 hidden md:block"></div>
          
          <div className="space-y-16">
            <TimelineItem 
              step={1} 
              icon={<PhoneCall />} 
              title="Rozmowa telefoniczna" 
              desc="Wstępne ustalenie potrzeb i prezentacja oferty." 
              side="left" 
            />
            <TimelineItem 
              step={2} 
              icon={<Calendar />} 
              title="Spotkanie na budowie" 
              desc="Oględziny terenu, układu pomieszczeń i okolicy." 
              side="right" 
            />
            <TimelineItem 
              step={3} 
              icon={<FileText />} 
              title="Umowa rezerwacyjna" 
              desc="Rezerwacja wybranego lokalu i ustalenie warunków." 
              side="left" 
            />
            <TimelineItem 
              step={4} 
              icon={<Briefcase />} 
              title="Doradca kredytowy" 
              desc="Pomoc w uzyskaniu finansowania (opcjonalnie)." 
              side="right" 
            />
            <TimelineItem 
              step={5} 
              icon={<FileText />} 
              title="Umowa deweloperska" 
              desc="Podpisanie aktu notarialnego w kancelarii." 
              side="left" 
            />
            <TimelineItem 
              step={6} 
              icon={<Key />} 
              title="Odbiór techniczny" 
              desc="Przekazanie kluczy i sprawdzenie stanu lokalu." 
              side="right" 
            />
            <TimelineItem 
              step={7} 
              icon={<Home />} 
              title="Przeniesienie własności" 
              desc="Finalny akt notarialny przenoszący własność." 
              side="left" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ step, icon, title, desc, side }: { step: number, icon: React.ReactNode, title: string, desc: string, side: 'left' | 'right' }) => {
  const isLeft = side === 'left';
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between relative`}>
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right order-2 md:order-1' : 'md:text-left order-2 md:order-3'}`}>
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 hover:shadow-soft-hover transition-all duration-300">
          <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
             <span className="md:hidden text-primary-600 font-bold mr-2">#{step}</span>
             <h3 className="text-xl font-display font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-500 leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* Center Icon/Number */}
      <div className="order-1 md:order-2 z-10 my-6 md:my-0">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-900 font-display font-bold text-xl shadow-lg border-4 border-primary-50">
          {step}
        </div>
      </div>

      {/* Empty Space for alignment */}
      <div className={`w-full md:w-5/12 order-3 ${isLeft ? 'md:order-3' : 'md:order-1'}`}></div>
    </div>
  );
};