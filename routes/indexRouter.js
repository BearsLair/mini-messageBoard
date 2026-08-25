const { Router } = require("express");
const messageControllers = require("../controllers/messageControllers");
const indexRouter = Router();

indexRouter.get("/", messageControllers.getMessages);

indexRouter.get("/message/:id", messageControllers.getSingleMessage);

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
