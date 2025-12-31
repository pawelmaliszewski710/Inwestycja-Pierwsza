import { Apartment } from '../types';

export const APARTMENTS_DATA: Apartment[] = [
  { 
    id: 1, 
    number: '1A', 
    floor: 0, 
    rooms: 3, 
    area: 62.5, 
    gardenArea: 85, 
    status: 'Sprzedane', 
    price: 537000,
    polygonPoints: "1294,652,1135,759,997,688,1239,574,1236,481,1331,340,1509,383,1408,542,1391,627,1301,596"
  },
  { 
    id: 2, 
    number: '1B', 
    floor: 1, 
    rooms: 4, 
    area: 75.0, 
    gardenArea: 0, 
    status: 'Rezerwacja', 
    price: 610000,
    polygonPoints: "1228,797,1136,765,1304,654,1304,595,1416,639,1412,697"
  },
  { id: 3, number: '2A', floor: 0, rooms: 3, area: 62.5, gardenArea: 90, status: 'Rezerwacja', price: 545000 },
  { id: 4, number: '2B', floor: 1, rooms: 4, area: 75.0, gardenArea: 0, status: 'Dostępne', price: 610000 },
  { id: 5, number: '3A', floor: 0, rooms: 3, area: 63.0, gardenArea: 100, status: 'Dostępne', price: 560000 },
  { id: 6, number: '3B', floor: 1, rooms: 5, area: 82.0, gardenArea: 0, status: 'Sprzedane' },
  { id: 7, number: '4A', floor: 0, rooms: 3, area: 62.5, gardenArea: 50, status: 'Dostępne', price: 520000 },
  { id: 8, number: '4B', floor: 1, rooms: 4, area: 75.0, gardenArea: 0, status: 'Rezerwacja', price: 610000 },
];