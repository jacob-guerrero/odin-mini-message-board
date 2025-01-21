const { Router } = require("express");
const { getAllMessages } = require("../controllers/infoController");

const indexRouter = Router();
/* const { messages } = require("../dbLocal"); */

indexRouter.get(
  "/",
  getAllMessages
  /* (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }) */
);

module.exports = indexRouter;
