//1. Add the code above, to your HTML file - done
//2. Add a “light blue” background color and some padding to the <div>. - in Html
//3. Do not display the <li> that contains the text node “John”.
let div = document.getElementsByTagName("div")[0];
div.style.backgroundColor="lightblue";
div.style.padding = "4px";

let ul = document.getElementsByTagName("li");
console.log(ul);
console.log(ul[0]);
ul[0].remove();

//4. Add a border to the <li> that contains the text node “Pete”.
console.log(ul[0]); //="Pete"
ul[0].style.border = "yellow solid 3px";

// 5. Change the font size of the whole body.
let body = document.body;
body.style.fontSize = "50px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// let name = document.body.children[1];
let name = document.getElementsByTagName("li");
console.log(name[0].textContent);

if(div.style.backgroundColor="lightblue"){
	let x = name[0].textContent;
	// let y = name[1].textContent; ---- can't be here because only one name left in the list.
	alert("Hello "+ x +" and someone!");
}

