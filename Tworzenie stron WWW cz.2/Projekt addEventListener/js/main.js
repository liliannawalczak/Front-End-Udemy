const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.remove-color')
const color = document.querySelector('.color')

function redColor() {
	// color.classList.add('red')
	// color.classList.remove('blue')

	color.classList.toggle('red')
}

function blueColor() {
	// color.classList.add('blue')
	// color.classList.remove('red')

	color.classList.toggle('blue')
}

function deleteColor() {
	color.classList.remove('red')
	color.classList.remove('blue')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
btn3.addEventListener('click',deleteColor)