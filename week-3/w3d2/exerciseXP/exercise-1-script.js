// 1. Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.body.firstElementChild.firstElementChild;
console.log(h1);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.
let rem = document.body.firstElementChild.lastElementChild;
rem.remove();

//3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.getElementsByTagName("h2")[0];
console.log(h2);

function clickBtnRed(){
	h2.style.backgroundColor = "red";
}
h2.addEventListener("click", clickBtnRed);

//4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.getElementsByTagName("h3")[0];
function disapear(){
	this.style.display= "none";
}
h3.addEventListener("click",disapear);

//5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let btn = document.getElementsByTagName("button")[0];
btn.innerText= "Press to bolden text";
let par = document.getElementsByTagName("p");
function bolden(){
	par[0].style.fontWeight = "bold";
	par[1].style.fontWeight = "bold";
	par[2].style.fontWeight = "bold";
	// par[3].style.fontWeight = "bold";
}
btn.addEventListener("click", bolden);

//6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
let random = Math.floor(Math.random() * 100);

function randomFontSize() { 
	this.style.fontSize = `${random}px`;
} 

h1.addEventListener("mouseover", randomFontSize);

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// let secondpar = par[1];
// // secondpar.mouseover = fadeOut;
// function fadeOut() {
// 	secondpar.style.opacity="1";
// 	secondpar.style.transition="opacity 0.3s ease-in-out";

// 	fade: opacity="0";
// 	secondpar.toggle("fade");
// }
// secondpar.addEventListener("mouseover", fadeOut);

