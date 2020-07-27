const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
    it("should initialize correctly", async function(){
        let instance = await HelloWorld.deployed();
        let message = await instance.getMessage();
        assert(message === "Hello Maki", "Message should be Hello Again!"); 
    });
});