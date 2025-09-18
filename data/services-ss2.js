const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS2.png';
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

// 📍 Coordonnées déjà converties
const services = [
  { nom: "S6",  coord: [783, 51],    groupe: "E1-E2" },
  { nom: "S7",  coord: [801, 997],   groupe: "E1-E2" },
  { nom: "S8",  coord: [866, 1119],  groupe: "E1-E2" },
  { nom: "S9",  coord: [884, 1119],  groupe: "E1-E2" },
  { nom: "S10", coord: [955, 1113],  groupe: "E1-E2" },
  { nom: "S11", coord: [728, 1143],  groupe: "E3" },
  { nom: "S12", coord: [563, 993],   groupe: "ALTO" },
  { nom: "S13", coord: [421, 996],   groupe: "E3" },
  { nom: "S14", coord: [134, 541],   groupe: "ALTO" }
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
