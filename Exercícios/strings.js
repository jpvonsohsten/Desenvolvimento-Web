const escola = "Cod3r";

console.charAt(4); // vai mostrar a letra que está no quarto indicie 'r'
console.log(escola.charAt(5)); // vai retornar vazio
console.log(escola.charCodeAt(3)); // Retonar o valor do caractere na tabela ASCII
console.log(escola.indexOf('3')); // mostra o indicie que está o digito

console.log(escola.substring(1)); // vai ate o indicie colocado ate o final
console.log(escola.substring(0, 3)); // vai ate o indicie sem inclui-lo ate o final

console.log('Escola '. concat(escola.concat("!"))); // vai concatenar a palavra
console.log( escola.replace(3, 'e')); // substitui o valor do indicie selecionado

console.log('Ana,Maria,Pedro'.split(",")); // transforma a string em 'Array'