// não aceita repetição/não indexada
{
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Palmeiras').add('Botafogo')
times.add('Fluminense')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Fluminense')
console.log(times.has('Fluminense'));
}

{
const nomes = ['Raquel', 'Lucas', 'Sara', 'Lucas', 'João']
const nomesSet = new Set(nomes)
console.log(nomesSet);
}