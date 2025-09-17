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
  [1007 - 886, 725],
  [1007 - 690, 725],
  [1007 - 690, 530],
  [1007 - 990, 530],
  [1007 - 990, 475]
];

const points = [
  [1007 - 812, 774],
  [1007 - 887, 776]
];

L.polyline(chemin, { color: '#0078D4' }).addTo(map);
points.forEach(p => {
  L.marker(p).addTo(map).bindPopup("Livraison E2");
});
