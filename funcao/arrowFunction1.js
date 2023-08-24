let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {return 2 * a}



dobro = a => 2 * a  // apenas quando tiver um único parâmetro. Obs: o return está implícito.
console.log('Dobro do PI é:', dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())