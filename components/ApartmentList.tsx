import React, { useState, useMemo } from 'react';
import { ArrowUpDown, FileText, CheckCircle, Clock } from 'lucide-react';
import { Apartment, SortOption } from '../types';
import { APARTMENTS_DATA } from '../data/apartments';

export const ApartmentList: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('status');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedApartments = useMemo(() => {
    return [...APARTMENTS_DATA].sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      // Handle undefined prices for sold items if necessary
      if (valA === undefined) valA = 0;
      if (valB === undefined) valB = 0;

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortBy, sortOrder]);

  const availableCount = APARTMENTS_DATA.filter(a => a.status === 'Dostępne').length;
  const reservedCount = APARTMENTS_DATA.filter(a => a.status === 'Rezerwacja').length;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const [field, order] = value.split('-');
    setSortBy(field as SortOption);
    setSortOrder(order as 'asc' | 'desc');
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="mieszkania" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">Wybierz wygodne mieszkanie</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Znajdź układ idealnie dopasowany do Twoich potrzeb.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 overflow-hidden">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-50/50 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="flex items-center gap-2 text-sm font-bold text-primary-800 bg-primary-100 px-4 py-2 rounded-full">
                <CheckCircle size={16} /> Dostępne ({availableCount})
              </span>
              <span className="flex items-center gap-2 text-sm font-bold text-amber-800 bg-amber-50 px-4 py-2 rounded-full">
                <Clock size={16} /> Rezerwacja ({reservedCount})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-500">Sortuj:</label>
              <div className="relative">
                <select 
                  onChange={handleSortChange}
                  className="appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-xl text-sm font-medium leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                >
                  <option value="status-asc">Dostępność</option>
                  <option value="area-asc">Powierzchnia (rosnąco)</option>
                  <option value="area-desc">Powierzchnia (malejąco)</option>
                  <option value="price-asc">Cena (rosnąco)</option>
                  <option value="price-desc">Cena (malejąco)</option>
                  <option value="rooms-asc">Pokoje (rosnąco)</option>
                  <option value="rooms-desc">Pokoje (malejąco)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <ArrowUpDown size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Numer</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Piętro</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Pokoje</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Powierzchnia</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Ogródek</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Status</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Cena</th>
                  <th className="px-6 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider font-display">Akcja</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                {sortedApartments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-primary-50/30 transition-colors group">
                    <td className="px-6 py-6 whitespace-nowrap font-bold text-primary-900">{apt.number}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-gray-600 font-medium">{apt.floor === 0 ? 'Parter' : 'Piętro'}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-gray-600 font-medium">{apt.rooms}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-gray-900 font-bold">{apt.area} m²</td>
                    <td className="px-6 py-6 whitespace-nowrap text-gray-600 font-medium">{apt.gardenArea > 0 ? `${apt.gardenArea} m²` : '-'}</td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className={`px-4 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full uppercase tracking-wide
                        ${apt.status === 'Dostępne' ? 'bg-primary-100 text-primary-900' : 
                          apt.status === 'Rezerwacja' ? 'bg-amber-50 text-amber-800' : 'bg-red-50 text-red-800'}`}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-gray-700">
                      {apt.price ? (
                        <div className="flex flex-col">
                          <span className="font-bold text-primary-900">{apt.price.toLocaleString()} zł</span>
                          <span className="text-xs text-gray-400 mt-0.5">{(apt.price / apt.area).toFixed(0)} zł/m²</span>
                        </div>
                      ) : <span className="text-gray-400 italic">Zapytaj</span>}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                         <a 
                          href="#kontakt" 
                          onClick={(e) => handleScroll(e, '#kontakt')}
                          className="bg-primary-900 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all text-xs font-bold shadow-md hover:shadow-lg inline-flex items-center cursor-pointer"
                         >
                          ZAPYTAJ
                        </a>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-primary-900 transition-colors px-2 py-2">
                          <FileText size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};