let people = ["Greg", "Mary", "Devon", "James"];

// Exercise 1 : List Of People
// Instructions
// Part I - Review About Arrays
//1. Write code to remove “Greg” from the people array.
people.splice(0,1);


//2. Write code to replace “James” to “Jason”.
people[2] = "Jason";

//3. Write code to add your name to the end of the people array.
people.push("Tohar");

//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let result = people.indexOf("Mary");
console.log(result);

//5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
people.slice(1,3);
console.log(people);

//6. Write code that gives the index of “Foo”. Why does it return -1 ? answer: because there is no item called "foo" in the array.
let res = people.indexOf("foo");
console.log(res);

// 7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[people.length-1];
console.log(last);








// Part II - Loops:
// 1. Using a loop, iterate through the people array and console.log each person.
for (let names of people){
	console.log(names);
}

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
// console.log(people);   = ['Mary', 'Devon', 'Jason', 'Tohar']

// for (let name=0; name <=2; name++){
// 	console.log(people[name]);
// }




// different way - faster in terms of running the loop:
for (let i=0; i<people.length; i++){
	console.log(people[i]);
	if (i===2) break;
}








// Exercise 2 : Your Favorite Colors
// Instructions

// 1. Create an array called colors where the value is a list of your five favorite colors.
let colors = ["burgundy", "white", "gray", "red", "gold"];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i=0; i<colors.length; i++){
	console.log("My #"+ (i+1) + " choice is " + colors[i]);
}




// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let suffix = ["1st", "2nd", "3rd", "4th", "5th"];

for (let i=0; i<colors.length; i++){
	console.log("My "+ suffix[i] + " choice is " + colors[i]);
}


//  Exercise 3 : Repeat The Question
// // Instructions
// 1. Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let person = prompt("Please enter a number", " ");


// 2. While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while ()




// Exercise 4 : Building Management
// Instructions:

let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}

// 1. Copy and paste the above object to your Javascript file.

// 2. Console.log the number of floors in the building.
// let i = Object.values(building);
// console.log(i[0]);
// other better option:
building["numberOfFloors"];


// Console.log how many apartments are on the floors 1 and 3.
// let k = Object.values(i[1]);
// console.log(k[0], k[2]);
// other option:
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);



// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
begining of answer:
let k = building.numberOfRoomsAndRent;
if ((k.sarah[1] + k.david[1]) > k.dan[1]); {
	k.dan[1]=1200;
}
console.log(k);




// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
	father:46,
	mother:43,
	daughter:17,
	sun:12,
}
// Using a for in loop, console.log the keys of the object.

for (let key in family){
	console.log(key);
};

// Using a for in loop, console.log the values of the object.
// my first answer without a loop, as an array: console.log(Object.values(family));
let values = Object.values(family);

// better answer - with a for of loop:
for (let val of Object.values(family)){
	console.log(val)
};

// answer with a for in loop:
for (let val in family) {
	console.log(`${family[val]}`);
}
