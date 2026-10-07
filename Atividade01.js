const valorDesconto = (numero) => {

    let resultado = numero - (numero*0.15);
    return resultado;
}
console.log(`Resultado ${valorDesconto(100)}`)
