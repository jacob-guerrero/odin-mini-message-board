const { Pool } = require("pg");
require("dotenv").config();

const connectionString =
  process.env.RAILWAY_DATABASE_URL || process.env.connectionString;

module.exports = new Pool({ connectionString });
