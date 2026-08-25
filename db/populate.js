#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR ( 255 ), date TIMESTAMPTZ DEFAULT NOW(), message TEXT );

INSERT INTO messages (username, message) VALUES ('catty', 'Hi, All!'), ('bippy', 'Hello, there!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://patrick:7154@localhost:5432/mini_messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
