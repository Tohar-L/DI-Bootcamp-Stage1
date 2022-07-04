// // Exercise 1: Your Favorite Food

// let favoriteFood = "sushi";
// let favoritemeal = "lunch";
// // console.log("I eat " + favoriteFood + " at every " + favoritemeal);


// // Exercise 2 : Series
// // Part I
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let myWatchedSeriesSentence = (myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]);
// console.log("I watched 3 series :" + myWatchedSeries[0]+ ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]);

// // Part II

// myWatchedSeries[2] = "friends";
// myWatchedSeries.push("Emily in Paris");
// myWatchedSeries.unshift("Anne with an E");
// // console.log(myWatchedSeries);
// // VM367:1 (5) ['Anne with an E', 'black mirror', 'money heist', 'friends', 'Emily in Paris']

// myWatchedSeries.splice(1,1);
// // console.log(myWatchedSeries);
// // VM496:1 (4) ['Anne with an E', 'money heist', 'friends', 'Emily in Paris']

// let slicingWord = myWatchedSeries[1];
// console.log(slicingWord);
// //---- money heist
// let letter = slicingWord.slice(2,3);
// console.log(letter);
// //---- n



// // Exercise 3 : The Temperature Converter
// let celsiusTemperature = 23;
// console.log(celsiusTemperature + "°C");

// let fahrenheitTemperature = celsiusTemperature/5*9+32
// console.log (celsiusTemperature  + "°C is " + fahrenheitTemperature + "°F");



// Exercise 4 : Guess The Answers #1
// let c;
// let a = 34;
// let b = 21;

//     console.log(a+b) //first expression
//     // // Prediction: 55
//     // // Actual: 55

//     a = 2;
    // console.log(a+b) //second expression
    // // Prediction: it will be 23, because we changed the value of a to 2. 
    // // Actual: 55. because we didn't assign the change of a in the right way.

    // 1. What will be the outcome of a + b in the first expression ? --- above
    // 2. What will be the outcome of a + b in the second expression ? ---above
    // 3. What is the value of c? --- there is no assigned value for c.

    // 4. Analyse the code below, what will be the outcome?
    // console.log(3 + 4 + '5');
    // // Prediction: 75
    // // Actual: 75



    // Exercise 5 : Guess The Answers #2
    // typeof(15)
// Prediction: string.
// // Actual: number.

	// typeof(5.5)
// // Prediction: number.
// // Actual: number.

	// typeof(NaN)
// // Prediction: undefined(?)
// // Actual: number.

	// typeof("hello")
// // Prediction: string
// // Actual: string

	// typeof(true)
// // Prediction: boolean
// // Actual: boolean

	// typeof(1 != 2)
// // Prediction: boolean
// // Actual: boolean

	// "hamburger" + "s"
// // Prediction: hambergers.
// // Actual: hambergers.

	// "hamburgers" - "s"
// // Prediction: hamberger
// // Actual: NaN

	// "1" + "3"
// // Prediction: 13
// // Actual: 13

	// "1" - "3"
// // Prediction: NaN
// // Actual: -2

	// "johnny" + 5
// // Prediction: johnny5
// // Actual: johnny5

	// "johnny" - 5
// // Prediction: NaN
// // Actual: NaN

	// 99 * "hello"
// // Prediction: NaN
// // Actual: NaN

	// 1 != 1
// // Prediction: boolean
// // Actual: false

	// 1 == "1"
// // Prediction: true
// // Actual: true

	// 1 === "1"
// // Prediction: false
// // Actual: false






// Exercise 6 : Guess The Answers #3
	// 5 + "34"
// // Prediction: 39
// // Actual: 534

	// 5 - "4"
// // Prediction: 1
// // Actual: 1

	// 10 % 5
// // Prediction: 2
// // Actual: 0 

	// 5 % 10
// // Prediction: 0 or 2 or 5
// // Actual: 5

	// "Java" + "Script"
// // Prediction: JavaScript
// // Actual: JavaScript

	// " " + " "
// // Prediction: "  "
// // Actual: '  '

	// " " + 0
// // Prediction: " "
// // Actual: ' 0'

	// true + true
// // Prediction: truetrue
// // Actual: 2

	// true + false
// // Prediction: 1
// // Actual: 1

	// false + true
// // Prediction: 1
// // Actual: 1

	// false - true
// // Prediction: NaN
// // Actual: -1

	// !true
// // Prediction: false
// // Actual: false

	// 3 - 4
// // Prediction: -1
// // Actual: -1

	// "Bob" - "bill"
// // Prediction: NaN
// // Actual: NaN
