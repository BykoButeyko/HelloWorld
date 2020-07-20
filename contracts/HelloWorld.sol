pragma solidity 0.5.12;

contract HelloWorld {
    string message = "Hello World!";

    function getMessage() public view returns(string memory){
        return message;
    }
}