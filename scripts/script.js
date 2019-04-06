//Creating 16x16 grid 
mainDiv = document.querySelector('.container');
let colors = ['red', 'blue', 'indigo', 'green', 'yellow', 'orange', 'pink'];

for(i=0; i<20; i++)
{
	newRow = document.createElement('div');
	for(j=0; j<20; j++)
	{
		newDiv = document.createElement('div');
		newDiv.textContent = '';
		newDiv.style.display = 'inline-block';
		newDiv.style.width = '2rem';
		newDiv.style.height = '2rem';
		newDiv.style.backgroundColor = 'white';
		newDiv.style.border = '1px solid black';
		newDiv.setAttribute('id', 'div' + i + '-' + j);
		newDiv.setAttribute('class', 'item');
		//newDiv.addEventListener('mouseover', changeBackground);
		newRow.appendChild(newDiv);
	}
	mainDiv.appendChild(newRow);
}


//When the erase btn is clicked, this function is called to update the event listeners for the divs.
function addEraseListeners()
{
	let allCells = Array.from(document.querySelectorAll('div.item'));
	allCells.forEach(function(cell) 
	{
		cell.removeEventListener('mouseover', blueBackground);
		cell.removeEventListener('mouseover', colorsBackground);
		cell.addEventListener('mouseover', erase);
	});
}

//Does the actual "erasing" by changing background color to white
function erase(e)
{
	divSelected = document.querySelector('#'+e.target.id);
	divSelected.style.backgroundColor = 'white'; 
	console.log("changing background to white");
}

//When the default color button is clicked, this function is called to update event listeners for each of the divs
function addDefaultListeners()
{
	let allCells = Array.from(document.querySelectorAll('div.item'));
	allCells.forEach(function(cell)
	{
		cell.removeEventListener('mouseover', erase);
		cell.removeEventListener('mouseover', colorsBackground);
		cell.addEventListener('mouseover', blueBackground);
	});
}

//Changes the background color of the div hovered over in blue 
function blueBackground(e)
{
	divSelected = document.querySelector('#'+e.target.id);
	divSelected.style.backgroundColor = 'blue';
	console.log("changing background to blue");
}

//add listeners to divs for random colors
function addColoredListeners()
{
	let allCells = Array.from(document.querySelectorAll('div.item'));
	allCells.forEach(function(cell)
	{
		cell.removeEventListener('mouseover', erase);
		cell.removeEventListener('mouseover', blueBackground);
		cell.addEventListener('mouseover', colorsBackground);
	});
}

//gets a random color from a created array with 7 colors.
function colorsBackground(e)
{
	divSelected = document.querySelector('#'+e.target.id);
	let color = colors[Math.floor(Math.random() * colors.length)];
	divSelected.style.backgroundColor = color;
}

//adding event listeners for html buttons
eraseBtn = document.querySelector('#erase-btn');
eraseBtn.addEventListener('click', addEraseListeners);  //calls the function to add the erase listeners to the divs
defaultBtn = document.querySelector('#default-btn');
defaultBtn.addEventListener('click', addDefaultListeners);
coloredBtn = document.querySelector('#colored-btn');
coloredBtn.addEventListener('click', addColoredListeners);