// Host
const db = require("../db/queries");
// Date Formatting
const { format } = require("date-fns");

// Locally
/*
const db = require("../db");
function getMessageById(req, res) {
  const messageId = Number(req.params.id);
  const message = db.messages[messageId];

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("info", { id: req.params.id, message: message });
}*/

async function getMessageById(req, res) {
  const messageId = Number(req.params.id);
  const message = await db.getMessageById(messageId);

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  const formattedMessage = {
    ...message,
    added: format(new Date(message.added), "MMM dd, hh:mm a"),
  };

  res.render("info", { id: messageId, message: formattedMessage });
}

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();

  const formattedMessages = messages.map((message) => ({
    ...message,
    added: format(new Date(message.added), "MMM dd, hh:mm a"),
  }));

  res.render("index", {
    title: "Mini Messageboard",
    messages: formattedMessages,
  });
}

async function addMessage(req, res) {
  const { messageUser, messageText } = req.body;

  await db.insertMessage(messageUser, messageText);

  res.redirect("/");
}

async function updateMessage(req, res) {
  const messageId = Number(req.params.id);
  const { messageText } = req.body;

  await db.updateMessage(messageId, messageText);

  res.redirect("/");
}
async function getMessageToUpdate(req, res) {
  const messageId = Number(req.params.id);
  const message = await db.getMessageById(messageId);

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("formUpdateMsg", { id: messageId, message: message });
}

async function deleteMessage(req, res) {
  const messageId = Number(req.params.id);

  await db.deleteMessage(messageId);

  res.redirect("/");
}

module.exports = {
  getMessageById,
  getAllMessages,
  addMessage,
  updateMessage,
  getMessageToUpdate,
  deleteMessage,
};
