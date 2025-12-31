import React from 'react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Developer */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white inline-block">Deweloper</h4>
            <div className="text-primary-200 text-sm space-y-3 font-light">
              <p className="font-bold text-white text-lg mb-2 font-display">DS DEV Sp. z o.o.</p>
              <p>ul. Inwestycyjna 1</p>
              <p>00-999 Warszawa</p>
              <div className="pt-4 space-y-1 text-xs opacity-60">
                <p>NIP: 123-456-78-90</p>
                <p>KRS: 0000123456</p>
                <p>REGON: 123456789</p>
              </div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white inline-block">Menu</h4>
            <ul className="space-y-3 text-sm text-primary-200 font-light">
              <li><a href="#lokalizacja" onClick={(e) => handleScroll(e, '#lokalizacja')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Lokalizacja</a></li>
              <li><a href="#o-inwestycji" onClick={(e) => handleScroll(e, '#o-inwestycji')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">O inwestycji</a></li>
              <li><a href="#mieszkania" onClick={(e) => handleScroll(e, '#mieszkania')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Mieszkania</a></li>
              <li><a href="#nawigator" onClick={(e) => handleScroll(e, '#nawigator')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Nawigator</a></li>
              <li><a href="#o-inwestorze" onClick={(e) => handleScroll(e, '#o-inwestorze')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">O inwestorze</a></li>
              <li><a href="#kontakt" onClick={(e) => handleScroll(e, '#kontakt')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Kontakt</a></li>
            </ul>
          </div>

          {/* Column 3: Addresses */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white inline-block">Inne inwestycje</h4>
            <ul className="space-y-4 text-sm text-primary-200 font-light">
              <li>
                <p className="font-bold text-white font-display">Osiedle Leśne</p>
                <p>ul. Leśna 5, Marki</p>
              </li>
              <li>
                <p className="font-bold text-white font-display">Willa Parkowa</p>
                <p>ul. Parkowa 12, Ząbki</p>
              </li>
              <li>
                <p className="font-bold text-white font-display">Zielone Tarasy</p>
                <p>ul. Polna 8, Radzymin</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/CTA */}
          <div>
             <h4 className="text-lg font-display font-bold mb-6 text-white inline-block">Umów spotkanie</h4>
             <div className="text-primary-200 text-sm space-y-4 font-light">
               <p>Biuro Sprzedaży czynne:</p>
               <p>Pn-Pt: 9:00 - 17:00</p>
               <p>
                 <a href="mailto:kontakt@dsdev.pl" className="hover:text-white block mb-1 underline decoration-primary-700 underline-offset-4">kontakt@dsdev.pl</a>
                 <a href="tel:+48123456789" className="hover:text-white font-bold block text-lg mt-2 text-white font-display">+48 123 456 789</a>
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-400 font-light">
          <p>&copy; {new Date().getFullYear()} DS DEV. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 md:mt-0">Realizacja: <a href="#" className="hover:text-white transition-colors">Agencja Interaktywna</a></p>
        </div>
      </div>
    </footer>
  );
};