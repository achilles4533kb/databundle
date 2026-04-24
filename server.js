const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/webhook', async (req, res) => {
  const event = req.body;

  if (event.event === 'charge.success') {
    const phone = event.data.metadata.phone;

    // Send data (replace with your vendor API)
    await axios.post('https://api.vendor.com/send', {
      phone: phone,
      plan: "1GB"
    });

    console.log("Data sent to:", phone);
  }

  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running'));
