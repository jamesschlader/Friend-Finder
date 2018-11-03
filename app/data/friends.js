var path = require("path");

var friends = [
  {
    name: "Plato",
    photo: path.join(__dirname, "./data/images.plato.jpg"),
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    name: "Patricia Churchland",
    photo: path.join(__dirname, "/images/churchland.jpg"),
    scores: [3, 2, 4, 5, 1, 1, 5, 4, 4, 3]
  },
  {
    name: "David Lewis",
    photo: path.join(__dirname, "/images/davidlewis.jpg"),
    scores: [1, 4, 3, 5, 3, 4, 3, 2, 1, 4]
  },
  {
    name: "Jacques Derrida",
    photo: path.join(__dirname, "/images/derrida.jpg"),
    scores: [3, 2, 5, 4, 2, 1, 5, 3, 2, 1, 5]
  },
  {
    name: "Georg Hegel",
    photo: path.join(__dirname, "/images/hegel.jpg"),
    scores: [4, 2, 4, 3, 1, 5, 4, 3, 2, 3]
  },
  {
    name: "Immanuel Kant",
    photo: path.join(__dirname, "/images/kant.jpg"),
    scores: [2, 5, 4, 3, 2, 3, 4, 2, 5, 1]
  },
  {
    name: "Bertrand Russell",
    photo: path.join(__dirname, "/images/russell.jpg"),
    scores: [3, 5, 3, 4, 2, 3, 4, 5, 3, 5]
  },
  {
    name: "Ludwig von Wittgenstein",
    photo: path.join(__dirname, "/images/wittgenstein.jpg"),
    scores: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
  },
  {
    name: "Jean-Paul Sartre",
    photo: path.join(__dirname, "/images/sartre.jpg"),
    scores: [1, 2, 1, 2, 1, 2, 3, 4, 3, 5]
  }
];

module.exports = friends;
