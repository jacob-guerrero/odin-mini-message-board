const { Router } = require("express");
const {
  getMessageById,
  getMessageToUpdate,
  updateMessage,
  deleteMessage,
} = require("../controllers/infoController");

const messagesRouter = Router();

messagesRouter.get("/:id", getMessageById);

messagesRouter.get("/:id/edit", getMessageToUpdate);
messagesRouter.post("/:id/edit", updateMessage);

messagesRouter.post("/:id/delete", deleteMessage);

module.exports = messagesRouter;
