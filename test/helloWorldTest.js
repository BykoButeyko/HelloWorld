const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
    it("should initialize correctly", async function(){
        let instance = await HelloWorld.deployed();
        let message = await instance.getMessage();
        assert(message === "Hello Maki", "Message should be Hello Again!"); 
    });
    it("should set the message correctly", async function(){
        let instance = await HelloWorld.deployed();
        await instance.setMessage("Testing Message");
        let message = await instance.getMessage();
        assert(message === "Testing Message",
        "Message should be the same as we set it to");
    });
});