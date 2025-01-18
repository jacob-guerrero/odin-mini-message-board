const { Pool } = require("pg");
require("dotenv").config();

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.connectionString
    : process.env.RAILWAY_DATABASE_URL;

module.exports = new Pool({ connectionString });
