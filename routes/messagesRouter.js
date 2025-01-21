const { Router } = require("express");
const {
  getMessageById,
  getMessageToUpdate,
  updateMessage,
} = require("../controllers/infoController");

const messagesRouter = Router();

messagesRouter.get("/:id", getMessageById);

messagesRouter.get("/:id/edit", getMessageToUpdate);
messagesRouter.post("/:id/edit", updateMessage);

module.exports = messagesRouter;
