// Create an array which value is the planets of the solar system.
let list = [
{name:'Mercury', moons: 0, color:'orange', radius:2439},
{name:'Venus', moons: 0, color:'grey', radius:6051},
{name:'Earth', moons:1, color:'blue', radius:6378},
{name:'Mars', moons: 2, color:'red', radius:3396},
{name:'Jupiter', moons: 79, color:'brown', radius:71492},
{name:'Saturn', moons: 82, color:'yellow', radius:60268},
{name:'Uranus', moons: 27, color:'ligthblue', radius:25559},
{name:'Neptune', moons: 14, color:'darkblue', radius:24764}
]
console.log(list);




// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let allPlanets = document.getElementsByClassName('listPlanets')[0];
console.log(allPlanets);
// we will create a loop that goes through each planet and gives it the class "planet".
for (let i=0; i<list.length; i++){
	let planet = document.createElement('div');
	planet.innerText = list[i].name;
	planet.style.color = '#fff'
	planet.classList.add('planet');
	planet.style.backgroundColor = list[i].color;
	let x=1;
	while (x < list[i].moons){
		let moon = document.createElement('div');
		moon.style.left = (x*10)+ 'px'
		moon.classList.add('moon');
		planet.appendChild(moon);
		x++;
	}
	allPlanets.appendChild(planet);
}

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
