const net = require("net");
const { IP, PORT } = require("./constants");


// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
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