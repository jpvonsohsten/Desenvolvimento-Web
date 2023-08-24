{
    {
        {
            {
                var sera = 'Será???'  // declarando a variavel como 'var' ela pode ser acessada em diferentes escopos
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local), se eu declarasse isso aqui daria erro porque a function so permite ser declarada dentro do escopo
