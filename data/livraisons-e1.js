const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215]; // hauteur, largeur
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// ✅ Fonction de correction
function corriger(y, x) {
  return [1007 - y, x];
}

// 🔵 Cheminement E1 corrigé
const cheminBrut = [
  [990, 520],
  [990, 471],
  [690, 468],
  [680, 273],
  [458, 278]
];

const cheminCorrigé = cheminBrut.map(([y, x]) => corriger(y, x));
L.polyline(cheminCorrigé, { color: '#0078D4', weight: 4 }).addTo(map);

// 📍 Points E1
L.marker(corriger(231, 458)).addTo(map).bindPopup("L5 - E1");
L.marker(corriger(230, 587)).addTo(map).bindPopup("L6 - E1");
