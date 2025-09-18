const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// ✅ Fonction de conversion [x, y] → Leaflet [y, x]
function corriger(x, y) {
  return [1007 - y, x];
}

// 🎨 Couleurs par groupe
const couleurs = {
  "E1–E2": "#0078D4",
  "E3": "#28A745",
  "ALTO": "#FF8800"
};

// 📍 Liste des services SS1
const services = [
  { nom: "S1", coord: corriger(724, 553), groupe: "ALTO" },
  { nom: "S2", coord: corriger(724, 572), groupe: "E3" },
  { nom: "S3", coord: corriger(724, 590), groupe: "ALTO" },
  { nom: "S4", coord: corriger(997, 779), groupe: "E1–E2" },
  { nom: "S5", coord: corriger(853, 484), groupe: "E3" }
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
