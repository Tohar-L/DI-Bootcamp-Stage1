// Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
const firstName = users.map((element)=> element['firstName']);
console.log(firstName);

const welcomeStudents = firstName.map((element) => {
	return `Hello ${element}`;
});
console.log('map', welcomeStudents);

//2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const isFullstack = users.filter(element => element['role']=='Full Stack Resident');
console.log(isFullstack);

//3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const lastNameOfResident = isFullstack.map(element => element['lastName']);
console.log(lastNameOfResident);




//Exercise 3 : Star Wars ----finissshhhhhh
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
var epicString = epic.join(' ');
console.log(epicString);

//how is it with reduce?
// for (let i=0; i<epic.length; i++ ){
// 	var word = epic[i];
// 	console.log(word);
// var epicStringee = epic.reduce((accumulator, value) => {
// 	accumulator + value;
// }, 0);
// console.log(epicStringee);
// // }



// Exercise 4 : Employees #2
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

//1. Using the filter() method, create a new array,
// containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method,
// to congratulate the students with their name and course name
// (ie. “Good job Jenner, you passed the course in Information Technology”,
// “Good Job Marco you passed the course in Robotics” ect…)

let isPassed = students.filter((element) => element['isPassed'] == true);
console.log(isPassed);

let congrats = isPassed.forEach((element) => {
	var name = element.name;
	var course = element.course;
	let sentence = `Good job ${name}, you passed the course in ${course}!` 
	console.log(sentence);
});