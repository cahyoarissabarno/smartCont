const Counter = artifacts.require("Counter");
const CounterNew = artifacts.require("Counter2");
const Counter3 = artifacts.require("Counter3");
const Counter4 = artifacts.require("Counter4");
const Storage = artifacts.require("SimpleStorage");
const TestStorage = artifacts.require("TestStorage");

module.exports = function (deployer) {
  deployer.deploy(TestStorage);
};
