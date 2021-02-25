// Pedir nombre persona
let nombreUsuario = prompt("Ingrese el nombre: ");
// Mostrar nombre de usuario en consola
console.log('nombreUsuario: ', nombreUsuario);
// Pedir nombre persona
let edadUsuario = prompt("Ingrese la edad: ");
// Mostrar edad de usuario en consola
console.log('edadUsuario: ', edadUsuario);
// Mostrar nombre de usuario en ventana de alerta
// alert("Nombre usuario: " + nombreUsuario + "\nEdad usuario: " + edadUsuario + " años");


// Condionales
// let test = true;

// if (test) {
//     console.log("Mensaje true");
// } else {
//     console.log("Mensaje false");
// }
// let edadUsuario = 25;

if (edadUsuario >= 18) {
    console.log("Si tiene acceso al contenido peliculas violentas");
} else {
    console.log("No tiene acceso al contenido, debe ser mayor de edad");
}
