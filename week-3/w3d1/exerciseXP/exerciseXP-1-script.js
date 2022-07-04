//1. Retrieve the div and console.log it
let users = document.getElementById("container");
console.log(users);

// 2. Change the name “Pete” to “Richard”.
document.body.children[1].lastElementChild.textContent = "Richard";

//3. Change each first name of the two <ul>'s to your name.
let nameElement = document.getElementsByClassName("list");
let firstNameElement = nameElement[0].firstElementChild;
firstNameElement.textContent = "Tohar";
console.log(firstNameElement);
let lastNameElement = nameElement[1].firstElementChild;
lastNameElement.textContent = "Tohar";
console.log(lastNameElement);


// 4. Delete the <li> that contains the text node “Sarah”.
let list = document.querySelectorAll("li");
let ul = nameElement[1];
console.log(list);
ul.removeChild(list[3]);
// list[3].remove();
// console.log(list[3]);
// body.lastChild[2][1] = del


//bonus:
nameElement[0].classList.add("student_list", "university", "attendance");
console.log(nameElement[0]);
nameElement[1].classList.add("student_list");
console.log(nameElement[1]);

for (let i of nameElement) {
	i.classList.add("student_list-2", "class-2");
}

