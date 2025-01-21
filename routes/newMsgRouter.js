const { Router } = require("express");

const newMsgRouter = Router();
/* const { messages } = require("../dbLocal"); */
const { addMessage } = require("../controllers/infoController");

newMsgRouter.get("/", (req, res) => res.render("formNewMsg"));

newMsgRouter.post(
  "/",
  addMessage
  /* (req, res) => {
    messages.push({
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date(),
    });

    res.redirect("/");
  } */
);

module.exports = newMsgRouter;
