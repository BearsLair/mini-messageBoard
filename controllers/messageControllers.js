const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (err) {
    console.error(err);
  }
}

async function getSingleMessage(req, res) {
  try {
    const { id } = req.params;
    const message = await db.getSingleMessage(id);
    res.render("message", { message: message[0] });
  } catch (err) {
    console.error("Single message error: ", err);
  }
}

async function getNewMessageForm(req, res) {
  try {
    res.render("form");
  } catch (err) {
    console.error("Error rendering form: ", err);
  }
}

async function postNewMessage(req, res) {
  try {
    const { username, message } = req.body;
    db.postNewMessage(username, message);
    res.redirect("/");
  } catch (err) {
    console.error("post message request error: ", err);
  }
}

module.exports = {
  getMessages,
  getSingleMessage,
  getNewMessageForm,
  postNewMessage,
};
