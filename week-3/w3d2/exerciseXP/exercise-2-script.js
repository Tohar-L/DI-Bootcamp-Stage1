// 1. Retrieve the form and console.log it.
let form = document.forms[0];

//2. Retrieve the inputs by their id and console.log them.
let firstInput = document.getElementById("fname");
let secondInput = document.getElementById("lname");
let submitInput = document.getElementById("submit");
console.log(firstInput);
console.log(secondInput);
console.log(submitInput);

//3. Retrieve the inputs by their name attribute and console.log them.
let input1 = document.getElementsByName("fname");
let input2 = document.getElementsByName("fname");
console.log(input1);
console.log(input2);

//4. When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? ---to avoid the page from refreshing itself.
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

submit.addEventListener("click",prev);

let value1 = document.getElementById("fname");
let value2 = document.getElementById("lname");
let ul= document.getElementsByClassName("usersAnswer")[0];

function prev(event) {
	event.preventDefault();
	console.log(value1.value);
	console.log(value2.value);

	let li1 = document.createElement("li");
	li1.innerHTML = value1.value;
	let li2 = document.createElement("li");
	li2.innerHTML = value2.value;

	ul.appendChild(li1);
	ul.appendChild(li2);
}