// function doSomething() {
// 	console.log(x);
// 	var x=1;
// }

// function doSomething(){
// 	console.log(x);
// 	let x=1; //-----won't be defined and will b an errer.
// }

// function doSomething(){
// 	var x=1;
// 	var x=2;
// 	console.log("x: ", x);
// }

//not good:
// function checkAge(age) {
// 	if (age < 18) {
// 		const message = "Sorry, you're too young.";
// 	} else {
// 		const message = "Yay! You're old enough!";
// 	}

// 	return message;
// 	console.log(checkAge(21));
// }

// function numbers() {
// 	for (let i = 0; i < 5; i += 1) {
// 		console.log(i);
// 	}
// 	console.log(i);
// }
// numbers();

// function multiply(a, b=1){
// 	return a*b;
// }

// console.log(multiply(5,2));
// function myFunc (x, y) {
// 	return x + y;
// }

// myFunc(2,9);

// const myFunc1 = (x, y) => {
// 	return x + y;
// }

// myFunc1(6,7)

// function getFee(isMember){
// 	return (isMember ? "$2.00" : "$10.00")
// }
// console.log(getFee(true));

// console.log(getFee(false));

// console.log(getFee(1));

// function checkYear(year){
// 	var year = prompt ("what year is it?")
// 	if (year>2000) {
// 		alert("You are in the 21st century");
// 	} else {
// 		alert("You live in the Middle Age");
// 	}
// }

// function checkYear(year){
// 	if (year>2000) {
// 		alert("You are in the 21st century");
// 	} else {
// 		alert("You live in the Middle Age");
// 	}
// }



// // This I didn't understand!:
// function calculator(a , b){
// 	var calculator=(a-b);
// 	var calculato=(a*b);
// 	return(calculator);
// 	return(calculato);
// 	return(a-b);
// }

//works beautifully:
// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a+b} and not ${2*a+b}.`);
// // "Fifteen is 15 and
// // not 20."

//works beautifully:
// function sum(){
// 	let sum=0;
// 	for (let i=0; i<arguments.length; i++){
// 		sum += arguments[i];
// 	}
// 	return(sum);
// }

// console.log(sum(2,3));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4,5));


//works beautifully:
// const sum = (...args) => {
// 	let sum = 0;
// 	for (let i = 0; i<args.length; i++) {
// 		sum += args[i];
// 	}
// 	return sum;
// }
// console.log(sum(2,3));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4,5));


//don't know why doesn't work:
// const multiply = (pool) => {
// 	var multiply = 1;
// 	for (let i=1; i<pool.length; i++) {
// 		multiply = multiply*pool[i];
// 	}
// 	return multiply;
// }

// function multiply(a,b) {
// 	var multiply = 1;
// 	for (let i=1; i<pool.length; i++) {
// 		multiply = multiply*pool[i];
// 	}
// 	return multiply;
// }

// console.log(multiply(2,3));
// console.log(multiply(2,3,4));
// console.log(multiply(2,3,6,0));

//video:
// var b = "can I access this?";

// function bb() {
// 	a = "hello";
// 	console.log(a);
// }

// var fun = 5;
// function funFunction() {
// 	var fun = "hellooo";
// 	console.log(1, fun);
// }
// function funerFunction() {
// 	var fun = "byeee";
// 	console.log(2, fun);
// }
// function funestFunction() {
// 	var fun = "ahhhhh";
// 	console.log(3, fun);
// }

// console.log ("window", fun);
// funFunction();
// funerFunction();
// funestFunction();
// console.log(fun);


function isUserValid (bool) {
	return bool;
}
var answer = isUserValid(false)? "you may enter" : "access denied";

var automatedAnswer = `your access is ${isUserValid(true)? 1234 : "notavailble"}`


function sum() {
	let answer = 0
	return answer +=somethin[i];
}
function multiply() {
	let answer = 1
	return answer *=somethin[i];
}
function minus() {
	let answer;
	return answer -=somethin[i]

}

function trying(somethin) {
	var somethin = (a , b);
	for (let i=0; i<somethin.length; i++)
		if (sum) {
			return (sum);
		} else if (multiply) {
			return (multiply);
		}
		else if (minus) {
			return (minus);
		}
		console.log(3,6)
	}
