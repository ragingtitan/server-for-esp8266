const { exec } = require('child_process');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  exec('python Video.py', (error, stdout, stderr) => {
    console.log('Executing script...');
    console.log('Error:', error);
    console.log('Stdout:', stdout);
    console.log('Stderr:', stderr);
    
    if (error) {
      res.status(500).send(`Error executing script: ${error.message}`);
      return;
    }
    if (stderr) {
      res.status(500).send(`Script stderr: ${stderr}`);
      return;
    }
    res.send(`Script executed successfully! Output: ${stdout}`);
  });
});

app.listen(80, () => {
  console.log('Server listening on port 3000!');
});
