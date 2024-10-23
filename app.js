const expresss = require("express");
let pokemons = require("./mock-pokemon");

const app = expresss();
const port = 3000;

app.get("/", (req, res) => res.send("Hello express")); //endPoint sur la route principal

app.get("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  res.json(pokemon);
});

app.get("/api/pokemons", (req, res) => {
  res.send(`Nous avons ${pokemons.length} pokemons à l'état actuel`);
});

//Lancer le server
app.listen(port, () =>
  console.log(`Notre appli est sur : http://localhost:${port}`)
);
