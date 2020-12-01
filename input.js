const { MOVEMENT, MSG } = require('./constants')
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (MOVEMENT.hasOwnProperty(key.toLowerCase())) {
      conn.write(MOVEMENT[key]);
    } else if (MSG.hasOwnProperty(key)) {
      conn.write(MSG[key]);
    }
  });
  return stdin;
};
module.exports = { setupInput }