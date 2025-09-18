const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1007, 1215];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// 🎨 Couleurs par groupe
const couleurs = {
  "E1–E2": "#0078D4",
  "E3": "#28A745",
  "ALTO": "#FF8800",
  "TEST": "#FF00FF"
};

// 📍 Coordonnées brutes [y, x]
const services = [
  { nom: "S1", coord: [553, 724], groupe: "ALTO" },
  { nom: "S2", coord: [572, 724], groupe: "E3" },
  { nom: "S3", coord: [590, 724], groupe: "ALTO" },
  { nom: "S4", coord: [997, 779], groupe: "E1–E2" },
  { nom: "S5", coord: [853, 484], groupe: "E3" },

  // 🧪 Pings de test
  { nom: "T1", coord: [100, 100], groupe: "TEST" },
  { nom: "T2", coord: [500, 500], groupe: "TEST" },
  { nom: "T3", coord: [900, 900], groupe: "TEST" },
  { nom: "T4", coord: [997, 1215], groupe: "TEST" },
  { nom: "T5", coord: [0, 0], groupe: "TEST" }
];

// 📌 Marqueurs
services.forEach(s => {
  const marker = L.circleMarker(s.coord, {
    radius: 8,
    color: couleurs[s.groupe],
    fillColor: couleurs[s.groupe],
    fillOpacity: 0.9
  }).addTo(map);

  marker.bindTooltip(s.nom, { permanent: true, direction: "top" });
});
