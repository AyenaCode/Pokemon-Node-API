const expresss = require("express");
let pokemons = require("./mock-pokemon");
const { success } = require("./_helper");

const app = expresss();
const port = 3000;

app.get("/", (req, res) => res.send("Hello express")); //endPoint sur la route principal

app.get("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokemon  été trouver";
  res.json(success(message, pokemon));
});

//tous les
app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokemons a bien été trouvée";
  res.json(success(message, pokemons));
});

//Lancer le server
app.listen(port, () =>
  console.log(`Server is runing : http://localhost:${port}`)
);
