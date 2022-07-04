//1. Retrieve the div and console.log it
let users = document.getElementById("container");
console.log(users);

// 2. Change the name “Pete” to “Richard”.
document.body.children[1].lastElementChild.textContent = "Richard";

//3. Change each first name of the two <ul>'s to your name.
let nameElement = document.getElementsByClassName("list");
let firstNameElement = nameElement.firstElementChild;
console.log(firstNameElement);

for (let index = 0; index < 1; index++) {
	firstNameElement = 'Tohar';
}
console.log(firstNameElement);

// 4. Delete the <li> that contains the text node “Sarah”.
document.body.lastChild[2][1] = del



