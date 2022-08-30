// we need to use the event submit - to submit the form itself.
// to avoid the page from refreshing, use event.preventDefault
//access the input by form - cause we have a lot of inputs(each value will b a string)
//value property to retrieve the input 
//push the value to the array
//the target: is the element linked to the events.


//local variable = is one that was created in a block(like a for loop).
//it is immediatly deleted when exiting the block

// "return" inside the function stops the function and resets it. 
// "break" means i will exit the whole for loop, but if even one input was put in, it was already catched.


let formSentence = document.forms.libform;
formSentence.addEventListener("submit","retrievInputValues");

function retrievInputValues(ev) {
	ev.preventDefault();
	console.log(event.target);
	let allInputs = ev.target.getElementsByTagName("input");
	console.log(allInputs);
	for (let input of allInputs) {
		//use the trim method here
		let valueData = input.value;
		allValues.push(valueData);
		if(valueData === ''|| valueData.length === 0){
			console.log("one value is empty");  //---here we tried to leave one value empty.
			return;
		} else {
			allValues.push(valueData);
			input.value = '';	
		}
	}
	console.log(allValues);
	displayValues();
}



function displayValues () {
	console.log('in the displayValues function'); // --we pashut entered values
	let sentence = `The ${allValues[1]} ${allValues[0]} ${allValues[3]} in ${allValues[4]} with ${allValues[2]}`
	let text = document.createTextNode(sentence);
	let span = document.getElementById("story");
	span.appendChild(text);
}