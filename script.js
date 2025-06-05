const { spawn } = require('child_process');

const child = spawn('cmd', ['/c', 'type', 'aju.txt']);

let buffer = '';        // Store incoming data
let printing = false;   // Flag to avoid multiple timers

child.stdout.on('data', (chunk) => {
  buffer += chunk.toString();

  if (!printing) {
    printing = true;
    slowPrint();
  }
});

child.stderr.on('data', (err) => {
  console.error('Error:', err.toString());
});

child.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

function slowPrint() {
  if (buffer.length === 0) {
    printing = false;
    return;
  }

  // Print 10 characters at a time (you can adjust this)
  const chunk = buffer.slice(0, 100);
  buffer = buffer.slice(10);

  process.stdout.write(chunk);

  // Wait 200ms before printing next chunk (adjust speed here)
  setTimeout(slowPrint, 200);
}

