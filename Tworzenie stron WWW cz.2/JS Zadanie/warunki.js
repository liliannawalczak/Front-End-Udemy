const passLength = 12

if(passLength > 10){
    console.log(`Masz mocne hasło`);
} else if(passLength <= 10 && passLength >= 5){
    console.log(`Masz dobre hasło`);
} else{
    console.log(`Masz słabe hasło`);
}

// pobieranie elementow

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pTest = document.querySelector('.test')
const btn = document.querySelector('#btn')

console.log(pTest);

const li = document.querySelectorAll('li')

console.log(li);