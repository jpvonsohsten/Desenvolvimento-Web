// Faça um algoritmo que calcule o fatorial de um número.


function fatorial(num) {
    if(num == 0) {
        return 1
    }else {
        return num * fatorial(num - 1) 
    }
}

console.log(fatorial(10))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(9))
console.log(fatorial(11))
console.log(fatorial(12))