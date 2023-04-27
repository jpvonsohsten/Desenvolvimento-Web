const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);    // vai ser indefinido pois não há essa casa de valor na variável

valores[4] = 10;
console.log(valores);
console.log(valores.lenght); // lenght adicionou um valor no array

valores.push({id: 3}, false, null, 'teste'); // push adiciona novos elementos no array
console.log(valores);

console.log(valores.pop());  // pop retira o ultimo valor do array
delete valores[0]; // retira o valor do array especificado
console.log(valores);

console.log(typeof valores);   //array é do tipo objeto no js