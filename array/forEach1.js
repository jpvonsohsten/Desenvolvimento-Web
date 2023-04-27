const aprovados = ['Carlos', 'João', 'Pedro', 'Luana']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) /*forEach chama a função para cada elemento percorrido
                                                          sendo o primeiro parâmetro
                                               o nome, o segunndo o indice e o terceiro o array.*/

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)