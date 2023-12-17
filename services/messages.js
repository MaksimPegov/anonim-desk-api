let messages = [
  "May all your dreams come true!",
  "Wishing you happiness and success!",
  "May you have a wonderful day!",
  "Sending you positive vibes!",
  "Wishing you good health and prosperity!"
];

async function getMessages() {
  return messages;
}

async function deleteMessage(index) {
  messages.splice(index, 1);
}

module.exports = {
  getMessages,
  deleteMessage
};
