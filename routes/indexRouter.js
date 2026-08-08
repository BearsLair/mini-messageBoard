const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hello there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "What's up!",
    user: "Kevin",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  console.log("Submitted!");
});

module.exports = indexRouter;
