for (let letras of "João") {
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map ([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {  // Percorre o Map
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // Percorre as chaves
    console.log(chave)
}

for (let valores of assuntosMap.values()) { // Percorre os valores
    console.log(valores)
}

for (let [ch, vl] of assuntosMap.entries()) {  // Percorre as entradas
    console.log(ch, vl)
}

const s = new Set (['a', 'b', 'c'])
for (let letras of s) {
    console.log(letras)
}