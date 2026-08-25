const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error("db retrieval error: ", error);
  }
}

async function getSingleMessage(id) {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("db retrieval error: ", error);
  }
}

async function postNewMessage(username, message) {
  try {
    await pool.query(
      "INSERT INTO messages (username, message) VALUES (($1), ($2))",
      [username, message],
    );
    console.log("Message posted to db");
  } catch (error) {
    console.error("db insert error: ", error);
  }
}

module.exports = {
  getAllMessages,
  getSingleMessage,
  postNewMessage,
};
