const addon = require("./build/Release/addon");

const SayHello = () => {
  addon.SayHello();
};

module.exports = { SayHello };
