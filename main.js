var clear, display, one, two, three, four, five, six, seven, eight, nine, zero,
equals, decimal, addition, subtraction, multiplication, division;

display = document.querySelector('.display');
one = document.querySelector('.one');
two = document.querySelector('.two');
three = document.querySelector('.three')
four = document.querySelector('.four')
five = document.querySelector('.five')
six = document.querySelector('.six')
seven = document.querySelector('.seven')
eight = document.querySelector('.eight')
nine = document.querySelector('.nine')
zero = document.querySelector('.zero')
clear = document.querySelector('.clear')
division = document.querySelector('.division')
multiplication = document.querySelector('.multiplication')
subtraction = document.querySelector('.subtraction')
decimal = document.querySelector('.decimal')
addition = document.querySelector('.addition')
equals = document.querySelector('.equals')


function moveToDisplay1(event) {
	var total = display.textContent + "1";
	display.textContent = total;
}

function moveToDisplay2(event) {
	var total = display.textContent + "2";
	display.textContent = total;
}


function moveToDisplay3(event) {
	var total = display.textContent + "3";
	display.textContent = total;
}

function moveToDisplay4(event) {
	var total = display.textContent + "4";
	display.textContent = total;
}

function moveToDisplay5(event) {
	var total = display.textContent + "5";
	display.textContent = total;
}

function moveToDisplay6(event) {
	var total = display.textContent + "6";
	display.textContent = total;
}

function moveToDisplay7(event) {
	var total = display.textContent + "7";
	display.textContent = total;
}

function moveToDisplay8(event) {
	var total = display.textContent + "8";
	display.textContent = total;
}

function moveToDisplay9(event) {
	var total = display.textContent + "9";
	display.textContent = total;
}

function moveToDisplay0(event) {
	var total = display.textContent + "0";
	display.textContent = total;
}

function moveToDisplayPlus(event) {
	var total = display.textContent + "+";
	display.textContent = total;
}

function moveToDisplayMinus(event) {
	var total = display.textContent + "-";
	display.textContent = total;
}

function moveToDisplayTimes(event) {
	var total = display.textContent + "*";
	display.textContent = total;
}

function moveToDisplayDivide(event) {
	var total = display.textContent + "/";
	display.textContent = total;
}

function moveToDisplayDecimal(event) {
	var total = display.textContent + ".";
	display.textContent = total;
}

function clearDisplay(event) {
	display.textContent = ""
}

function getAnswer(event) {
	total = eval(display.textContent);
	display.textContent = total;
}

one.addEventListener('click', moveToDisplay1);
two.addEventListener('click', moveToDisplay2);
three.addEventListener('click', moveToDisplay3);
four.addEventListener('click', moveToDisplay4);
five.addEventListener('click', moveToDisplay5);
six.addEventListener('click', moveToDisplay6);
seven.addEventListener('click', moveToDisplay7);
eight.addEventListener('click', moveToDisplay8);
nine.addEventListener('click', moveToDisplay9);
zero.addEventListener('click', moveToDisplay0);
clear.addEventListener('click', clearDisplay);
addition.addEventListener('click', moveToDisplayPlus);
subtraction.addEventListener('click', moveToDisplayMinus);
multiplication.addEventListener('click', moveToDisplayTimes);
division.addEventListener('click', moveToDisplayDivide);
decimal.addEventListener('click', moveToDisplayDecimal);
equals.addEventListener('click', getAnswer);