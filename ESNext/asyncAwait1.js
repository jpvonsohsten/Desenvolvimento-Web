function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() =>  resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando a Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando a Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando a Promise 3...'))
//     .then(esperarPor(1000))
//     .then(() => console.log('Fim da execução.'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000)
    })
}


async function retornarValorRapido() {
    return 20
}

async function executar() {
   let valor = await retornarValorRapido()
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 5
}

async function executandoDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executandoDeVerdade()