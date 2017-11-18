// -- Variables --
var letters = ["a","b","c","d","e","f","g"]
var countWin = 0;
var countLoss = 0;
var gessLft = 9;
var toGuess = "z";
// -- Functions --
// Function that updates the score...
function updateScore() {
   	var newWin = countWin.toString();
   	var newWin = $("<h3>");
   	$("#wins").append("Wins: " + countWin);
   	console.log("Wins :" + countWin);
}



// -- Main Process --
/**-----------------------------------------------------------**/
/**Calling functions to start the game**/


//Randomly selection of letter from array letters

//Random number for the length of the array 
function lettToGuess(){
	var i = Math.floor(Math.random()*letters.length);
	var toGuess = letters[i];
	console.log("The letter to guess is: " + toGuess);
}





//for (gessLft==9; gessLft > 0; gessLft--){
	
		
		document.onkeyup = function(event) {
		lettToGuess();
		updateScore();
		console.log("gess lft: " + gessLft);
	    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
	    var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	    if (userInput == toGuess){
			countWin++;
			gessLft=9;
			$("#yourG").empty();
			$("#wins").empty();
			updateScore();
		}
		else{
			// Only run this code if is typed a character between "a" and "z".
		    if ((userInput >= "a") && (userInput <= "z")){
					console.log(userInput);
				var lett = $("<h3>");
				$("#yourG").append(userInput);
//				countWin++;
				$("#wins").empty();
				updateScore();	
			}
		}
	

	gessLft--;
	}
//}

 
/**
      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("yourG");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
//        console.log("userText =" + userText.textContent );         
      };
**/
