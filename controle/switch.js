const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {     // 'switch' é feito para multiplas seleções mais simplificada.
        case 10:
        case 9:                    // 'case' é "caso seja..."
        console.log('Quadro de honra!')
        break                       // 'break' termina o switch de cada case, para não entrar em bloco desnecessário.
    case 8: case 7:
        console.log('Aprovado')
        break
    case 6: case 5: case 4:
        console.log('Recuperação')
        break
    case 3: case 2: case 1: case 0:
        console.log('Reprovado')
        break
    default:
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)