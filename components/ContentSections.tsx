import React from 'react';
import { MapPin, Car, Train, TreePine, ShoppingCart, Layers, Shield, Droplets, Grid, Flame, Wind, VolumeX, Building2, School, Waves, Bus } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import { InteractiveEstateMap } from './InteractiveEstateMap';

export const VisualNavigator: React.FC = () => (
  <section id="nawigator" className="py-24 bg-primary-50 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-900 mb-6">Nawigator Osiedla</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Zobacz statusy mieszkań na interaktywnej wizualizacji. Wybierz swój wymarzony dom.
        </p>
      </div>
      
      {/* Kontener dla interaktywnej mapy osiedla */}
      <div className="max-w-6xl mx-auto bg-white p-4 rounded-[2.5rem] shadow-soft">
        <InteractiveEstateMap />
      </div>
    </div>
  </section>
);

export const LocationSection: React.FC = () => (
  <section id="lokalizacja" className="py-24 bg-white scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-bold uppercase tracking-wider mb-4">Lokalizacja</div>
        <h2 className="text-4xl font-display font-bold text-primary-900 mb-8 leading-tight">Tylko 30 minut <br/>od serca Warszawy</h2>
        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
          Inwestycja zlokalizowana jest w cichej, zielonej okolicy w centrum Radzymina koło Warszawy. 
          To idealny kompromis między miejskim zgiełkiem a podmiejskim spokojem. 
          Bliskość trasy S8 zapewnia ekspresowy dojazd do stolicy.
        </p>
        <div className="space-y-4">
          <LocationCard icon={<Car size={20} />} title="Centrum Warszawy (27 km)" time="35 minut samochodem" />
          <LocationCard icon={<Building2 size={20} />} title="Urząd Miasta i Gminy (450 m)" time="5 min spacerem" />
          <LocationCard icon={<School size={20} />} title="Przedszkole nr 1 (200 m)" time="3 min spacerem" />
          <LocationCard icon={<Waves size={20} />} title="Basen i Ośrodek Sportu (900 m)" time="12 min spacerem" />
          <LocationCard icon={<Bus size={20} />} title="Przystanek Autobusowy (850 m)" time="10 min spacerem" />
        </div>
      </div>
      
      {/* Interactive Map Component Container */}
      <div className="h-[500px] lg:h-[800px] w-full rounded-[2.5rem] overflow-hidden shadow-soft border-4 border-white">
         <InteractiveMap />
      </div>
    </div>
  </section>
);

const LocationCard = ({ icon, title, time }: { icon: React.ReactNode, title: string, time: string }) => (
  <div className="flex items-center p-5 bg-primary-50/50 rounded-2xl border border-transparent hover:border-primary-100 hover:bg-white hover:shadow-soft transition-all duration-300">
    <div className="text-primary-700 mr-5 p-3 bg-white rounded-xl shadow-sm">{icon}</div>
    <div>
      <h4 className="font-display font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

export const InfrastructureSection: React.FC = () => (
  <section className="py-24 bg-primary-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">Cała infrastruktura na wyciągnięcie ręki</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Nie musisz rezygnować z wygód miasta. W pobliżu inwestycji znajdziesz wszystko, co niezbędne do komfortowego życia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfraCard icon={<MapPin className="w-8 h-8 text-primary-700" />} title="Centrum miasta" desc="5 min spacerem" />
        <InfraCard icon={<TreePine className="w-8 h-8 text-primary-700" />} title="Park i place zabaw" desc="5 min spacerem" />
        <InfraCard icon={<ShoppingCart className="w-8 h-8 text-primary-700" />} title="Centrum handlowe" desc="8 min samochodem" />
      </div>
    </div>
  </section>
);

const InfraCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-10 rounded-3xl shadow-soft hover:shadow-soft-hover transition-all duration-300 text-center group">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-primary-50 rounded-2xl group-hover:scale-110 transition-transform">{icon}</div>
    </div>
    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-primary-700 font-medium bg-primary-50 inline-block px-4 py-1 rounded-full text-sm">{desc}</p>
  </div>
);

