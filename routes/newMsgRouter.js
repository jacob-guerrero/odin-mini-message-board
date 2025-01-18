const { Router } = require("express");

const newMsgRouter = Router();
const { messages } = require("../dbLocal");

newMsgRouter.get("/", (req, res) => res.render("form"));

newMsgRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = newMsgRouter;
