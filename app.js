const expresss = require("express");

const app = expresss();
const port = 3000;

app.get("/", (req, res) => res.send("Hello express")); //endPoint sur la route principal

app.get("/api/pokemon/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Vous avez demander le pokemon numero ${id}`);
}); //seconde route

app.listen(port, () =>
  console.log(`Notre appli est sur : http://localhost:${port}`)
);
