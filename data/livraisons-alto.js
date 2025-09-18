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
  [455, 287],
  [391, 287],
  [455, 287],
  [727, 287],
  [727, 692],
  [529, 692],
  [529, 991],
  [480, 991]
];

L.polyline(chemin, { color: '#FF8800', weight: 4 }).addTo(map);

// Points ALTO
L.marker([455, 287]).addTo(map).bindPopup("Livraison ALTO");
L.marker([391, 287]).addTo(map).bindPopup("Livraison ALTO");
