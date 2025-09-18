const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215]; // hauteur, largeur
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// 🎨 Couleurs par groupe
const couleurs = {
  "E1-E2": "#0078D4",
  "E3": "#28A745",
  "ALTO": "#FF8800"
};

// 📍 Coordonnées déjà converties pour SS1
const services = [
  { nom: "S1", coord: [562, 724], groupe: "ALTO" },   // 1007 - 445
  { nom: "S2", coord: [579, 723], groupe: "E3" },     // 1007 - 428
  { nom: "S3", coord: [596, 722], groupe: "ALTO" },   // 1007 - 411
  { nom: "S4", coord: [785, 998], groupe: "E1-E2" },  // 1007 - 222
  { nom: "S5", coord: [491, 855], groupe: "E3" }      // 1007 - 516
];

// 📌 Marqueurs filtrables
const marqueurs = [];

services.forEach(s => {
  const marker = L.circleMarker(s.coord, {
    radius: 8,
    color: couleurs[s.groupe],
    fillColor: couleurs[s.groupe],
    fillOpacity: 0.9
  }).addTo(map);

  marker.bindTooltip(s.nom, { permanent: true, direction: "top" });
  marker.groupe = s.groupe;
  marqueurs.push(marker);
});

// 🧪 Fonction de filtre
function filtrer(groupe) {
  marqueurs.forEach(m => {
    if (groupe === 'all' || m.groupe === groupe) {
      m.addTo(map);
    } else {
      map.removeLayer(m);
    }
  });
}
