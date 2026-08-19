const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const indexRouter = require("./routes/indexRouter");
console.log(PORT);

const path = require("node:path");
const { runInThisContext } = require("node:vm");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on port ${PORT}`);
});
