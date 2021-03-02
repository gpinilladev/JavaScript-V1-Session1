// Mini calculadora
const miniCalculadora = () => {
    let op = prompt("Seleccione la operacion a realizar: \n1. Para sumar\n2. Para restar\n3. Para multiplicar\n4. Para dividir");
    if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
        alert("Debe ser una opcion entre 1 y 4");
    } else {
        // alert("Entro al else")
        // Solicitamos dos numeros para la operacion a realizar
        let num1 = prompt("Ingrese numero 1: ");
        let num2 = prompt("Ingrese numero 2: ");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let resultado = 0;
        // Validar datos correctos en variables num 1 y num2 (Expresiones regulares)
        // Validamos que la operacion sea suma "1"
        switch (op) {
            case "1":
                resultado = num1 + num2;
                console.log('resultado: ', resultado);
                break;
            case "2":
                resultado = num1 - num2;
                console.log('resultado: ', resultado);
                break;
            case "3":
                resultado = num1 * num2;
                console.log('resultado: ', resultado);
                break;
            case "4":
                if (num2 === 0) {
                    alert("No es posible dividir por 0");
                } else {
                    resultado = num1 / num2;
                    console.log('resultado: ', resultado);
                }
                break;
        }
        alert("El resultado es " + resultado);


        // if (op === "1") {
        //     resultado = num1 + num2;
        //     console.log('resultado: ', resultado);
        // }

        // if (op === "2") {
        //     resultado = num1 - num2;
        //     console.log('resultado: ', resultado);
        // }

        // if (op === "3") {
        //     resultado = num1 * num2;
        //     console.log('resultado: ', resultado);
        // }

        // if (op === "4") {
        //     if (num2 === 0) {
        //         alert("No es posible dividir por 0");
        //     } else {
        //         resultado = num1 / num2;
        //         console.log('resultado: ', resultado);
        //     }
        // }
        // alert("El resultado es " + resultado);
    }
};


// const sumaDosNumeros = () => {
//     let num1 = prompt("Ingrese numero 1: ");
//     let num2 = prompt("Ingrese numero 2: ");
//     console.log('num1: ', num1);
//     console.log('num2: ', num2);
//     let resultado = parseInt(num1) + parseInt(num2);
//     console.log('resultado: ', resultado);
//     alert('La suma es: ' + resultado);
// };
// const restaDosNumeros = () => {
//     let num1 = prompt("Ingrese numero 1: ");
//     let num2 = prompt("Ingrese numero 2: ");
//     console.log('num1: ', num1);
//     console.log('num2: ', num2);
//     let resultado = parseInt(num1) - parseInt(num2);
//     console.log('resultado: ', resultado);
//     alert('La resta es: ' + resultado);
// };
// const multiplicaDosNumeros = () => {
//     let num1 = prompt("Ingrese numero 1: ");
//     let num2 = prompt("Ingrese numero 2: ");
//     console.log('num1: ', num1);
//     console.log('num2: ', num2);
//     let resultado = parseInt(num1) * parseInt(num2);
//     console.log('resultado: ', resultado);
//     alert('La multiplicacion es: ' + resultado);
// };

// const dividirDosNumeros = () => {
//     let num1 = prompt("Ingrese numero 1: ");
//     let num2 = prompt("Ingrese numero 2: ");
//     console.log('num1: ', num1);
//     console.log('num2: ', num2);

//     if (num2 != 0) {
//         let resultado = parseFloat(num1) / parseFloat(num2);
//         console.log('resultado: ', resultado);
//         alert('La division es: ' + resultado);
//     } else {
//         alert("No es posible dividir por 0")   
//     }

    
// };