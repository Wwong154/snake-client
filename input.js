let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    switch (key) {
      case '\u0003':
        process.exit();
      case 'w':
        conn.write("Move: up");
        break;
      case 'a':
        conn.write("Move: left");
        break;
      case 's':
        conn.write("Move: down");
        break;
      case 'd':
        conn.write("Move: right");
        break;
    }
  });

  return stdin;
};
module.exports = { setupInput }