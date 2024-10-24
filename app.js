const expresss = require("express");
let pokemons = require("./mock-pokemon");
const servFavicon = require("serve-favicon");
const morgan = require("morgan");
const { success, getUniqueId } = require("./_helper");
// const { logger } = require("./Middlewares/logger"); //own middleware

const app = expresss();
const port = 3000;

//Middleware externe
app.use(servFavicon(__dirname + "/favicon.ico")).use(morgan("dev"));

//Route principale
app.get("/", (req, res) => res.send("Hello express")); //endPoint sur la route principal

//tous les pokemons
app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokemons a bien été trouvée";
  res.json(success(message, pokemons));
});

//Un seul pokemon
app.get("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokemon  été trouver";
  res.json(success(message, pokemon));
});

//--------Les post : Ajouter des resources---------
app.post("/api/pokemons", (req, res) => {
  const id = getUniqueId(pokemons);
  const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } };
  pokemons.push(pokemonCreated);
  const message = `Le pokemon ${pokemonCreated.name} a été crée`;
  res.json(success(message, pokemonCreated));
});

//----Lancer le server-------
app.listen(port, () =>
  console.log(`Server is runing : http://localhost:${port}`)
);
