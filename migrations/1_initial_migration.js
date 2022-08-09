const Counter = artifacts.require("Counter");
const CounterNew = artifacts.require("Counter2");

module.exports = function (deployer) {
  deployer.deploy(CounterNew);
};
