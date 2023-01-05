console.group('Cuadrado')

const ladoCaudrado = 5;
const perimetroCuadrado = ladoCaudrado * 4;

const areaCuadrado = ladoCaudrado * ladoCaudrado;

function calcularCuadrado(lado) { 
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }

} ;

console.log({
    ladoCaudrado,
    perimetroCuadrado,
    areaCuadrado
})
console.groupEnd('Cuadrado')

console.group('Triangulo')


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) { 
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }

} ;

function calcularAlturaTriangulo(lado1, base){
    if(lado1 == base){
        console.warn("este no es un triangulo isosceles");
    } else {
        //h = raizcuadrada(lado1**2 -(b**2)/4)
        return  Math.sqrt((lado1 **2) - ((base ** 2)/ 4));
    }
}

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
    if(lado1 == lado2 || lado2 == base || base == lado1) {
        console.warn('este no es un triangulo escaleno');
    } else {
        const semiperimetro = (lado1 +lado2 + base) / 2;
         const S = semiperimetro; 
        
        return ( (2 / lado1) * Math.sqrt(( S * (S - lado1) * (S - lado2) * (S - base)))  )

    }
}


console.log({
ladoTriangulo1,
ladoTriangulo2,
ladoTrianguloBase,
alturaTriangulo,
perimetroTriangulo,
areaTriangulo,
calcularAlturaTriangulo, calcularAlturaTrianguloEscaleno
})
console.groupEnd('Triangulo')


console.group('circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo *PI;
const areaCirculo = (radioCirculo ** 2 ) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
})

function calcularCirculo (radio) {
    const diametro = radio * 2 ;
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
        }
}
console.groupEnd('circle')

