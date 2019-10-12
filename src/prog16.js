const { spawn } = require('child_process');
const ls = spawn('ls');

ls.stdout.on('data', (data) => {
  console.log(`${data}`);
})
