//1. Add the code above, to your HTML file --done.

//2. In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let div = document.getElementById("navBar");
console.log(div);
let newDiv = div.setAttribute("navBar", "socialNetworkNavigation");
console.log(newDiv);

//4. We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

let newTextNode =  document.createTextNode("Logout");
let newLink = document.createElement("a");
let newLi = document.createElement("li");
let ul = document.body.firstElementChild.firstElementChild;
// let a;
// document.getElementsByTagName("a"); ----how do i turn it into a link?
// console.log(a);
// a.appendChild("href = "#"");
// a = "a  href='#'"; 
// console.log(a);


newLink.appendChild(newTextNode);
newLi.appendChild(newLink);
ul.appendChild(newLi);

console.log(ul);

//4. Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstLi = ul.firstElementChild;
console.log(firstLi.textContent);

let secondLi = ul.lastElementChild;
console.log(secondLi.textContent);