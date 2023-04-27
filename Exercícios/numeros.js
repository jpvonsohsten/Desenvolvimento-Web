const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1,peso2);
console.log(Number.isInteger(peso1));  /*codigo para 
                 saber se o numero é inteiro*/
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2));/*imprime a quantidade 
                    de casas decimais que eu pedir como o 2 entre parenteses*/
console.log(media.toString());//transforma a media em uma string
console.log(media.toString(2));//transforma em um valor binário
       

        /*Number tem varias funções disponiveis para seu uso
        com as citadas acima:
        *toFixed()
        *toString()
        *toString(2)
        *isInteger()
        
        Obs: Number com N maiusculo é uma função e com n minusculo
        é um tipo de dado
        */