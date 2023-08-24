const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(0)
imprimirResultado(7)
imprimirResultado(6.5)
imprimirResultado('Opa')    // cuidado com pq js é fracamente tipado e vai deixar passar qualquer tipo de dado.