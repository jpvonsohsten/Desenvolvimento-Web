let a = 3

global.b = 123

this.c = 321
this.d = 'false'
this.e = 'teste'

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//module.exports = { e: 123, f: false, g: 'teste'}

    // criando uma variavel sem var e let!(não recomedado)
abc = 3
console.log(global.abc);