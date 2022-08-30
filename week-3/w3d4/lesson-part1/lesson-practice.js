let banner = document.getElementById("banner");

// yair's way':
// banner.style.border = "yellow solid 3px";

// function displayBanner() {
// 	banner.style.display = "block";
// }

// setTimeout(displayBanner, 5000)

setTimeout (makeAppear, 3500);

function makeAppear() {
	banner.classList.remove("disappear");
}




in css:

.dissapear {
	display: none;
}