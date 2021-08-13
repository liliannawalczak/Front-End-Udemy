// tablice 

const colors = ['red', 'green', 'blue']

console.log(colors[2]);

colors.push('gold')
console.log(colors);


// pętla for


for(let i = 0; i < 3; i++){
    console.log(i);
}

// output:
// 0
// 1
// 2

for(let i=0; i< colors.length; i++){
    console.log(colors[i]);
}

function addNumbers(x, y){
    return x + y
}
