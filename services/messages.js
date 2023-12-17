const db = require('./db');

async function getMessages() {
  const sql = 'SELECT * FROM main;';
  const data = await db.query(sql);
  return data;
}

async function addMessage(message) {
  const sql = `INSERT INTO main (text) VALUES (?);`;
  const params = [message.text];
  const data = await db.query(sql, params);
  return data;
}

async function deleteMessage(index) {
  const sql = `DELETE FROM main WHERE id = ?;`;
  const params = [index];
  const data = await db.query(sql, params);
  return data;
}

module.exports = {
  getMessages,
  addMessage,
  deleteMessage
};
