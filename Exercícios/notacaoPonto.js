console.log(Math.ceil(6.1));  // ceil opera um arredondameto matematico

const obj1 = {}
obj1.nome = 'Bola' // pode ser declarado fora das chaves
//obj1['nome'] = 'Bola quadrada' | outro tipo de declarar o objeto
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome  // this torna o objeto 'nome' público.
    this.exec = function(){
        console.log('E outros');
    }

}

const obj2 = new Obj('Cadeira e')
const obj3 = new Obj('Mesa')
console.log(obj2.nome, obj3.nome);
obj3.exec()