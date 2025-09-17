const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS2.png';
const imageSize = [977, 1217];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

const services = [
  { nom: "S6", coord: [977 - 51, 776], groupe: "E1–E2" },
  { nom: "S7", coord: [977 - 996, 792], groupe: "E1–E2" },
  { nom: "S8", coord: [977 - 1119, 860], groupe: "E1–E2" },
  { nom: "S9", coord: [977 - 1119, 878], groupe: "E1–E2" },
  { nom: "S10", coord: [977 - 1112, 947], groupe: "E1–E2" },
  { nom: "S11", coord: [977 - 1148, 718], groupe: "E3" },
  { nom: "S12", coord: [977 - 994, 555], groupe: "ALTO" },
  { nom: "S13", coord: [977 - 996, 414], groupe: "E3" }
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
