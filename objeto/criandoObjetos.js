// Usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Lápis', 2.99, 0.40)
const p2 = new Produto('Monitor 144hz', 1499.99, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function novoFuncionario(nome, salarioBase, faltas) {
    return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = novoFuncionario('João', 1950, 4)
const f2 = novoFuncionario('Isabela', 2500, 0)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const irmao = Object.create(null)
irmao.nome = 'Samuel'
console.log(irmao)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Isso aqui é um JSON"}')
console.log(fromJSON.info)