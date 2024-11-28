const db = require("../db");

function getMessageById(req, res) {
  const messageId = Number(req.params.id);

  const message = db.messages[messageId];

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("info", { id: req.params.id, message: message });
}

module.exports = { getMessageById };
  