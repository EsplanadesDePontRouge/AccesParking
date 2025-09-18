const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

function corriger(x, y) {
  return [1007 - y, x];
}

// 🔵 Cheminement E2
const chemin = [
  corriger(990, 520),
  corriger(990, 471),
  corriger(690, 468),
  corriger(680, 273),
  corriger(887, 269)
];
L.polyline(chemin, { color: '#0078D4', weight: 4 }).addTo(map);

// 📍 Pings E2
L.marker(corriger(811, 224)).addTo(map).bindTooltip("L7", { permanent: true, direction: "top" });
L.marker(corriger(886, 222)).addTo(map).bindTooltip("L8", { permanent: true, direction: "top" });
