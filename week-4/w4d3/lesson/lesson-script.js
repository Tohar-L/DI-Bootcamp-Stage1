const array = [1,2,10,16];

// const double = [];
// const newArray = array.forEach((number) => {
// 	double.push(number*2);
// })

// console.log('forEach', double);

const mapArray = array.map((number) => {
	return number*2
});
console.log ('map', mapArray);

//same:
// const mapArray = array.map(number => number*2);
// console.log ('map', mapArray);


const filterArray = array.filter (num => num==5);
console.log(filterArray);

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;	
}, 5);
console.log(reduceArray);


const firstArr = [1, 4, 9, 16];
const secondArr = firstArr.map ((value, index) => value*2);
console.log(secondArr);

// myArr = [10,20,30,40];
// let newArr = myArr.map((val, i, arr) => {
// 	return
// 	'value' val,
// 	'index' i,
// });
// console.log(newArr);


// const array1 = [1, 2, 3, 4];
// let result = array1.reduce((accumulator, currentValue) => {
// 	return accumulator+currentValue;
// });
// console.log(result);


//exercise in class:
let party = [
{
	desert: 'Chocolate Mousse',
	calories: 30,
},
{
	desert: 'Apple Pie',
	calories: 15,
},
{
	desert: 'Croissant',
	calories: 50,
},
{
	desert: 'Strawberry Icecream',
	calories: 5,
},
];


//how to remove only apple pie?
const calories = party.map(element => element.calories);
console.log(calories);
// var reducer = (accumulator, calories) => accumulator+calories;
const newCalories = [calories[0], calories[2], calories[3]];
console.log(newCalories);

const sum = newCalories.reduce((accumulator, newCalories) => accumulator+newCalories);
console.log(sum);



//nice!!! ternary apperator inside tervary operator
let speed = 90;
let message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message); // "Fast"


//catching errers
try {

      alert('Start of try runs');  // (1) <--

      lalala; // error, variable is not defined!

      alert('End of try (never reached)');  // (2)

  } catch(err) {

      alert(`Error has occurred!`); // (3) <--

      alert(err.name); // ReferenceError
      alert(err.message); // lalala is not defined
      alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

      // Can also show an error as a whole
      // The error is converted to string as "name: message"
      alert(err); // ReferenceError: lalala is not defined


//something else:
setTimeout(function() {
    var noSuchVariable; // try..catch handles the error!
});


//syntax: 
try {

} catch {
	
}