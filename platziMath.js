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

function calcularMediana ( listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
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
};

function ordenarLista (listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if (valorAcumulado > nuevoValor){
        // return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }
        return valorAcumulado -nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

