const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// quando for chamado a função ele vai retornar o valor 10 porque foi o valor final da variavel 'var' ignorando o escopo