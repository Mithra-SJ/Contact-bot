const fetch = require('node-fetch'); // Use older version if ES Module issue

const sendTestNotification = async () => {
  const url = 'http://localhost:3000/notify';
  const message = 'Hello, this is a test notification';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const result = await response.text();
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

sendTestNotification();
