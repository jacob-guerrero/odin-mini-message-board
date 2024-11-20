const { Router } = require("express");

const newMsgRouter = Router();

newMsgRouter.get("/new", (req, res) => res.render("new"));

module.exports = newMsgRouter;