export const StandardsSection: React.FC = () => (
  <section id="o-inwestycji" className="scroll-mt-24">
    {/* Section 1 */}
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
           <img src="https://picsum.photos/600/400?random=3" alt="Osiedle" className="rounded-3xl shadow-soft" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-500 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-display font-bold text-primary-900 mb-6">Bezczynszowe mieszkania na wyasfaltowanym osiedlu</h3>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Zapewniamy pełną prywatność na terenie zamkniętym. Każdy budynek został zaprojektowany z myślą o kameralności.
            Brak czynszu do wspólnoty to realna oszczędność w domowym budżecie. Płacisz tylko za to, co zużyjesz.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Shield size={20} />} text="Teren zamknięty i ogrodzony" />
             <StandardListItem icon={<Shield size={20} />} text="Kameralna zabudowa" />
             <StandardListItem icon={<Shield size={20} />} text="Pełna własność gruntu" />
          </ul>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-12 h-1 bg-primary-500 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-display font-bold text-primary-900 mb-6">Nowoczesna architektura i miejsca postojowe</h3>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Stawiamy na nowoczesny design i najwyższej klasy materiały. Elewacje wykończone tynkiem silikonowym i elementami drewnopodobnymi.
            Każdy lokal posiada przypisane dwa wygodne miejsca postojowe bezpośrednio przed budynkiem.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Car size={20} />} text="2 miejsca postojowe w cenie" />
             <StandardListItem icon={<Layers size={20} />} text="Izolacja styropianem grafitowym" />
          </ul>
        </div>
        <div>
           <img src="https://picsum.photos/600/400?random=4" alt="Architektura" className="rounded-3xl shadow-soft" />
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
           <img src="https://picsum.photos/600/400?random=5" alt="Ogród" className="rounded-3xl shadow-soft" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-500 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-display font-bold text-primary-900 mb-6">Prywatny ogródek do każdego mieszkania</h3>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Niezależnie od wybranego piętra, zyskujesz przestrzeń na świeżym powietrzu. Mieszkania na parterze posiadają bezpośrednie wyjście 
            na ogród z salonu, idealne na grilla czy zabawę dla dzieci.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<TreePine size={20} />} text="Ogródki do 100m²" />
             <StandardListItem icon={<TreePine size={20} />} text="Przestronne balkony na piętrze" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const StandardListItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center text-gray-700 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
    <span className="mr-3 text-primary-600 bg-primary-50 p-2 rounded-lg">{icon}</span>
    <span className="font-medium">{text}</span>
  </li>
);

export const TechSpecs: React.FC = () => (
  <section className="py-24 bg-primary-900 text-white scroll-mt-24 relative overflow-hidden">
    {/* Decorative circle */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-800 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-800 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">Specyfikacja Techniczna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechItem icon={<Flame />} text="Ogrzewanie podłogowe w całym domu" />
        <TechItem icon={<Wind />} text="Energooszczędne okna 3-szybowe" />
        <TechItem icon={<Droplets />} text="Nowoczesny piec gazowy kondensacyjny" />
        <TechItem icon={<VolumeX />} text="Podwójne ściany między lokalami (akustyka)" />
        <TechItem icon={<Layers />} text="Ściany z pustaków ceramicznych" />
        <TechItem icon={<Grid />} text="Media miejskie (woda, kanalizacja, gaz)" />
        <TechItem icon={<Shield />} text="Własna brama i furtka dla każdego" />
        <TechItem icon={<Car />} text="Podjazdy o pow. ok 50 m²" />
        <TechItem icon={<Layers />} text="Internet Światłowodowy" />
      </div>
    </div>
  </section>
);

const TechItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center space-x-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
    <div className="flex-shrink-0 text-primary-300 p-2 bg-white/10 rounded-lg">{icon}</div>
    <span className="font-medium text-primary-50">{text}</span>
  </div>
);

export const LayoutInfo: React.FC = () => (
  <section className="py-24 bg-primary-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">Szeroki wybór funkcjonalnych wnętrz</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Nasze projekty są elastyczne. Oferujemy mieszkania o zróżnicowanych metrażach, które możesz dostosować do swoich potrzeb.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-gray-100 hover:shadow-soft-hover transition-all">
          <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">Mieszkania Parterowe</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Idealne dla rodzin z małymi dziećmi lub osób starszych. Brak schodów i bezpośrednie wyjście do ogrodu to atuty nie do przecenienia.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> 2-3 sypialnie</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Przestronny salon z aneksem</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Bezpośrednie wyjście na taras</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-gray-100 hover:shadow-soft-hover transition-all">
          <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">Mieszkania na Piętrze</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Większa powierzchnia użytkowa i dodatkowa przestrzeń na poddaszu. Możliwość aranżacji dwupoziomowego apartamentu.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Większy metraż całkowity</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Możliwość wydzielenia dwóch lokali</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Duży balkon + opcja ogrodu</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);