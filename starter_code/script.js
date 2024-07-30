const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let typedWord = [];
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let filteredRes = [];

function search() {
	const query = typedWord.join('');
	filteredRes = query ? fruit.filter(fruit =>
		fruit.toLowerCase().includes(query.toLowerCase())
	) : [];


	console.log('Filtered results:', filteredRes);
	showSuggestions();
}

/*
function explanation: 
function collects user input and adds it to an array
if backspace is pressed, the previous input is removed 
it also logs the input and the array in string form
*/

function searchHandler(e) {
	if (e.key === 'Backspace'){
		typedWord.pop();	
	}
	else if (e.key.length === 1) {
		e.preventDefault();
		typedWord.push(e.key);
	}


	// console.log('You typed:', e.key);
	// console.log(typedWord.join(''));
	console.log(typedWord.join(''));
	search();
}



function showSuggestions() {
	suggestions.innerHTML = ''; // clears previous suggs.

	if (typedWord.length === 0) {
		return; // do not show suggs. if input is empty 
	}

	filteredRes.forEach(word => {
		const li = document.createElement('li');
		li.textContent = word;
		li.addEventListener('click', () => {
			console.log('Selected:', word);
			typedWord = [];
			input.value = word;
			showSuggestions();
		})
		suggestions.appendChild(li);
	});

}

input.addEventListener('keyup', searchHandler);