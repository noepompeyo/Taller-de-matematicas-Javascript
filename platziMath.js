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