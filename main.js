function add(event) {
	total = Number(num_one.value) + Number(num_two.value)
	answer.textContent = total
}

function sub(event) {
	total = Number(num_one.value) - Number(num_two.value)
	answer.textContent = total
}

function mul(event) {
	total = Number(num_one.value) * Number(num_two.value)
	answer.textContent = total
}

function div(event) {
	total = Number(num_one.value) / Number(num_two.value)
	display.textContent = total
}

button.addEventListener('click', add, sub, mul, div);

