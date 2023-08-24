const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace("\r\n", "")    // utilizar \r\n porque estou programando no Windows.

    process.stdout.write(`Olá ${nome}!`)
    process.exit()
    })
}