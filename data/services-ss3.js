const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS3.png';
const imageSize = [993, 1212]; // hauteur, largeur
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
  { nom: "S15", coord: [780, 998],  groupe: "E1-E2" },
  { nom: "S16", coord: [933, 1115], groupe: "E1-E2" },
  { nom: "S17", coord: [705, 1147], groupe: "E3" },
  { nom: "S18", coord: [538, 996],  groupe: "ALTO" },
  { nom: "S19", coord: [401, 1000], groupe: "E3" },
  { nom: "S20", coord: [121, 342],  groupe: "ALTO" }
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
