const PORT = 8081;
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

let dotenvPath = "./.env";

let ORIGIN_URL = "";
if (process.env.NODE_ENV === "production") {
  console.log("running in production!");
  ORIGIN_URL = "*";
  dotenvPath = "./.env";
} else {
  console.log("running in development!");
  ORIGIN_URL = "*";
  dotenvPath = "./.env";
}

require("dotenv").config({ path: dotenvPath });

// Postgres database connection set up
const dbParams = require("./db/dbParams");

const db = new Pool(dbParams);
db.connect(() => console.log("✅ connected to db"));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: ORIGIN_URL,
};
app.use(cors(corsOptions));

// --------------------- ROUTES ------------------------ //

// request for ppp data
app.get(`/data/:ppp`, (req, res) => {
  const queryText = `SELECT * FROM poverty
                     WHERE poverty_level = $1;`;

  const values = [req.params.ppp];

  db.query(queryText, values)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
});

// -------------------------------------------------- //
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
