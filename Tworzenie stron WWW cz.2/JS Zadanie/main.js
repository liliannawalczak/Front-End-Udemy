const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')

console.log(btn1);
console.log(btn2);

function function1(){
    console.log(`Kliknięto przycisk nr 1`)
}

function function2() {
    console.log(2+2)
}

btn1.addEventListener('click', function1)
btn2.addEventListener('click', function2)