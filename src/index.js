const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require("./config");
const routes = require("./routes");

const app = express();

// Utilizza il middleware bodyParser per parsare il corpo delle richieste JSON
app.use(bodyParser.json());

// Abilita il CORS per consentire le richieste da qualsiasi origine
app.use(cors());

// Gestisce le varie rotte dell'app, definite su routes.js
app.use(routes);

// Serve l'app alla porta definita
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
