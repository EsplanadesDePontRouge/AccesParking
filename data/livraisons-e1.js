const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// ✅ Fonction de conversion [x, y] → Leaflet [y, x]
function corriger(x, y) {
  return [1007 - y, x];
}

// 🔵 Cheminement E1
const chemin = [
  corriger(990, 520),
  corriger(990, 471),
  corriger(690, 468),
  corriger(680, 273),
  corriger(458, 278)
];

L.polyline(chemin, { color: '#0078D4', weight: 4 }).addTo(map);

// 📍 Points E1 avec labels permanents
L.marker(corriger(458, 231)).addTo(map).bindTooltip("L5", { permanent: true, direction: "top" });
L.marker(corriger(587, 230)).addTo(map).bindTooltip("L6", { permanent: true, direction: "top" });
