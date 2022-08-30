//1. wothout distructure:
function getDetails(name, house, goodstudent) {
	console.log(name, house, goodstudent)
}


//or with destructure:
// function getDetails (objHarry) {
// 	const {name, house, goodstudent} = objHarry;
// 	console.log(name, house, goodstudent);
// }

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})


//2.
function getMoreDetails (friendNew) {
	const {name, house, friend: {friendName, age}} = friendNew;
	console.log(name, house, friendName, age);
}

//also good:
// function getMoreDetails(objCharacter) {
// 	const {name, house,friend:{friendName,age}} = objCharacter
// 	console.log(name, house, friendName, age)
// }


// also good(but just not using destructure):
// function getMoreDetails({name, house,friend:{friendName,age}}) {
// 	console.log(name, house, friendName, age);
// }

getMoreDetails(
	{name: 'Hermione Granger', 
	house: 'Gryfindor', 
	friend :  {
		friendName : 'Harry Potter', 
		age : 20
	}
})





let obj = {
	userName0: 'Santa',
	userName1: 'Rudolf',
	userName2: 'Mr. Grinch'
}

// to turn this into an array that'll go one by one,just use object.keys(obj) ---
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

// displays a list of values:
Object.values(obj).forEach(value => 
	console.log(value));

// turns them in to three different arrays:
Object.entries(obj).forEach(value => 
	console.log(value));

// to create one array:
Object.entries(obj).map(value=>{
	return value[1]+value[0].replace('userName', ' ');
})



const animals = {
	tiger = 17,
	lion = 5,
	giraffe = 12,
	bird = 40
}

function objectSpread (p1,p2,p3){
	console.log(p1);
	console.log(p2)
	console.log(p3);
}

const {tiger, lion, ...rest} = animals;
console.log({tiger, lion, ...rest});