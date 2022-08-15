// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract SimpleStorage {
    uint storedData;

    function set(uint x) external {
        storedData = x;
    }

    function setNum() external {
        storedData = 6;
    }

    function setNump() public {
        storedData = 6;
    }

    function get() external view returns (uint) {
        return storedData;
    }

    function getPub() public view returns (uint) {
        return storedData;
    }
}