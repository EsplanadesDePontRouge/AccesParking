const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS3.png';
const imageSize = [993, 1212];
const bounds = [[0, 0], imageSize];
L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

const services = [
  { nom: "S14", coord: [993 - 541, 128], groupe: "ALTO" },
  { nom: "S15", coord: [993 - 999, 785], groupe: "E1–E2" },
  { nom: "S16", coord: [993 - 1116, 940], groupe: "E1–E2" },
  { nom: "S17", coord: [993 - 1146, 710], groupe: "E3" },
  { nom: "S18", coord: [993 - 998, 547], groupe: "ALTO" },
  { nom: "S19", coord: [993 - 999, 409], groupe: "E3" },
  { nom: "S20", coord: [993 - 342, 129], groupe: "ALTO" }
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
