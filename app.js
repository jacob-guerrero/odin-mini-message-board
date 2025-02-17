const express = require("express");
const path = require("node:path");
const app = express();

/* Import Routes */
const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");
const messagesRouter = require("./routes/messagesRouter");

/* Styles */
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* Parse form data */
app.use(express.urlencoded({ extended: true }));

/* Views */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.use("/", indexRouter);
app.use("/new", newMsgRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
