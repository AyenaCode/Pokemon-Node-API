const expresss = require("express");
let pokemons = require("./mock-pokemon");
const servFavicon = require("serve-favicon");
const morgan = require("morgan");
const { success, getUniqueId } = require("./_helper");
const bodyParser = require("body-parser");
// const { logger } = require("./Middlewares/logger"); //own middleware

const app = expresss();
const port = 3000;

//Middlewares externes
app
  .use(servFavicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

//-------Route principale avec GET-------
app.get("/", (req, res) => res.send("Hello express")); //endPoint sur la route principal

//Route de tous les pokemons
app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokemons a bien été trouvée";
  res.json(success(message, pokemons));
});

//Route d'un seul pokemon
app.get("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokemon  été trouver";
  res.json(success(message, pokemon));
});

//--------Les POST : Ajouter des resources---------
app.post("/api/pokemons", (req, res) => {
  const id = getUniqueId(pokemons);
  const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } };
  pokemons.push(pokemonCreated);
  const message = `Le pokemon ${pokemonCreated.name} a été crée`;
  res.json(success(message, pokemonCreated));
});

//------Les PUT : Modification--------
app.put("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonUpdated = { ...req.body, id: id };
  pokemons = pokemons.map((pokemon) => {
    return pokemon.id === id ? pokemonUpdated : pokemon;
  });
  const message = `Le pokemon ${pokemonUpdated.name} a bien été modifié`;
  res.json(success(message, pokemonUpdated));
});

//------Les DELETE : Suppression--------
app.delete("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonDeleted = pokemons.find((pokemon) => pokemon.id === id);
  pokemons = pokemons.filter((pokemon) => pokemon.id !== id);
  const message = `Le pokemon ${pokemonDeleted.name} a bien été supprimé`;
  res.json(success(message, pokemonDeleted));
});

//----Lancer le server-------
app.listen(port, () =>
  console.log(`Server is runing : http://localhost:${port}`)
);
