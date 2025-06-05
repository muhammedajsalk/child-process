const { exec } = require('child_process');

exec('cd', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Current directory:', stdout);
});
