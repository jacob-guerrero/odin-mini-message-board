const { Router } = require("express");

const indexRouter = Router();
const { messages } = require("../db");
const { getMessageById } = require("../controllers/infoController");

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

indexRouter.get(
  "/:id/message",
  getMessageById
  /* (req, res) =>
  res.render("info", { id: req.params.id, messages: messages }) */
);

module.exports = indexRouter;
