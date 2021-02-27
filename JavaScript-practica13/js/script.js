// Sumar dos numeros

// let num1 = 2;
// let num2 = 2;

// num1 = prompt("Ingrese numero 1: ");
// num2 = prompt("Ingrese numero 2: ");

// sumaDosNumeros(num1, num2);

const sumaDosNumeros = () => {
    let num1 = prompt("Ingrese numero 1: ");
    let num2 = prompt("Ingrese numero 2: ");
    console.log('num1: ', num1);
    console.log('num2: ', num2);
    let resultado = parseInt(num1) + parseInt(num2);
    console.log('resultado: ', resultado);
    alert('La suma es: ' + resultado);
};