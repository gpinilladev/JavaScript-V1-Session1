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
const restaDosNumeros = () => {
    let num1 = prompt("Ingrese numero 1: ");
    let num2 = prompt("Ingrese numero 2: ");
    console.log('num1: ', num1);
    console.log('num2: ', num2);
    let resultado = parseInt(num1) - parseInt(num2);
    console.log('resultado: ', resultado);
    alert('La resta es: ' + resultado);
};
const multiplicaDosNumeros = () => {
    let num1 = prompt("Ingrese numero 1: ");
    let num2 = prompt("Ingrese numero 2: ");
    console.log('num1: ', num1);
    console.log('num2: ', num2);
    let resultado = parseInt(num1) * parseInt(num2);
    console.log('resultado: ', resultado);
    alert('La multiplicacion es: ' + resultado);
};

const dividirDosNumeros = () => {
    let num1 = prompt("Ingrese numero 1: ");
    let num2 = prompt("Ingrese numero 2: ");
    console.log('num1: ', num1);
    console.log('num2: ', num2);

    if (num2 != 0) {
        let resultado = parseFloat(num1) / parseFloat(num2);
        console.log('resultado: ', resultado);
        alert('La division es: ' + resultado);
    } else {
        alert("No es posible dividir por 0")   
    }

    
};