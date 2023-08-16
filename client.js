const net = require("net");

// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.104', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DPN");
  });

  conn.on("data", (data) => {
      if(data.includes("you ded cuz you idled")) {
        console.log("Server message: ", data);
      }
  });

  return conn;
};

module.exports = { connect };