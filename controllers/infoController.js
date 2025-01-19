// Host
const db = require("../db/queries");

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

  res.render("info", { id: req.params.id, message: message });
}

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function addMessage(req, res) {
  const { messageUser, messageText } = req.body;

  await db.insertMessage(messageUser, messageText);

  res.redirect("/");
}

module.exports = { getMessageById, getAllMessages, addMessage };
