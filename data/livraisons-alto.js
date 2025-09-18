const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Cheminement ALTO
const chemin = [
  [455,1007 - 287],
  [727,1007 - 287],
  [727,1007 - 692],
  [529,1007 - 692],
  [529,1007 - 991],
  [480,1007 - 991]
];

const points = [
  [455,1007 - 287],
  [391,1007 - 287]
];

L.polyline(chemin, { color: '#FF8800' }).addTo(map);
points.forEach(p => {
  L.marker(p).addTo(map).bindPopup("Livraison ALTO");
});

