// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  // vai ser indefinido ja que so declarou um valor e vai sair no output "NaN".
imprimirSoma(2, 3, 4, 5, 6, 7, 8)  // vai considerar apenas os 2 primeiros valores.
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3));  // valor de 'a' vai ser 2 e o de 'b' vai ser 3.
console.log(soma(2));  // Vai retornar o valor padrão que é o 1 + o valor 2.
console.log(soma()); // nao retorna nada porque não coloquei o parâmetro do 'a' na função. Vai ocorrer assim  Undefined+1=NaN.