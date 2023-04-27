                                        // a crase serve para pular linhas com string
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'                
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template); // o cifrão entre chaves serve para interpretar o que foi escrito dentro das chaves

                                        //  expressoes...

    console.log(`1 + 1 = ${1 + 1}`); // primeiro repete a string e no cifrão entre chaves ele faz a operação
    
    const up = texto => texto.toUpperCase() // uppercase(up) serve para colocar o texto em maiusculo
    console.log(`Ei... ${up('cuidado')}!`);
    