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

// Create
async function addMessage(req, res) {
  const { messageUser, messageText } = req.body;

  // Validation
  // Ensure user and text are not empty
  if (!messageUser || messageUser.trim() === "") {
    return res.status(400).send("User cannot be empty.");
  }
  if (!messageText || messageText.trim() === "") {
    return res.status(400).send("Message text cannot be empty.");
  }

  // Create
  await db.insertMessage(messageUser.trim(), messageText.trim());

  res.redirect("/");
}

// Read by Id
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

// Update
async function getMessageToUpdate(req, res) {
  const messageId = Number(req.params.id);
  const message = await db.getMessageById(messageId);

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("formUpdateMsg", { id: messageId, message: message });
}
async function updateMessage(req, res) {
  const messageId = Number(req.params.id);
  const { messageText } = req.body;

  // Validation
  // Ensure the input is not empty
  if (!messageText || messageText.trim() === "") {
    return res.status(400).send("Message text cannot be empty.");
  }
  // Fetch the current message to compare
  const currentMessage = await db.getMessageById(messageId);
  if (!currentMessage) {
    return res.status(404).send("Message not found.");
  }
  // Check if the new message is the same as the current one
  if (currentMessage.text === messageText.trim()) {
    return res
      .status(200)
      .send("No changes made. The message is identical to the current one.");
  }

  // Update
  await db.updateMessage(messageId, messageText.trim());

  res.redirect("/");
}

// Delete
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
