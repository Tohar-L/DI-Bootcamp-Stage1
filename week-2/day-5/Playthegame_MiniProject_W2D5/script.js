let num;
function playTheGame(){
	if (confirm("would you like to play the game?") == false) {
		alert("No problem, Goodbye");
	} else {  
		if (auth ()){
			let computerNumber = Math.floor(Math.random() *10);
			console.log(computerNumber);
			compareNumbers(num,computerNumber)
		}
	}
}
function auth (){
	num = prompt("pick a number between 0 and 10!")
	if (isNaN(num)) {
		alert("not a number. goodbye");
		return false
	}
	if (num>10 || num<=0) {
		alert("number not in the range. goodbye");
		return false
	}
	return true}

// Second Part

function compareNumbers(userNumber,computerNumber){
	if(userNumber>computerNumber){
		alert("Your number is bigger then the computer’s, guess again");
		if (auth()) {
			compareNumbers(num,computerNumber)
			let i;
			let (i=1; i<4; (i++));{
				console.log(i);
			}
			if (i<4) {
				alert("number not in the range. goodbye");
				return false
			}
		}
	}
	else if (userNumber<computerNumber){
		alert("Your number is smaller then the computer’s, guess again");
		if (auth()) {
			compareNumbers(num,computerNumber)
			let i;
			let (i=1; i<4; (i++));{
				console.log(i);
			}
			if (i<4) {
				alert("number not in the range. goodbye");
				return false
			}
		}
	}
	else if (userNumber==computerNumber){
		alert("WINNER");
	}
}

