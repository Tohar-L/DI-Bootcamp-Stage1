// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// // Instructions:
// // 1. Remove Banana from the array.
// // 2. Sort the array in alphabetical order.
// // 3. Add “Kiwi” to the end of the array.
// // 4. Remove “Apples” from the array. Don’t use the same method as in part 1.
// // 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// // 6. At the end you should see this outcome:
// // ["Kiwi", "Oranges", "Blueberries"]

// // 1.
// fruits.splice(0,1);

// // 2.
// fruits.sort();

// // 3.
// fruits.push("kiwi");

// // 4.
// fruits.shift();

// // 5.
// fruits.reverse();


// Exercise 2:
// // Instructions: Access and then console.log “Oranges”.
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// let inside = moreFruits[1];
// let inside2 = inside[1];

let inside = moreFruits[1][1];
