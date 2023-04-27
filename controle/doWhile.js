function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
                //while executa uma função até que ela seja verdadeira.
do {            // 'do' verifica o bloco e analisa se deve continuar a repetição ou não no 'while'.
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Fim do Programa')