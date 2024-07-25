/*const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

const express = require('express');
const { sendMessage } = require('./telegramBot.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/notify', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('Message is required');
  }

  try {
    await sendMessage(message);
    res.status(200).send('Notification sent');
  } catch (error) {
    res.status(500).send('Error sending notification');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
