// Variables
/*******************************************
 * Variable var
 * Variable sin paralabra reservada (por defecto var)
 * Variables let
 * Variables const (Variables constantes que no cambian)
 * 
 * Las variables debe ser creadas en camelCase y no deben empezar con 
 * con numeros o caracteres, deben emepzar con letras
 ********************************************/
/****
 * Palabras reservadas de declaracion de variables *
 * var, let, const
 ****/
var nombre1 = "Pepe"; // Se utilizo el var pars declarar variable
nombre2 = "Pepe"; // Se declaro variable sin var (por defecto lo tiene)
let nombre3 = "Pepita"; // Se pueden declarar como let (EXPLICACION PENDEINTE EN FUNCIONES)
const nombre4 = "Pepita"; // const es un variable constante cuyo valor no deberia cambiar

console.log("nombre1 => ", nombre1);
console.log("nombre2 => ", nombre2);
console.log("nombre3 => ", nombre3);
console.log("nombre4 => ", nombre4);

/****
 * Tipos de variables *
 ****/
// debugger;
let nombreUsuario = "Andres Rojas"; // Tipo de dato string
let edadUsuario = 27; // Tipo de dato entero
let sueldoUsuario = 12.5; // Tipo de dato float decimal
let hijosUsuario = false; // Tipo de dato Booleano, falos o verdadero, true o false

let numeroDocumentoUsuario = "1038564821"; // No es number el tipo de dato porque no se realizan operaciones matematicas
let numeroCelularUsuario = "+57 3214010203"; // No es number el tipo de dato porque no se realizan operaciones matematicas

console.log('nombreUsuario: ', nombreUsuario);
console.log('edadUsuario: ', edadUsuario);
console.log('sueldoUsuario: ', sueldoUsuario);
console.log('hijosUsuario: ', hijosUsuario);
console.log('numeroDocumentoUsuario: ', numeroDocumentoUsuario);
console.log('numeroCelularUsuario: ', numeroCelularUsuario);
