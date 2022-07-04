// let userName = "John";
// let lastName = "Smith";

// if (userName==="John"&& lastName==="Smith"){
//     console.log("he is my friend")
// } 
// else { 
//     console.log("not my friend")
// };




// const language = prompt ("what is your language?").toLowerCase();


// switch (language){
//     case "french"; 
//     console.log("Bonjour")
//     break;
//     case "English";
//     console.log("Hello")
//     break;
//     case "Hebrew";
//     console.log("Shalom")
//     default:console.log(":)")
// }

// if (language==="french"){
//     console.log("Bonjour")};
// else if("language===English"){
//     console.log("Hello")};
// else if("language===Hebrew"){
//     console.log("Shalom")};
// else {
//     console.log(":)");
// }



// LOOPS
// FOR LOOP:
// 1. how many times do you want to do the loop: 5

// syntax:
// for (let Counter = start ; counter < end; increment){
//     // statement
// }


// display "hello" 5 times

for (let counter = 1; counter <= 5; counter = counter+1){
 console.log("hello");
}



// same as:
// for (let counter = 1; counter<=5; counter=counter++){
//     console.log("hello");
// }


// 1st loop-1st turn
// counter = 1
// counter <=5 ->1 <=5 ->true
// console.log("hello");
// counter=2

// // 2nd loop:
// counter = 2;
// counter <=3 -> 2 <=5 ->true
// console.log("hello");
// counter=3


for (let counter = 0; counter < 10; counter++){
    if (counter >=5){
        console.log("great");
    }
    else {
        console.log("bad")}
    }


// lesson exercise:
for (let counter = 0; counter <= 15; counter++){
    if (counter%2 === 0){
        console.log(counter + " is even")
    }
    else {
        console.log(counter + " is odd")
    }
}






// let number = 3;
// number = number+10;
// number +=10;

// let newNum = 3;
// newNum = newnNum +1;
// newNum +=1
// newNum++


// LOOPS AND ARRAYS:
let colors = ["blue", "red", "yellow"];
console.log(colors[0]) //blue
console.log(colors[1]) //red
console.log(colors[2]) //yellow

// on the 3 lines above, everything is common except for the index.
// how can we do it all in 1 line?

let colors = ["blue", "red", "yellow"];
for (let counter = 0; counter <=2; counter++){
    console.log(colors[counter])
}

// this was for 3 items.
// how about more items? we want it to be general for anything that we add:

let colors = ["blue", "red", "yellow", "pink", "black"];
for (let counter = 0; counter <= colors.length; counter++){
    console.log(colors[counter])
}

// but the last loop will be undefined because there is no item 5, and so we will change the condition to be one less - only smaller than:

let colors = ["blue", "red", "yellow", "pink", "black"];
for (let counter = 0; counter < colors.length; counter++){
    console.log(colors[counter])
}


// SUM:
let prices = [23, 15, 34, 10];

1. loop over this array, and console.log the sum of the prices
2. where should you console.log
not good:
let sum = prices[0] + prices [1] + ...



// yes good - a loop: (i for index)
let sum = 0;
for (let i = 0; i < prices.length; i++){
    sum = sum +prices[i]
}
console.log(sum)

// 1st:
// i=0
// sum= sum + prices[i]
// -> sum = 0 + prices [0]
// -> sum = 23

// // 2nd:
// i=1
// sum = sum + prices [1]
// -> sum = 23 + 15
// -> sum = 38
// etc.
.
.
.

// we should write the console.log outside of the loop! because we don't want the price on the current lace, we want the sum of everything.



// EXERCISE 2:
let fruits = ["apple", "banana", "pear", "mellon"];
//instructions: add "s" at the end of every item.
for (let i=0; i<fruits.length; i++){
    fruits [i] =  fruits [i]+"s";
}

console.log(fruits);
//-------finito:)




//EXERCISE 2 IN THE WEBSITE OF DI:
let names= ["john", "sarah", 23, "Rudolf",34]

let sum = 0;
for (let i = 0; i < names.length; i++){
    sum = sum +names[i]
}
console.log(sum)




let colors = ["blue", "red", "yellow", "pink", "black"];
for (let counter = 0; counter < colors.length; counter++){
    console.log(colors[counter])
}
// shorter way - if you just want to retrieve data and not modify the array:
for (let col of colors){
    console.log(col)
}

// the word "col" doesn't matter, it can be "vanilla" or whatever. what matters is the "of":
for (let vanilla of colors){
    console.log(vanilla)
}




let player = {
   username : "jane",
   age : 22,
   levelGame: 15,
   isGoodPlayer: true,
   products: ["gun", "cat", "uniform"],
}

{username : "Mark",
age : 45,
levelGame: 95,
isGoodPlayer: true,
products: ["dog", "arrow"],
}

// to find the name of all the players:
// we used to do:
// console.log(players[0]["username"]);

// new shorter way- unstead of:
for (let i = 0; i<players.length; i++){
    console.log(players[i]["username"])
}


// here, play will take the value of the object:
// in the 1st loop, play is equal to the 1st item
// in the 2nd loop, play is equal to the 2nd item

for (let play of players){
    console.log(play["username"])
}


// // console.log the values of the object:
// console.log(userone["username"])
// console.log(userone["age"])
// console.log(userone["levelgame"])

for (let key in userOne){
    console.log(key)
    // console.log(userOne[key]) ------- we can combine both lines: console.log(key, userOne[key]);
}



// 1st loop overkey: "username"
// console.log(userOne[key]) ->userOne["username"]

// 2nd loop   
// key:"age"
// console.log(userOne[key]) ->userOne["age"]

// WHILE:
let bankAmount = 5000;
let computer = 1000;
let numComputer = 0;

// while (condition){
    // statement
// }


while (bankAmount >=computer){
    console.log("i buy a new computer");
    numComputer++
    bankAmount = bankAmount - computer
}


// 1st loop
// condition true ->
// buy a computer, adding 1 computer, and decrease bankAmount.
// bankAmount = 4000

// 2nd loop:
// conditiontrue ->
// buy a computer, adding 1 computer
// and decrease the bank amount
// bankAmount= 3000

// etc...



// LET DO:
// here we first do and then check. is it still smaller than 5? if yes will continue, if not will stop. it asks us at least once. will enter the loop at least once if the input doesn't match.
// it is the contrary of whole that first checks and the does.
let number = 0;

do {
    console.log("your number is", number);
    number++
} while (number < 5)


// 1st loop
// console.log
// number ++ -> 1

// 1st loop:
// "your num is 3"
// number = 4
// number < 5    ->true. so we enter the loop.

// 2nd loop:
// "your number is 4"
// number = 5
// number < 5  ->false. so we dont enter again the loop



let language = propmt("what is your language?");

do{
    console.log("your language is ", language )
    language = propmt("what is your language?")
} 
while (language =! "french");



let language;
let counter = 5

do{
    language = propmt("what is your language?")
    console.log("your language is ", language )
    counter --
    if (language=="french"){
        goodLanguage = true
    }
    while (language != french) && counter!=0

        if (goodLanguage){
            console.log("great")
        } else {
            console.log("you reached the limit")
        }



