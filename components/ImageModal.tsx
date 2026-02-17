import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Loader2 } from 'lucide-react';
import { Apartment } from '../types';

interface ImageModalProps {
  apartment: Apartment;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ apartment, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Resetuje stany przy każdej zmianie mieszkania
  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
  }, [apartment]);

  if (!apartment.imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-4 md:p-6 relative w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Rzut mieszkania {apartment.number}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-900 transition-colors p-2 -mr-2 rounded-full"
            aria-label="Zamknij"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-50 rounded-lg min-h-[300px]">
          {isLoading && (
            <div className="flex flex-col items-center gap-4 text-gray-500 animate-fade-in">
              <Loader2 size={48} className="animate-spin text-primary-600" />
              <p className="font-medium">Ładowanie rzutu...</p>
            </div>
          )}

          {imageError && (
            <div className="text-center p-8 text-red-600 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto animate-fade-in">
              <div className="flex justify-center mb-4">
                <AlertTriangle size={48} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Błąd ładowania obrazu</h4>
              <p className="text-sm text-gray-700">Nie udało się załadować rzutu mieszkania. Prosimy spróbować ponownie później lub skontaktować się z biurem sprzedaży.</p>
            </div>
          )}

          <img 
            src={apartment.imageUrl} 
            alt={`Rzut mieszkania ${apartment.number}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoading || imageError ? 'hidden opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};