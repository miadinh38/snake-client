let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

// handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
      process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }  

  // implement some special keys that send messages to the server
  if (key === "h") {
    connection.write("Say: Hello");
  } 
  if (key === "g") {
    connection.write("Say: I love you");
  } 
  if (key === "j") {
    connection.write("Say: Nice day!");
  } 
}


setupInput();

module.exports = { setupInput }; 