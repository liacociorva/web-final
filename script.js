var userButton;
var userInput;
var webOutput;
var outputText;

document.addEventListener('DOMContentLoaded', function(event) {

  new Glide('.glide').mount();

  userButton = document.getElementById("user-button");
  userInput = document.getElementById("user-input");
  outputText = document.getElementById("output-text");
  webOutput = document.getElementById("web-output");

  userButton.addEventListener("click", function(){
    var webOutput = userInput.value;
    userNumber(webOutput);
  });

  function userNumber(num){

    alert("yikes");

  }
})
