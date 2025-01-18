const { Router } = require("express");

const indexRouter = Router();
/* const { messages } = require("../dbLocal"); */
const {
  getMessageById,
  getAllMessages,
} = require("../controllers/infoController");

indexRouter.get(
  "/",
  getAllMessages
  /* (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }) */
);

indexRouter.get(
  "/:id/message",
  getMessageById
  /* (req, res) =>
  res.render("info", { id: req.params.id, messages: messages }) */
);

module.exports = indexRouter;
