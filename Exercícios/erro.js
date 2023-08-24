function tratarErroELancar(erro) {
    //throw new Error('...')  // 'throw' executa o erro passando uma mensagem digitada
    //throw 10
    //throw true
    //throw 'msg'
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {           // 'try' serve para testar o codigo 
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {   // 'catch' serve para pegar o erro do codigo testado
        tratarErroELancar(e)
    } finally {     // 'finally' é o ultimo bloco a ser executado mesmo com erro ou não
        console.log('final');
    }
}

const obj = { name: 'Rodrigo'}
imprimirNomeGritado(obj)