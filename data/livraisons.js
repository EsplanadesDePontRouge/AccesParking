const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const image = 'assets/EPR_SS1.png';
const imageSize = [1000, 1500];
const bounds = [[0,0], imageSize];

L.imageOverlay(image, bounds).addTo(map);
map.fitBounds(bounds);

// Tracés livraisons
const livraisons = [
  {
    nom: "E1",
    chemin: [
      [476, 989],
      [530, 989],
      [530, 690],
      [725, 690],
      [725, 215]
    ],
    point: [725, 215]
  },
  {
    nom: "E2",
    chemin: [
      [475, 990],
      [530, 990],
      [530, 690],
      [725, 690],
      [725, 886]
    ],
    points: [
      [774, 812],
      [776, 887]
    ]
  },
  {
    nom: "E3",
    chemin: [
      [477, 990],
      [533, 990],
      [533, 799],
      [250, 799]
    ],
    points: [
      [328, 849],
      [296, 849],
      [251, 849]
    ]
  },
  {
    nom: "ALTO",
    chemin: [
      [480, 991],
      [529, 991],
      [529, 692],
      [727, 692],
      [727, 287],
      [455, 287]
    ],
    point: [455, 287],
    extra: [391, 287]
  }
];

// Affichage
livraisons.forEach(l => {
  L.polyline(l.chemin, { color: 'blue' }).addTo(map);
  if (l.point) {
    L.marker(l.point).addTo(map).bindPopup(`Livraison ${l.nom}`);
  }
  if (l.points) {
    l.points.forEach(p => {
      L.marker(p).addTo(map).bindPopup(`Livraison ${l.nom}`);
    });
  }
  if (l.extra) {
    L.marker(l.extra).addTo(map).bindPopup(`Livraison ${l.nom}`);
  }
});
