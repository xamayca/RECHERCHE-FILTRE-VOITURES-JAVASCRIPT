const vehicles = [
	{
		brand: 'Renault',
		model: 'Kangou',
	},
	{
		brand: 'Peugeot',
		model: '306',
	},
	{
		brand: 'Citroen',
		model: 'C4',
	},
	{
		brand: 'Peugeot',
		model: '406',
	},
	{
		brand: 'Renault',
		model: 'Capture',
	},
	{
		brand: 'Citroen',
		model: 'Xsara',
	},
];

const addStyle = (div, h2) => {
	div.classList.add('d-flex');
	div.classList.add('justify-between');
	div.classList.add('items-center');
	div.classList.add('txt-white');
	div.classList.add('fw-bold');
	div.classList.add('bg-light');
	div.classList.add('p-05');

	if (h2) {
		h2.classList.add('bg-dark');
		h2.classList.add('p-05');
	}
}

const vehicleList = document.getElementById('carList');

const displayCars = (filter) => {

	vehicleList.innerHTML = '';

	for (let i = 0; i < vehicles.length; i++) {

		if (vehicles[i].brand.includes(filter) || vehicles[i].model.includes(filter) || filter == undefined || filter == '') {
			console.log(vehicles[i].brand);
			console.log(vehicles[i].model);

			const newDiv = document.createElement("div");
			const newTitle = document.createElement("h2");
			const newSpan = document.createElement("span");

			addStyle(newDiv, newTitle);

			newTitle.textContent = vehicles[i].brand;
			newSpan.textContent = vehicles[i].model;

			vehicleList.appendChild(newDiv);
			newDiv.appendChild(newTitle);
			newDiv.appendChild(newSpan);
		}

	}

}

displayCars();

const renaultBrandBtn = document.getElementById('renaultBtn');
const peugeotBrandBtn = document.getElementById('peugeotBtn');
const citroenBrandBtn = document.getElementById('citroenBtn');
const clearBtn = document.getElementById('clear');
const searchBar = document.getElementById('search');

renaultBrandBtn.addEventListener('click', () => displayCars("Renault"));

peugeotBrandBtn.addEventListener('click', () => displayCars("Peugeot"));

citroenBrandBtn.addEventListener('click', () => displayCars("Citroen"));

clearBtn.addEventListener('click', () => displayCars());


searchBar.addEventListener("input", event => {
	if (event.target.value.length > 0) {
		const firstLetter = event.target.value[0].toUpperCase();
		const restSearch = event.target.value.slice(1).toLowerCase();
		event.target.value = firstLetter + restSearch;

	}

	displayCars(event.target.value);
});





