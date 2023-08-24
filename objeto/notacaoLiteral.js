const a = 1
const b = 2
const c = 3

const obj1 = { a : a, b: b, c: c }
const obj2 = { a, b, c }    // simplificado
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 10.80

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}  // simplificado
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {  // simplificado
        //...
    }
}

console.log(obj5)