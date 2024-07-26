const express = require('express');
const cors = require('cors'); // Import cors


const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Enable CORS for all origins
const port = 80;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('Motion detected!');
  console.log(req.body);
  res.sendStatus(205);
});
app.get('/', (req, res) => {
  console.log('Motion detected!');
  console.log(req.body);
  res.sendStatus(205);
});

function captureImage() {
  // Use OpenCV Python code (see below) to capture
  // and save an image from the camera
  // ... (execute Python script using child_process or similar)
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});