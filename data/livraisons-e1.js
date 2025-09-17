const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Cheminement E1
const chemin = [
  [1007 - 215, 725],
  [1007 - 690, 725],
  [1007 - 690, 530],
  [1007 - 989, 530],
  [1007 - 989, 476]
];

L.polyline(chemin, { color: '#0078D4' }).addTo(map);
L.marker([1007 - 215, 725]).addTo(map).bindPopup("Livraison E1");
