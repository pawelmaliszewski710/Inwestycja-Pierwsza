import React from 'react';
import { Home, Wifi, ShieldCheck, Maximize } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-20 bg-primary-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-100/50 to-transparent pointer-events-none" />

      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-900 text-sm font-bold tracking-wide uppercase mb-2">
            Nowa Inwestycja w Radzyminie
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary-900 leading-[1.1]">
            Zielona Przystań <br />
            <span className="text-primary-600">Twój Nowy Dom</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-light">
            Nowoczesne osiedle domów w zabudowie szeregowej, łączące bliskość natury z komfortem miejskiego życia. Odkryj standard, na jaki zasługujesz.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#mieszkania" 
              onClick={(e) => handleScroll(e, '#mieszkania')}
              className="px-8 py-4 bg-primary-900 text-white font-bold rounded-full shadow-soft-hover hover:shadow-xl hover:bg-primary-800 transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              Zobacz mieszkania
            </a>
            <a 
              href="#kontakt" 
              onClick={(e) => handleScroll(e, '#kontakt')}
              className="px-8 py-4 bg-white border border-gray-200 text-primary-900 font-bold rounded-full hover:bg-white hover:border-primary-200 hover:shadow-lg transition-all cursor-pointer"
            >
              Umów spotkanie
            </a>
          </div>
        </div>

        {/* Right Slider / Image */}
        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px] border-4 border-white">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczNFEQUX8YsFbxBBf72ASpKLvou2Y88B1tcGmWiMmiSNucAEpBuh0Z5uIfQ-RSruZCMD9XPCoiNQ7aLi2WC5hD0iOLAAVf-FSRTNEKk1JJohw-aOTXkVpnNR9Qu5L3VzJYwBgjrFhUss6er9NaVEprkp=w1920-h1080-s-no-gm" 
            alt="Wizualizacja osiedla" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Badge on Image */}
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg max-w-xs">
             <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Status budowy</p>
             <p className="text-primary-900 font-display font-bold text-lg">Zakończenie I etapu: Q4 2024</p>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative z-10 -mt-10 mb-20 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <FeatureBox icon={<Home className="text-primary-700" />} title="Media miejskie" desc="Pełne uzbrojenie terenu" />
            <FeatureBox icon={<ShieldCheck className="text-primary-700" />} title="Prywatność" desc="Własna brama i furtka" />
            <FeatureBox icon={<Maximize className="text-primary-700" />} title="Duże podjazdy" desc="Powierzchnia ok. 50 m²" />
            <FeatureBox icon={<Home className="text-primary-700" />} title="Ogródki" desc="Nawet do 100 m²" />
            <FeatureBox icon={<Wifi className="text-primary-700" />} title="Technologia" desc="Światłowód i ogrzewanie" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-4 hover:bg-primary-50/50 rounded-2xl transition-colors duration-300">
    <div className="mb-4 p-3 bg-primary-50 rounded-2xl text-primary-900">{icon}</div>
    <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);