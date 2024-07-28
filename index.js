const express = require('express');
const NodeWebcam = require('node-webcam');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8000;

const videoCapture = (callback) => {
  const opts = {
    width: 1366,
    height: 768,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
  };

  // Create webcam instance
  const Webcam = NodeWebcam.create(opts);

  // Generate a sanitized filename
  const generateFilename = () => {
    const now = new Date();
    const timestamp = now.toISOString().replace(/:/g, '-').replace(/\./g, '-');
    return `test_picture_${timestamp}`;
  };

  const filename = generateFilename();

  // Capture an image
  Webcam.capture(filename, function(err, data) {
    if (err) {
      console.error("Error capturing image: ", err);
      callback(err, null);
    } else {
      console.log("Image captured and saved at: ", data);
      callback(null, data);
    }
  });
};

app.get('/', async (req, res) => {
  videoCapture((err, data) => {
    if (err) {
      res.status(500).send("Error capturing image");
    } else {
      res.status(200).send(`Image captured and saved at: ${data}`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
