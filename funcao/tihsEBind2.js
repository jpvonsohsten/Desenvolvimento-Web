function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(`idade agora é: ${self.idade}! `)
    }/*.bind(this)*/, 1000) // 'setInterval()' dispara uma função de acordo com intervalo que for passado
}

new pessoa