
// setTimeout(function() {
//     console.log('Executando CallBack 1...')
// }, 2000)

//     setTimeout(function(){
//         console.log('Executando CallBack 2...')   // sem promise
//     }, 4000)
    
//     setTimeout(function(){
//         console.log('Executando CallBack 3...')
//     }, 6000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Executando a Promise...')
            resolve('Eita')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)