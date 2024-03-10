const addon = require("./build/Release/addon");

const SayHello = () => {
  return addon.SayHello();
};

module.exports = { SayHello };
