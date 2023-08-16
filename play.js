const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const inputConnection = connect();

setupInput(inputConnection);

