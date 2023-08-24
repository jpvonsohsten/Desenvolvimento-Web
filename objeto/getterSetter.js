const sequencia = {
    _valor: 1, // convenção, pretendida acessar apenas internamente quando se coloca o "_"
    get valor() { return this._valor++},    // get lê o valor da variavel
    set valor(valor) {  // set altera o valor da variavel
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1001
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 750
console.log(sequencia.valor, sequencia.valor)