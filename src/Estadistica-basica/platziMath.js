const PlatziMath = {};

//SE hara uso del metodo reduce

//SE VA A CALCULAR LA MEDIANA 
PlatziMath.esPar = function esPar ( lista) {
    // if (lista.length % 2) {
    //     return false;

    // } else {
    //     return true;
    // }
    return !(lista.length % 2);

}
PlatziMath.esImpar =  function esImpar (lista ) {
    // if (lista.length % 2) {
    //     return false;

    // } else {
    //     return true;
    // }
    return lista.length % 2;

}

PlatziMath.calcularMediana =  function calcularMediana ( listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) -1];
        const mitad2ListaPar = lista[lista.length / 2];

        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        return PlatziMath.calcularPromedio(listaMitades);

    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2) ;
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        const medianaListaPar = medianaListaImpar;
        return medianaListaPar;
    }
}

PlatziMath.calcularPromedio =  function calcularPromedio(lista) {

    function sumarTodosElementos (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    

    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
};

PlatziMath.ordenarLista = function ordenarLista (listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if (valorAcumulado > nuevoValor){
        // return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }
        return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional (listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        
        return valorAcumulado[i] -nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}


PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if ( listaCount[elemento]) {
            listaCount[elemento] += 1;

        } else {
            listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    console.log({
        listaCount,
        listaArray, 
        listaOrdenada,
        listaMaxNumber})
        console.log(' la moda es ' + '' +listaMaxNumber[0]);
        
        return moda ;
}


