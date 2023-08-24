let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!false);    /* '!' serve para transformar um valor em negativo ou positivo
                            e se usada duas vezes ela retorna ao valor original(verdadeiro)*/

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivos = true));

console.log("os falsos");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || 'epa'));

let nome = ''
console.log(nome || 'Desconhecido');