const { Router } = require("express");

const indexRouter = Router();
const { messages } = require("../db");

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

module.exports = indexRouter;
