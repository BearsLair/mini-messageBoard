const express = require("express");
const app = express();
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");

const path = require("node:path");
const { runInThisContext } = require("node:vm");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on port ${PORT}`);
});
