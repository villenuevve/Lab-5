// TASK 1
let task1Btn = document.querySelector(".task1-btn");
let answer = document.querySelector(".answer");

task1Btn.addEventListener('click', () => {
	let task1Input = document.querySelector(".input-number-1");

	let arrA = fillUpArr(task1Input.value);
	let arrB = createArrB(fillUpArr(task1Input.value));
	arrB = insertionSort(arrB);

	answer.innerHTML = `<h4>Початковий масив: ${arrA}</h4><br> <h4>Вихідний масив: ${arrB}</h4>`;
});

const fillUpArr = (size) => {
	let arr = [];
	for (let a = 0; a < size; a++) {
		arr[a] = a + 1;
	}
	return arr;
}

const createArrB = (arr) => {

	let max = arr[arr.length - 1];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = max * arr[i];
	}

	return arr;
}

const insertionSort = (arr) => {
	for (let i = 1, l = arr.length; i < l; i++) {
		const current = arr[i];
		let j = i;
		while (j > 0 && arr[j - 1] < current) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = current;
	}
	return arr;
};

//TASK 2
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷', '%', '√', '^'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function (e) {

		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if (btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		else if (btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if (operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if (equation.indexOf('√') > -1) {
				equation += ')';
			}
			if (equation.indexOf('^') > -1) {
				equation = `Math.pow(${equation})`;
			}
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/√/g, 'Math.sqrt(').replace(/\^/g, ',');

			if (equation)
				input.innerHTML = eval(equation);

			decimalAdded = false;
		}

		else if (operators.indexOf(btnVal) > -1) {

			var lastChar = inputVal[inputVal.length - 1];

			if (inputVal != '' && operators.indexOf(lastChar) == -1)
				input.innerHTML += btnVal;

			else if (inputVal == '' && btnVal == '-' || btnVal == '√')
				input.innerHTML += btnVal;

			if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}

			decimalAdded = false;
		}

		else if (btnVal == '.') {
			if (!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		else {
			input.innerHTML += btnVal;
		}

		e.preventDefault();
	}
}