const { Router } = require("express");
const messageControllers = require("../controllers/messageControllers");
const indexRouter = Router();
const { validators } = require("../middleware/validators");

indexRouter.get("/", messageControllers.getMessages);

indexRouter.get("/message/:id", messageControllers.getSingleMessage);

indexRouter.get("/new", messageControllers.getNewMessageForm);

// Validator inserted BEFORE form input controller
indexRouter.post("/new", validators, messageControllers.postNewMessage);

module.exports = indexRouter;
