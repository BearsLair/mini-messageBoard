#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR ( 255 ), date TIMESTAMPTZ DEFAULT NOW(), message TEXT );

INSERT INTO messages (username, message) VALUES ('catty', 'Hi, All!'), ('bippy', 'Hello, there!');
`;

async function main() {
  try {
    console.log("seeding...");
    const client = new Client({
      connectionString: DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (error) {
    console.error("Error seeding db: ", error);
  }
}

main();
