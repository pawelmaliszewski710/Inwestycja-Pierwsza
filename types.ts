export interface Apartment {
  id: number;
  number: string;
  floor: number; // 0 for ground
  rooms: number;
  area: number;
  gardenArea: number;
  status: 'Dostępne' | 'Rezerwacja' | 'Sprzedane';
  price?: number;
  polygonPoints?: string; // Współrzędne dla SVG mapy (opcjonalne)
}

export type SortOption = 'floor' | 'rooms' | 'area' | 'gardenArea' | 'status';
export type SortDirection = 'asc' | 'desc';