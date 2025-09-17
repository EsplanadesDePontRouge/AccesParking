const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1000, 1500];
const bounds = [[0,0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Points services
const services = [
  { nom: "S1", coord: [553, 724], groupe: "ALTO" },
  { nom: "S2", coord: [572, 724], groupe: "E3" },
  { nom: "S3", coord: [590, 724], groupe: "ALTO" },
  { nom: "S4", coord: [779, 997], groupe: "E1–E2" },
  { nom: "S5", coord: [484, 853], groupe: "E3" },
  { nom: "S6", coord: [776, 51], groupe: "E1–E2" },
  { nom: "S7", coord: [792, 996], groupe: "E1–E2" },
  { nom: "S8", coord: [860, 1119], groupe: "E1–E2" },
  { nom: "S9", coord: [878, 1119], groupe: "E1–E2" },
  { nom: "S10", coord: [947, 1112], groupe: "E1–E2" },
  { nom: "S11", coord: [718, 1148], groupe: "E3" },
  { nom: "S12", coord: [555, 994], groupe: "ALTO" },
  { nom: "S13", coord: [414, 996], groupe: "E3" },
  { nom: "S14", coord: [128, 541], groupe: "ALTO" },
  { nom: "S15", coord: [785, 999], groupe: "E1–E2" },
  { nom: "S16", coord: [940, 1116], groupe: "E1–E2" },
  { nom: "S17", coord: [710, 1146], groupe: "E3" },
  { nom: "S18", coord: [547, 998], groupe: "ALTO" },
  { nom: "S19", coord: [409, 999], groupe: "E3" },
  { nom: "S20", coord: [129, 342], groupe: "ALTO" }
];

const couleurs = {
  "E1–E2": "#0078D4",
  "E3": "#28A745",
  "ALTO": "#FF8800"
};

const marqueurs = [];

services.forEach(s => {
  const marker = L.circleMarker(s.coord, {
    radius: 8,
    color: couleurs[s.groupe],
    fillColor: couleurs[s.groupe],
    fillOpacity: 0.9
  }).addTo(map).bindPopup(`${s.nom} - ${s.groupe}`);
  marker.groupe = s.groupe;
  marqueurs.push(marker);
});

function filtrer(groupe) {
  marqueurs.forEach(m => {
    if (groupe === 'all' || m.groupe === groupe) {
      m.addTo(map);
    } else {
      map.removeLayer(m);
    }
  });
}
