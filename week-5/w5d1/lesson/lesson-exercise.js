// # Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)

let jsonString = `
{
	"quiz": {
		"sport": {
			"q1": {
				"question": "Which one is correct team name in NBA?",
				"options": [
				"New York Bulls",
				"Los Angeles Kings",
				"Golden State Warriros",
				"Huston Rocket"
				],
				"answer": "Huston Rocket"
			}
		},
		"maths": {
			"q1": {
				"question": "5 + 7 = ?",
				"options": [
				10,
				11,
				12,
				13
				],
				"answer": 12
			},
			"q2": {
				"question": "12 - 8 = ?",
				"options": [
				1,
				2,
				3,
				4
				],
				"answer": 4
			}
		}
	}
}`

const jsParse = JSON.parse(jsonString);
console.log(jsParse);

const newArr = jsParse.quiz.sport.q1.options;
console.log(newArr);

const jsOptions = JSON.stringify(jsParse, null, 2);
console.log(jsOptions);







//not completed yet:   
let firstForm = document.getElementById("firstForm");
firstForm.addEventListener("submit", retrieveData);

function retrieveData(event) {
	// event.preventDefault();
}


// function retrieveData(event) {
// 	let inputForm = firstForm.elements.username;

// 	if (!isNaN(Number(inputForm.value)){
// 		event.preventDefault();
// 		console.log('WRONG INPUT')
// 	}
// }

// <form action="/signup" method="post" id="signup"></form>






