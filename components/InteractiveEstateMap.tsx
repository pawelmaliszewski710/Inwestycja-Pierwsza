import React, { useState, useRef, MouseEvent } from 'react';
import { APARTMENTS_DATA } from '../data/apartments';
import { Settings, Check } from 'lucide-react';

export const InteractiveEstateMap: React.FC = () => {
  // Filtrujemy tylko te mieszkania, które mają zdefiniowane punkty na mapie
  const mappableApartments = APARTMENTS_DATA.filter(apt => apt.polygonPoints);

  // Stan lokalny dla mapy - inicjujemy danymi z pliku, ale pozwalamy na zmiany w trybie Admina
  const [localApartments, setLocalApartments] = useState(mappableApartments);
  
  const [hoveredBuilding, setHoveredBuilding] = useState<typeof localApartments[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isAdminMode, setIsAdminMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<SVGElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Funkcja cyklicznej zmiany statusu (Dostępne -> Rezerwacja -> Sprzedane -> Dostępne)
  const cycleStatus = (currentStatus: string) => {
    if (currentStatus === 'Dostępne') return 'Rezerwacja';
    if (currentStatus === 'Rezerwacja') return 'Sprzedane';
    return 'Dostępne';
  };

  const handleBuildingClick = (aptId: number, currentStatus: string) => {
    if (isAdminMode) {
      // W trybie admina zmieniamy status lokalnie
      const newStatus = cycleStatus(currentStatus);
      setLocalApartments(prev => prev.map(apt => 
        apt.id === aptId 
          ? { ...apt, status: newStatus as any } 
          : apt
      ));
    } else {
      // W normalnym trybie przewijamy do kontaktu
      const element = document.querySelector('#kontakt');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Dostępne': return 'fill-green-500/40 stroke-green-400';
      case 'Rezerwacja': return 'fill-amber-500/40 stroke-amber-400';
      case 'Sprzedane': return 'fill-red-500/40 stroke-red-400';
      default: return 'fill-gray-500/40 stroke-gray-400';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Dostępne': return 'bg-green-100 text-green-800';
      case 'Rezerwacja': return 'bg-amber-100 text-amber-800';
      case 'Sprzedane': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group" ref={containerRef}>
      
      {/* Przycisk trybu administratora */}
      <button 
        onClick={() => setIsAdminMode(!isAdminMode)}
        className={`absolute top-4 right-4 z-30 px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-lg ${isAdminMode ? 'bg-primary-600 text-white' : 'bg-white/80 text-gray-700 hover:bg-white'}`}
      >
        {isAdminMode ? <Check size={14} /> : <Settings size={14} />}
        {isAdminMode ? 'Zakończ Edycję' : 'Tryb Demo: Edycja Statusu'}
      </button>

      {isAdminMode && (
         <div className="absolute top-16 right-4 z-30 bg-black/70 text-white text-[10px] p-2 rounded max-w-[200px]">
            Kliknij w mieszkanie, aby zmienić jego status.
         </div>
      )}

      {/* Obraz tła */}
      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczNFEQUX8YsFbxBBf72ASpKLvou2Y88B1tcGmWiMmiSNucAEpBuh0Z5uIfQ-RSruZCMD9XPCoiNQ7aLi2WC5hD0iOLAAVf-FSRTNEKk1JJohw-aOTXkVpnNR9Qu5L3VzJYwBgjrFhUss6er9NaVEprkp=w1920-h1080-s-no-gm" 
        alt="Mapa Osiedla" 
        className="w-full h-auto block object-cover"
      />

      {/* Warstwa SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="none"
        onMouseMove={handleMouseMove}
      >
        {localApartments.map((building) => (
          <polygon
            key={building.id}
            points={building.polygonPoints}
            className={`
              ${getStatusColor(building.status)} 
              stroke-2
              transition-all duration-300 ease-in-out
              ${isAdminMode ? 'cursor-cell hover:stroke-[6]' : 'cursor-pointer hover:stroke-[4] hover:fill-opacity-70'}
            `}
            onMouseEnter={() => setHoveredBuilding(building)}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => handleBuildingClick(building.id, building.status)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredBuilding && (
        <div 
          className="absolute z-20 bg-white p-4 rounded-lg shadow-xl border border-gray-100 pointer-events-none transform -translate-x-1/2 -translate-y-[120%] w-48"
          style={{ 
            left: tooltipPos.x, 
            top: tooltipPos.y,
            transition: 'opacity 0.1s ease'
          }}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-900">Mieszkanie {hoveredBuilding.number}</h4>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${getStatusBadgeColor(hoveredBuilding.status)}`}>
              {hoveredBuilding.status}
            </span>
          </div>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Powierzchnia: <span className="font-medium text-gray-900">{hoveredBuilding.area} m²</span></p>
            {hoveredBuilding.status !== 'Sprzedane' && hoveredBuilding.price && (
              <p>Cena: <span className="font-medium text-primary-700">{hoveredBuilding.price.toLocaleString()} zł</span></p>
            )}
          </div>
          <div className="mt-2 text-xs text-primary-600 font-semibold">
            {isAdminMode ? 'Kliknij, aby zmienić status' : 'Kliknij, aby zapytać'}
          </div>
          
          {/* Strzałka tooltipa */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45"></div>
        </div>
      )}

      {/* Legenda */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md text-xs space-y-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span> Dostępne
         </div>
         <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span> Rezerwacja
         </div>
         <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span> Sprzedane
         </div>
      </div>
    </div>
  );
};