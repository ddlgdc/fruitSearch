const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const typedWord = [];
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search() {
	const query = typedWord.join('');
	const filteredRes = fruit.filter(fruit =>
		fruit.toLowerCase().includes(query.toLowerCase())
	);

	console.log('Filtered results:', filteredRes);
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



function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);