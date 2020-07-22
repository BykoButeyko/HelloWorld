const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Hello Maki").then(function(){
      instance.getMessage().then(function(message){
        console.log("Current message: " + message);
      })
    });
  });
};
