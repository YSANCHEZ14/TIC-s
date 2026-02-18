let numeros = [1, 2, 3, 4, 5, 10, 20, 30];
let pares= [];
let impares= [];

for(let i= 0; i<numeros.length; i++) {



if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
}
else {
    impares.push(numeros[i]);
}
}

console.log(pares);
document.writeln(pares);
console.log(impares);
