const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const hauteur = 1007;
const imageSize = [hauteur, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Fonction de correction
function corrigerCoord(y, x) {
  return [hauteur - y, x];
}

// Coordonnées brutes [x, y]
const cheminBrut = [
  [455, 287],
  [727, 287],
  [727, 692],
  [529, 692],
  [529, 991],
  [480, 991]
];

const pointsBruts = [
  [455, 287],
  [391, 287]
];

const cheminCorrigé = cheminBrut.map(([x, y]) => corrigerCoord(y, x));
L.polyline(cheminCorrigé, { color: '#FF8800' }).addTo(map);

pointsBruts.forEach(([x, y]) => {
  L.marker(corrigerCoord(y, x)).addTo(map).bindPopup("Livraison ALTO");
});
