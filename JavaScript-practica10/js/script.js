// Funciones

// Funcion clasica
function vantanaAlerta() {
    alert("Prueba 1");
    this.suma(1, 2);
}

function suma(numero1, numero2) {
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log('suma: ', suma);
}

// Funciones flecha
const ventanaAlerta2 = () => {
    alert("Prueba alerta funcion flecha");
};

