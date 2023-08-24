const filhas = ['Waleska', 'Wiviane']
const filhos = ['Washington', 'Wellington']
const todos = (filhas.concat(filhos, 'Wesley')) // concatena e permite adicionar um elemento no array

console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));