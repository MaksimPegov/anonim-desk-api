const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const messagesService = require('./services/messages');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/messages', async (req, res) => {
  try {
    const response = await messagesService.getMessages();
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete('/messages/:id', async (req, res) => {
  try {
    const response = await messagesService.deleteMessage(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));