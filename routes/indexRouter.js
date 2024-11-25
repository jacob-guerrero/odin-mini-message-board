const { Router } = require("express");

const indexRouter = Router();
const { messages } = require("../db");

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

indexRouter.get("/:id/message", (req, res) =>
  res.render("info", { id: req.params.id, messages: messages })
);

module.exports = indexRouter;
