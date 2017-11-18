var letters = ["a","b","c","d","e","f","g"]
var countWin = 0;
var countLoss = 0;
var gssLft = 5;


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

    // If there are no more left guessings, stop the function.
    if (gssLft === 0) {
        return;
    }

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	var charCode = userInput.charCodeAt(0);
		console.log(userInput);
		console.log(charCode);

}


 
/**
      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("yourG");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
//        console.log("userText =" + userText.textContent );         
      };
**/
