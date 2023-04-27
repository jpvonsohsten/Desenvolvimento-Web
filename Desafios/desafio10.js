/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/


function verificarInteiro(num) {
    if(num % 3 === 0) {
        return true
    }else {
        return false
    }
}

console.log(verificarInteiro(5))
console.log(verificarInteiro(3))
console.log(verificarInteiro(2))