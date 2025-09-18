const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215]; // hauteur, largeur
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// 🔵 Cheminement E1
const cheminE1 = [
  [520, 990],
  [471, 990],
  [468, 690],
  [273, 680],
  [278, 218]
];

L.polyline(cheminE1, { color: '#0078D4', weight: 4 }).addTo(map);

// 📍 Points E1
L.marker([231, 458]).addTo(map).bindPopup("L5 - E1");
L.marker([230, 587]).addTo(map).bindPopup("L6 - E1");
