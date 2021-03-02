// condicional switch

let prueba = prompt("Ingrese un numero entre 1 y 4, adivina cual es el correcto")

switch (prueba) {
    case "1":
        alert("Intenta de nuevo");
        break;
    case "2":
        alert("Respuesta correcta");
        break;
    case "3":
        alert("Intenta de nuevo");
        break;
    case "4":
        alert("Intenta de nuevo");
        break;
    default:
        alert("Debe ser una opcion entre 1 y 4")
        break;
}