const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser');
const { configDotenv } = require('dotenv');

const app = express();

configDotenv({path:'secrets.env'})
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('POST request received');
  console.log('Body:', req.body);
  res.send('Hello from the server!');
});

app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Hello from the server!');
});

console.log(port )
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
