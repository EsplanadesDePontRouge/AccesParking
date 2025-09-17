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
  [1007 - 799, 250],
  [1007 - 799, 533],
  [1007 - 990, 533],
  [1007 - 990, 477]
];

const points = [
  [1007 - 849, 328],
  [1007 - 849, 296],
  [1007 - 849, 251]
];

L.polyline(chemin, { color: '#28A745' }).addTo(map);
points.forEach(p => {
  L.marker(p).addTo(map).bindPopup("Livraison E3");
});
