// Ejercicio dias de la semana
// Pedir dia de la semana y se almacena en variable dia
let dia = prompt("Ingrese el dia de la semana: ");
// Validamos si el dia es entre semana o fin de semana
dia = dia.toLowerCase();
console.log('dia: ', dia);
if (dia) {
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
        alert("Es un dia entre semana")
    } else if (dia == "sabado" || dia == "domingo") {
        alert("Es un fin de semana")
    } else {
        alert("Debe ingresar un dia valido!")
    }
} else {
    alert("Debe ingresar un dia de la semana!")
}



