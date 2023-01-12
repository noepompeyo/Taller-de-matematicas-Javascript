// SE creo la formul par ael promedio con un ciclo for

function calcularPromedio(lista) {

    sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio)
    return promedio;
}


calcularPromedio([1,2,3,4]);

//SE hara uso del metodo reduce

//SE VA A CALCULAR LA MEDIANA 
function esPar ( lista) {
    // if (lista.length % 2) {
    //     return false;

    // } else {
    //     return true;
    // }
    return !(lista.length % 2);

}
function esImpar (lista ) {
    // if (lista.length % 2) {
    //     return false;

    // } else {
    //     return true;
    // }
    return lista.length % 2;

}

function calcularMediana ( lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) -1];
        const mitad2ListaPar = lista[lista.length / 2];

        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        return calcularPromedio(listaMitades);

    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2) ;
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        const medianaListaPar = medianaListaImpar;
        return medianaListaPar;
    }
}

function calcularPromedio(lista) {

    function sumarTodosElementos (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    

    const promedio = sumaLista / lista.length;
    console.log(promedio)
    return promedio;
}

calcularPromedio([1,2,3,4]);



