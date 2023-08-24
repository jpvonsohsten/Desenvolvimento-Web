var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);   /* como var é global vai ignorar
 os escopos e imprimir o numero 2 porque foi trocado na segunda declaração da variável. */