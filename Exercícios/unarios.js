let num1 = 1
let num2 = 2

num1++
console.log(num1);
--num1  // operador antes tem prioridade maior
console.log(num1);

console.log(++num1 === num2--); /* devido a prioridade do '++num1', o '--' do 'num2' não é validado porque veio depois da variavel, assim '===' será verdadeiro.*/

console.log(++num1 === num2);