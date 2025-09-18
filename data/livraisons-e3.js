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

// 🟢 Cheminement E3
const chemin = [
  corriger(990, 520),
  corriger(990, 471),
  corriger(800, 472),
  corriger(806, 750)
];
L.polyline(chemin, { color: '#28A745', weight: 4 }).addTo(map);

// 📍 Pings E3
L.marker(corriger(849, 673)).addTo(map).bindTooltip("L1", { permanent: true, direction: "top" });
L.marker(corriger(849, 704)).addTo(map).bindTooltip("L2", { permanent: true, direction: "top" });
L.marker(corriger(850, 746)).addTo(map).bindTooltip("L3", { permanent: true, direction: "top" });
