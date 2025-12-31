import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';

// Współrzędne: Radzymin, Nowa Lokalizacja
const CENTER_LAT = 52.41510454912447;
const CENTER_LNG = 21.18485507391127;

const POIS = [
  // Warszawa - Pałac Kultury i Nauki
  { id: 1, lat: 52.2318, lng: 21.0060, title: "Pałac Kultury (Warszawa)", dist: "27 km", icon: "star" },
  // Lokalne punkty w Radzyminie
  { id: 2, lat: 52.4162, lng: 21.1795, title: "Urząd Miasta i Gminy", dist: "450 m", icon: "building" },
  { id: 3, lat: 52.4135, lng: 21.1830, title: "Przedszkole nr 1", dist: "200 m", icon: "smile" },
  { id: 4, lat: 52.4085, lng: 21.1780, title: "Basen (Radzymiński Ośrodek Sportu)", dist: "900 m", icon: "waves" },
  { id: 5, lat: 52.4182, lng: 21.1745, title: "Przystanek Autobusowy", dist: "850 m", icon: "bus" },
];

export const InteractiveMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Zapobieganie re-inicjalizacji

    // 1. Inicjalizacja Mapy
    const map = L.map(mapContainerRef.current, {
      center: [CENTER_LAT, CENTER_LNG],
      zoom: 15, // Zbliżenie na Radzymin
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false
    });

    mapInstanceRef.current = map;

    // 2. Dodanie warstwy kafelków (CartoDB Voyager)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);

    // 3. Ikona Inwestycji (Centralny punkt)
    const investmentIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div class="investment-marker">
          <div class="investment-pulse"></div>
          <div class="investment-dot"></div>
          <div style="position: absolute; bottom: 35px; left: 50%; transform: translateX(-50%); background: #064e3b; color: white; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 14px; white-space: nowrap; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
            ŻEROMSKIEGO 2
          </div>
        </div>
      `,
      iconSize: [60, 60],
      iconAnchor: [30, 30] // Centered
    });

    // 4. Marker Inwestycji
    L.marker([CENTER_LAT, CENTER_LNG], { icon: investmentIcon }).addTo(map);

    // 5. Dodanie punktów POI z nowymi ikonami
    POIS.forEach(poi => {
      // Ikona POI - wybór SVG w zależności od typu
      let svgContent = '';
      if (poi.icon === 'star') { // PKiN
        svgContent = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
      } else if (poi.icon === 'building') { // Urząd
        svgContent = '<path d="M3 21h18M5 21V7l8-4 8 4v14M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"></path>';
      } else if (poi.icon === 'waves') { // Basen
        svgContent = '<path d="M2 12h20M2 12c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 7.5 0M2 17h20M2 17c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 7.5 0"></path>';
      } else if (poi.icon === 'bus') { // Przystanek
        svgContent = '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><circle cx="15.5" cy="8.5" r="1.5"></circle><circle cx="8.5" cy="15.5" r="1.5"></circle><circle cx="15.5" cy="15.5" r="1.5"></circle>';
      } else { // Default / Przedszkole
         svgContent = '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>'; // Buźka
      }

      const poiHtml = `
        <div class="place-marker-container">
          <svg class="place-marker-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${svgContent}
          </svg>
        </div>
      `;

      // Icon size is 60x60 (container) + padding/border calculation
      const poiIcon = L.divIcon({
        className: 'custom-div-icon',
        html: poiHtml,
        iconSize: [60, 60],
        iconAnchor: [30, 68], // Anchor bottom-center (container height 60 + arrow 8 = 68 approx)
        popupAnchor: [0, -70]
      });

      // Marker
      const marker = L.marker([poi.lat, poi.lng], { icon: poiIcon }).addTo(map);
      marker.bindPopup(`<div style="text-align:center;"><b>${poi.title}</b><br><span style="color:#666">Odległość: ${poi.dist}</span></div>`);

      // Linia łącząca
      const latlngs: L.LatLngExpression[] = [
        [CENTER_LAT, CENTER_LNG],
        [poi.lat, poi.lng]
      ];

      L.polyline(latlngs, {
        color: '#6b7280',
        weight: 3, // Nieco grubsza
        opacity: 0.5,
        dashArray: '5, 10',
        lineCap: 'round'
      }).addTo(map);

      // Label odległości
      let labelLat, labelLng;
      
      if (poi.icon === 'star') {
        labelLat = CENTER_LAT + (poi.lat - CENTER_LAT) * 0.15;
        labelLng = CENTER_LNG + (poi.lng - CENTER_LNG) * 0.15;
      } else {
        labelLat = (CENTER_LAT + poi.lat) / 2;
        labelLng = (CENTER_LNG + poi.lng) / 2;
      }
      
      L.marker([labelLat, labelLng], {
        icon: L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="distance-label">${poi.dist}</div>`,
          iconSize: [60, 20],
          iconAnchor: [30, 10]
        })
      }).addTo(map);
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] relative rounded-2xl overflow-hidden shadow-md border border-gray-100 group z-0">
       <div ref={mapContainerRef} className="absolute inset-0 z-0" style={{ background: '#f3f4f6' }} />
    </div>
  );
};