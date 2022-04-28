var userButton;
var userInput;
var webOutput;
var outputText;



document.addEventListener('DOMContentLoaded', function(event) {

  /// Init RELLAX for Parallax
  var rellax = new Rellax('.rellax');

  /// Init GLIDE for carousel slideshow
  new Glide('.glide').mount()

  /// Init LOZAD for lazy loading
  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });
  observer.observe();

  userButton = document.getElementById("user-button");
  userInput = document.getElementById("user-input");
  outputText = document.getElementById("output-text");
  webOutput = document.getElementById("web-output");

  userButton.addEventListener("click", function(){
    var webOutput = userInput.value;
    userNumber(webOutput);
  });


  function userNumber(num){
  if (num > 2){
  alert("yikes");
  }
  else {
  alert("not bad");
  }
  console.log(userNum);
  }
});
