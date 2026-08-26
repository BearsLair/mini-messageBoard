const db = require("../db/queries");
const { validationResult } = require("express-validator");

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
    // formData passed as null since no user input yet
    res.render("form", { formData: {} });
  } catch (err) {
    console.error("Error rendering form: ", err);
  }
}

async function postNewMessage(req, res) {
  try {
    // Retrieve validations errors from request
    const errors = validationResult(req);

    // Stop execution and display errors if errors found
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(), // Converts errors to array for iteration
        formData: req.body, // Pass back entered data so user doesn't have re-enter it
      });
    }

    // No errors? Resume with database logic
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
