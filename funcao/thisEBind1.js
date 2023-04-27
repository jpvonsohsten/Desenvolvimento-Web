const pessoa = {
    saudacao: "Boa Tarde!",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // 'bind' serve para resolver o objeto onde chamou o 'this'
falarDePessoa()