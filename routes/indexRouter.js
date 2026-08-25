const { Router } = require("express");
const messageControllers = require("../controllers/messageControllers");
const indexRouter = Router();

indexRouter.get("/", messageControllers.getMessages);

indexRouter.get("/message/:id", messageControllers.getSingleMessage);

indexRouter.get("/new", messageControllers.getNewMessageForm);

indexRouter.post("/new", messageControllers.postNewMessage);

module.exports = indexRouter;
