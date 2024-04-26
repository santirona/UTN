//funcion para cargar el array con los numeros aleatorios

function cargar() {
    const seedrandom = require("seedrandom");
    var random = seedrandom(1763519);
    let numerosRandom = Array.from({ length: 1000000 }, () => random.int32());
    return numerosRandom;
}


//funcion cantidad de numeros positivos y negativos
function numerosPositivosYNegativos(array) {
    let contNegativo = 0;
    let contPositivo = 0;

    array.forEach(element => {
        if (element > 0) {
            contPositivo += 1;
        } else if (element < 0) {
            contNegativo += 1;
        }
    });

    return [contNegativo, contPositivo];
}


//funcion cantidad de numeros con resto 0,3,5,6 al ser divididos por 7
function numerosRestoEspecifico(array) {
    let contadorRestos = 0;

    array.forEach(element => {
        let resto = element % 7;
        switch (resto) {
            case 0:
                contadorRestos += 1;
                break;

            case 3:
                contadorRestos += 1;
                break;

            case 5:
                contadorRestos += 1;
                break;
            
            case 6:
                contadorRestos += 1;
                break;
        }
    });

    return contadorRestos;
}


//funcion contar decenas
function contarDecenas(array) {
    let contadores = new Array(10).fill(0);

    array.forEach(element => {
        decena = Math.floor(Math.abs((element % 100) / 10));
        contadores[decena] += 1;
    });

    return contadores;

}

let arrayNumerosRandom = cargar();

//funcion encontrar al menor
function menor(array) {
    let posicionMenor = 1;
    let menor = array[0];

    array.forEach((element, index) => {
        if (menor > element) {
            posicionMenor = index + 1;
            menor = element;
        }
    });
    return [menor, posicionMenor]; 
}

//funcion conocer signo de nuemro
function conocerSigno(num){
    let signo = 0;
    if (num > 0) {
        signo = 1;
    } else if ( num < 0) {
        signo = -1;
    } else { signo = 0}

    return signo;
}


//funcion cantidad de numeros mismo signo que el anterior
function mismoSignoQueAnterior(array){
    let contador = 0;
    let signoAnterior = 0;
    array.forEach((element, index) => {
        let signoActual = conocerSigno(element);
        
        if (index === 0) {
            signoAnterior = conocerSigno(element);
        } else if (signoAnterior === signoActual) {
            contador += 1;
            signoAnterior = conocerSigno(element);
        }

        signoAnterior = signoActual;

    });

    return contador;
}

//funcion promedio entero de todos los numeros de 6 digitos
function promedioNumerosSeisDigitos(array){
    let acumulador = 0;
    let cantidad = 0;
    array.forEach((element) => {

        if (Math.abs(element).toString().length === 6){
            acumulador += element;
            cantidad += 1;
        }
    })

    let promedio = Math.round(acumulador/cantidad);
    return promedio;
}

//console.log(arrayNumerosRandom);

let [contNegativo, contPositivo] = numerosPositivosYNegativos(arrayNumerosRandom);

console.log("Punto 1:");
console.log("Cantidad positivos: ", contPositivo);
console.log("Cantidad negativos: ", contNegativo);

let contadorRestos = numerosRestoEspecifico(arrayNumerosRandom);

console.log("\nPunto 2:");
console.log("cantidad que al dividir por 7 tienen resto 0, 3, 5 o 6: ",contadorRestos);

let contadoresDecenas = contarDecenas(arrayNumerosRandom);
console.log("\nPunto3:");
console.log(contadoresDecenas);

let [menorNumero, posicionMenor] = menor(arrayNumerosRandom);
console.log("\nPunto4:");
console.log("El menor numero es:", menorNumero);
console.log("Su posicion es: ", posicionMenor);

let contadorMismosSignos = mismoSignoQueAnterior(arrayNumerosRandom);
console.log("\nPunto5:");
console.log("La cantidad de numeros con mismos signos son: ", contadorMismosSignos);

let promedioSeis = promedioNumerosSeisDigitos(arrayNumerosRandom);
console.log("\nPunto6:");
console.log("El promedio entero de todos los numeros de 6 digitos es: ", promedioSeis);