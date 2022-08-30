//Exercise 1 : Location
//Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//expected output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// Exercise 2: Display Student Info
//destructure the parameter inside the function and return a string as the example:
// 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});



// Exercise 3: User & Id
//  turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = {user1: 18273, user2: 92833, user3: 90315 }

Object.entries(users).map(value =>
    console.log(value),
    );

// // Modify the outcome of part 1, by multipling the user’s ID by 2.
Object.entries(users).map(value => {
    return (`${value[0]}  ${value[1]*2}`);
});

//the right way with the methodes we learned now:
// const usersArray = Object.entries(users);
// console.log(usersArray);

// for (var [key, value] of usersArray){
//     console.log(`'${key}' ${value*2}`)
// }



//Exercise 5 : Dog Class
class Dog {
  constructor(name) {
    this.name = name;
}
};

//The constructor that will successfully extend the Dog class is:
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
}
};



// Exercise 6 : Challenges
//Evaluate these (ie True or False)
[2] === [2]   //false
// {} === {}  //false

//What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };  //object1['number'] = 5
const object2 = object1; // 5
const object3 = object2; //5
const object4 = { number: 5}; //5

object1.number = 4;//4
console.log(object2.number) //4. because it takes it's values from the object1 input.
console.log(object3.number)//4. because it takes it's values from the object1 input.
console.log(object4.number) //5. because it has a different scope of it's own.


//Create a class Animal with the attributes name, type and color.
// The type is the animal type, for example: dog, cat, dolphin ect …

class Animal { 
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    play() {
        console.log(this.type);
    }
}

class Mamal extends Animal {
    constructor (name, type, color, sound) {
        super(name, type, color);
        this.sound = sound;
    }
    soundOfAnimal() {

        console.log (this.name, this.type, this.color);
        // return ();
    }
    
}

const lion = new Mamal ('lion', 'predator', 'yellow', 'roar');
const monkey = new Mamal ('monkey', 'Mamal', 'brown', 'ohhoh');
// const bird = new Mamal ('bird', 'fly', 'blue', 'chirp');

// console.log(Lion);
//Create a class Mamal that extends from the Animal class.
// Inside the class, add a method called sound().
// This method takes a parameter: the sound the animal makes,
// and returns the details of the animal (name, type and color)
//as well as the sound it makes.