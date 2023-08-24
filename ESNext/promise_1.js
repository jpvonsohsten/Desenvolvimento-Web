let p = new Promise(function(cumprirPromessa) {  /* Promise é uma função que transforma o valor da variavel num objeto quando criada. 
                                                    obs: na promise sempre é lido apenas um parametro de valor passado. */
    cumprirPromessa([ 'João', 'Pedro', 'Macedo', 'VonSohsten' ])
})

p
    .then(valor => valor[0])  // then é chamado quando a promisse é cumprida como se fosse um callback e também utiliza uma função ou arrow function.
    .then(primeiro => primeiro[0])  // o then utiliza o valor anterior para continuar realizando os resultados.
    .then(letra => letra.toUpperCase())
    .then(letraMaiuscula => console.log(letraMaiuscula))
