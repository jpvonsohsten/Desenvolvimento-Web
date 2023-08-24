function myObject() {}
console.log(myObject.prototype)

const obj1 = new myObject
const obj2 = new myObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(myObject.prototype === obj1.__proto__)

myObject.prototype.nome = 'Anônimo'
myObject.prototype.falar = function () {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'João'
obj2.falar()

const obj3 = {}
obj3.__proto__ = myObject.prototype
obj3.nome = 'Objeto 3'
obj3.falar()

// Resumindo...
console.log((new myObject).__proto__ === myObject.prototype)
console.log(myObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)