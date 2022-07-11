// exercise-3





























function isString (string) {
    return string;
}

function isString (arguments) {
    return (typeof arguments);
}

function checking() {
    if (isString == String) {
        return (true)
    } else {
        return (false)
    }
}
var isString = () => {
    let isString;
    for (let i=0; i<arguments.length; i++) {
        typeof arguments[i]
    }
    return (isString);
}


// works beautifully:
// function sum(){
//  let sum=0;
//  for (let i=0; i<arguments.length; i++){
//      sum += arguments[i];
//  }
//  return(sum);
// }

// console.log(sum(2,3));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4,5));





// var isString = () => {
//     var typof = typeof argument;
//     typof(#NaN) ? isString = true : isString = false;
//     console.log(isString);
// }

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
//false