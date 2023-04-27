// operador... rest(juntar) / spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'João', idade: 21, salario: 1500.85 }
const clone = { ativo: true, ...funcionario }    // espalhando dentro do objeto clone os atributos de 'funcionario'
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']  // spread
console.log(grupoFinal)