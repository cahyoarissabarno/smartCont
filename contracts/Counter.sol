// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Counter {

    uint public count;
    
    event Count(string method, uint count, address caller);

    function increase() public {

        count++;

        emit Count('Increase', count, msg.sender);

    }

    function decrease() public {

        count--;
        emit Count('Decrease', count, msg.sender); 

    }

    function getCount() public view returns (uint) {
        return count; 
    }

}