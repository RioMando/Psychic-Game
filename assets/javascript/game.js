// -- Variables --
var letters = ["a","b","c","d","e","f","g"]
var countWin = 0;
var countLoss = 0;
var gessLft = 9;
var toGuess;
var toGuess1;

// -- Functions --
// Function that updates the score...
function updateScore() {
   	var newWin = countWin.toString();
   	var newWin = $("<h3>");
   	$("#wins").append("Wins: " + countWin);
   	console.log("Wins :" + countWin);
}

//updateScore();
function letToGuess(){
	var i = Math.floor(Math.random()*letters.length);
	var toGuess = letters[i];
	console.log("The letter to guess inside function: " + toGuess);

//for (gessLft==9; gessLft > 0; gessLft--){
	
		document.onkeyup = function(event) {
		updateScore();
		
		console.log("gess lft: " + gessLft);
		console.log("let to Guess inside111: " + toGuess);
	    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
	    var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	    if (userInput == toGuess){
			countWin++;
			gessLft=9;
			$("#yourG").empty();
			$("#wins").empty();
			updateScore();
			letToGuess();
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

}

letToGuess();
