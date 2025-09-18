const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Cheminement E3
const chemin = [
  [328, 849],
  [296, 849],
  [251, 849],
  [250, 799],
  [533, 799],
  [533, 990],
  [477, 990]
];

L.polyline(chemin, { color: '#28A745', weight: 4 }).addTo(map);

// Points E3
L.marker([328, 849]).addTo(map).bindPopup("Livraison E3");
L.marker([296, 849]).addTo(map).bindPopup("Livraison E3");
L.marker([251, 849]).addTo(map).bindPopup("Livraison E3");
