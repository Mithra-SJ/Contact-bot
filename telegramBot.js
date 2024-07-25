const fetch = require('node-fetch');

const token = '7236198382:AAFFSckOx-wkRG8Avs46cPy2vB_7VDiSJVg'; // Replace with your bot token from BotFather
const chatId = '7254275672'; // Replace with your chat ID

const sendMessage = async (message) => {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: message,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    if (data.ok) {
      console.log('Message sent successfully');
    } else {
      console.error('Error sending message:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = { sendMessage };
