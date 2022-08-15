// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Counter4 {
    uint count;

    // Function to get the current count
    function get() external view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() external {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() external {
        // This function will fail if count = 0
        count -= 1;
    }
}
