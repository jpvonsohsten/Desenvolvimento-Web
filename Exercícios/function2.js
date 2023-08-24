 // Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2 , 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {                            // a seta substitui a function.
    return a + b
}

console.log(soma(2 , 3));

// return implícito
const subtracao = (a, b) => a - b // quando se tem uma unica linha na function ele não necessita do return.
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a); // aqui não necessita de parênteses no 'a' porque ele é o único parâmetro definido.
imprimir2('Legal')