const PORT = 8081;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
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
  origin: ORIGIN_URL, // ORIGIN_URL
};
app.use(cors(corsOptions));

// ---------------------ROUTES------------------------ //

// test request to database
app.get("/test", (req, res) => {
  const queryText = `SELECT * FROM poverty;`;

  db.query(queryText)
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
