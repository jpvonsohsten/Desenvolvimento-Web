const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  // 'forEach' é uma função de fabricantes dentro do array que percorre o elemento.
fabricantes.forEach(fabricante => console.log(fabricante))