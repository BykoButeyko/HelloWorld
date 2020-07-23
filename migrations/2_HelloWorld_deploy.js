const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts)  {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Hello Maki", {value: 1000000, from: accounts[2]}).then(function(){
     // instance.getMessage().then(function(message){
     //   console.log("Current message: " + message);
     console.log("Success");
      }).catch(function(err){
      console.log("error: " + err);
    });
  }).catch(function(err){
    console.log("Deploy failed " + err);
  })
};
