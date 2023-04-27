// function declaration
function soma (x, y) {
    return x + y
}
console.log(soma(5, 5))

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(5, 5))

// aplicando meu aprendizado
function Divisão(x, y) {
    const divisor = (x / y)
    const total = divisor.toFixed(1) 
    return  `${total} e o resto da divisão é ${x % y}`
}
console.log(Divisão(7, 2))