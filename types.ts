export interface Apartment {
  id: number;
  number: string;
  floor: number; // 0 for ground
  rooms: number;
  area: number;
  gardenArea: number;
  polygonPoints?: string | string[]; // Współrzędne dla SVG mapy (opcjonalne)
  imageUrl?: string; // Ścieżka do obrazu rzutu mieszkania (opcjonalne)
}

export type SortOption = 'floor' | 'rooms' | 'area' | 'gardenArea' | 'status';
export type SortDirection = 'asc' | 'desc';