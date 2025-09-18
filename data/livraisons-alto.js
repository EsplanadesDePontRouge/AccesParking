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

// 🟠 Cheminement ALTO
const chemin = [
  corriger(990, 520),
  corriger(990, 471),
  corriger(690, 468),
  corriger(680, 273),
  corriger(292, 275),
  corriger(292, 550)
];
L.polyline(chemin, { color: '#FF8800', weight: 4 }).addTo(map);

// 📍 Pings ALTO
L.marker(corriger(190, 278)).addTo(map).bindTooltip("L4", { permanent: true, direction: "top" });
L.marker(corriger(295, 606)).addTo(map).bindTooltip("Livraisons ALTO", { permanent: true, direction: "top" });
