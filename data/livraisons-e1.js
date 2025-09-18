const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

// 📌 Chargement du plan SS1
const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215]; // hauteur, largeur
const bounds = [[0, 0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// 📍 Coordonnées directes (déjà au format [y, x])
const chemin = [
  [476, 989],
  [530, 989],
  [530, 690],
  [725, 690],
  [725, 215]
];

L.polyline(chemin, { color: '#0078D4', weight: 4 }).addTo(map);
L.marker([725, 215]).addTo(map).bindPopup("Livraison E1");
