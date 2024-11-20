const express = require("express");
const path = require("node:path");
const app = express();

/* Import Routes */
const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");

/* Styles */
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* Views */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.get("/", indexRouter);
app.get("/new", newMsgRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
