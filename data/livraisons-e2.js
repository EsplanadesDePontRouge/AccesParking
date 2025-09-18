const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Cheminement E2
const chemin = [
  [774, 812],
  [776, 887],
  [725, 886],
  [725, 690],
  [530, 690],
  [530, 990],
  [475, 990]
];

L.polyline(chemin, { color: '#0078D4', weight: 4 }).addTo(map);

// Points E2
L.marker([774, 812]).addTo(map).bindPopup("Livraison E2");
L.marker([776, 887]).addTo(map).bindPopup("Livraison E2");
