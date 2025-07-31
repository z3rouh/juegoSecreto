//DESAFIOS

function holaMundo(){
    console.log("Hola mundo");
}
holaMundo();

function mostrarNombre(nombre) {
    console.log(`Hola, ${nombre}`);
}

mostrarNombre("martin");

function duplicarNumero(numero) {
    return numero * 2;
}

let numerodoble = duplicarNumero(12);
console.log(numerodoble);

function promedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedioFinal = promedio(5, 8, 2);
console.log(promedioFinal);

function ordenarNumero (a , b){
    return a > b ? a : b;
}
let numeroMayor = ordenarNumero(700,300);
console.log(numeroMayor);

function cuadrado(numero){
    return numero * numero;
}
let numeroCuadrado= cuadrado(3);
console.log(numeroCuadrado);