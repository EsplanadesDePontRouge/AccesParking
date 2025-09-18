const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// ✅ Fonction de correction pour [x, y]
function corriger(x, y) {
  return [1007 - y, x];
}

// 🔵 Cheminement E1 (donné en [x, y])
const cheminBrut = [
  [520, 990],
  [471, 990],
  [468, 690],
  [273, 680],
  [278, 458]
];

const cheminCorrigé = cheminBrut.map(([x, y]) => corriger(x, y));
L.polyline(cheminCorrigé, { color: '#0078D4', weight: 4 }).addTo(map);

// 📍 Points E1
L.marker(corriger(458, 231)).addTo(map).bindPopup("L5 - E1");
L.marker(corriger(587, 230)).addTo(map).bindPopup("L6 - E1");
