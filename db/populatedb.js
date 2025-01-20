const { Client } = require("pg");
require("dotenv").config();

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.connectionString
    : process.env.RAILWAY_DATABASE_URL;

// Create the messages table
const createTableQuery = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user" VARCHAR(100) NOT NULL,
    "text" TEXT NOT NULL,
    added TIMESTAMPTZ DEFAULT NOW()
);
`;
// Insert sample messages
const insertMessagesQuery = `
INSERT INTO messages ("user", "text") VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

async function createTableAndInsertData() {
  const client = new Client({ connectionString });

  try {
    // Step 1: Connect to the database
    console.log("Connecting to the database...");
    await client.connect();
    console.log("Connected successfully!");

    console.log("Creating the messages table...");
    await client.query(createTableQuery);
    console.log("Table created successfully!");

    console.log("Inserting sample messages...");
    await client.query(insertMessagesQuery);
    console.log("Sample messages inserted successfully!");
  } catch (err) {
    console.error("Error setting up the database:", err);
  } finally {
    // Close the client connection
    await client.end();
    console.log("Database connection closed.");
  }
}

// Run the script
createTableAndInsertData();
