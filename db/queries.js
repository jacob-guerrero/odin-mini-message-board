const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC;"
  );
  return rows;
}

async function insertMessage(user, text) {
  const query = `
    INSERT INTO messages ("user", "text")
    VALUES ($1, $2)
  `;
  const values = [user, text];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function getMessageById(id) {
  const query = `
    SELECT * FROM messages WHERE id = $1;
  `;
  const values = [id];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function updateMessage(id, newText) {
  const query = `
    UPDATE messages 
    SET text = $1
    WHERE id = $2
  `;
  const values = [newText, id];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function deleteMessage(id) {
  const query = `
    DELETE FROM messages WHERE id = $1;
  `;
  const values = [id];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById,
  deleteMessage,
  updateMessage,
};
