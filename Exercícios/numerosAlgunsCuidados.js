            // JAVASCRIPT É UMA LINGUAGEM DE TIPAGEM FRACA

console.log(7/0); // retorna infinito
console.log('3' + 2); // vai concatenar pois a string tem prioridade
console.log("1,0"/2); //desconsidera a string e divide(pode dar erro NaN com ",")
console.log("Show!" * 2); // da erro NaN
console.log(0.1 + 0.7); // vai dar um número com ponto flutuante, não é 100% preciso

//console.log(10.toString); || vai ser inválido

console.log((10.345).toFixed(2)); // desse jeito ocorre normalmente