//Creating 16x16 grid 
mainDiv = document.querySelector('.container');
eraseBtn = document.querySelector('#erase-btn');
eraseBtn.addEventListener('click', addEraseListeners);  //calls the function to add the erase listeners to the divs
defaultBtn = document.querySelector('#default-btn');
defaultBtn.addEventListener('click', addDefaultListeners);

for(i=0; i<16; i++)
{
	newRow = document.createElement('div');
	for(j=0; j<16; j++)
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


//Changes the background color the div hovered over. 
function changeBackground(e)
{
	divSelected = document.querySelector('#'+e.target.id);
	divSelected.style.backgroundColor = 'blue';
}

//When the erase btn is clicked, this function is called to update the event listeners for the divs.
function addEraseListeners()
{
	let allCells = Array.from(document.querySelectorAll('div.item'));
	allCells.forEach(function(cell) {
		cell.addEventListener('mouseover', erase);
	});
}

//Does the actual "erasing" by changing background color to white
function erase(e)
{
	divSelected = document.querySelector('#'+e.target.id);
	divSelected.style.backgroundColor = 'white'; 
}

//When the default color button is clicked, this function is called to update event listeners for each of the divs
function addDefaultListeners()
{
	let allCells = Array.from(document.querySelectorAll('div.item'));
	allCells.forEach(function(cell)
	{
		cell.addEventListener('mouseover', changeBackground);
	});
}




 



