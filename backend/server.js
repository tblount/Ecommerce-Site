const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
