// to retrieve the body:
let body = document.body;

// retrieve the nav:
let navbarElement = document.body.children[0];

let ulElement = navbarElement.firstElementChild;
let liElement = ulElement.lastElementChild;
console.log("liElement", liElement);

let secondLiElement = liElement.previousElementSibling;

liElement.textContent = "welcome John";

document.body.children[1].firstElementChild.textContent = "Hello student";
document.body.children[1].lastElementChild.textContent = "Goodbye student";

let container = document.getElementById("container");
console.log(container);

let title = container.firstElementChild;
console.log(title);

let secondtitle = document.getElementsByTagName("h2");
console.log(secondtitle);

let firstseondtitle = secondtitle[0];
console.log(firstseondtitle);

let wrapping = document.getElementsByClassName("wrapping");
console.log(wrapping);

// retrieving the element that has the id "container":
let containerQuerySelector = document.querySelector("#container");
console.log(containerQuerySelector);

// retrieving the elements that has the class "wrapping":
let wrappingElements = document.querySelectorAll(".wrapping");
console.log(wrappingElements);

let allLis = document.querySelectorAll("#list li");
// other way:
// let allLis = document.querySelectorAll("ul li");

// // add elements on the page:
// // 1. retrieve where i want to add the element.
// let ulparent = document.getElementById("list");

// // 2. create the new element.
// let lichild = document.createElement("li");

// // 3. create text.node
// let textli = document.createTextNode("icon of my website");

// // 4. add the text to the li:
// lichild.appendChild("textli");

// // 5. add the li to the ul:
// ulparent.appendChild("lichild");

// retrieve all my h2 and design them woth a specific style:
let allH2 = document.getElementsByTagName("h2");
// or, same:
// let allH2 = document.querySelectorAll("h2");
for (i=0; i<allH2.length; i++) {
	allH2[i].classList.add ("title");
}

let pics = [
"https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281&w=740&h=416",
"https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281&w=740&h=416",
"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/90/cc/07.jpg"];

// i want to display the pictures dynamicaly on the page (meaning - i don't want to change my Html)
// retrieve where we want to add the images:
let section = document.getElementById("game");

// now we can use a for of loop here, it will surprisingly work:)
function createImg(){
	for (letpic of pics){
	// create an image:
	let newImg = document.createElement("img");
	newImg.setAttribute("src", pics[i]);
	// or: img.src=""; 
	section.appendChild(newImg);
}
}