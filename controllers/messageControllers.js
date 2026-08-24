const db = require("../db/queries");

async function getMessages(req, res) {
  console.log("Retrieving messages from database...");

  try {
    const messages = await db.getAllMessages();
    console.log("messages from database: ", messages);
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getMessages,
};
