const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

// 📌 Chargement du plan SS1
const image = 'assets/EPR_SS1.png';
const hauteur = 1007;
const imageSize = [hauteur, 1215];
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// ✅ Fonction de correction des coordonnées
function corrigerCoord(y, x) {
  return [hauteur - y, x];
}

// 📍 Coordonnées brutes (format [x, y])
const cheminBrut = [
  [476, 989],
  [530, 989],
  [530, 690],
  [725, 690],
  [725, 215]
];

const pointsBruts = [
  [725, 215]
];

// 🛠️ Conversion et affichage
const cheminCorrigé = cheminBrut.map(([x, y]) => corrigerCoord(y, x));
L.polyline(cheminCorrigé, { color: '#0078D4', weight: 4 }).addTo(map);

pointsBruts.forEach(([x, y]) => {
  L.marker(corrigerCoord(y, x)).addTo(map).bindPopup("Livraison E1");
});
