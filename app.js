const expresss = require("express");

const app = expresss();
const port = 3000;

app.get("/", (req, res) => res.send("Hello express"));

app.listen(port, () =>
  console.log(`Notre appli est sur : http://localhost:${port}`)
);
