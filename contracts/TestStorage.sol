// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract TestStorage {
    string public storedData;

    function set(string memory data) external {
        storedData = data;
    }

    function get() external view returns (string memory) {
        return storedData;
    }
}