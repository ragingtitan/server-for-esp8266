const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser');
const { configDotenv } = require('dotenv');
const { exec } = require('child_process');

const app = express();

configDotenv({ path: 'secrets.env' });
const port = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('POST request received');
  console.log('Body:', req.body);

  // Run the Python script to capture an image
  exec('./VideoDetection.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return res.status(500).send('Error capturing image');
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
    }
    console.log(`Script output: ${stdout}`);
    res.send('Image captured!');
  });
});

app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Hello from the server!');
});

console.log(port)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
