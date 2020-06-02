/*
Responsabilidades del servicio
    - Aqui se proceso datos con JavaScript (cálculos)
    - Almacena tambien temporal  los datos.
*/
let informacionPersonas = []; //Es un arrays para almacenar en la consola

function registrarRetiroInclusion(paInfoPersona){ // Aqui sa va almacenar la informacion de las personas
    informacionPersonas.push(paInfoPersona);
}
function obtenerListaPersonas(){ // Aqui se va almacenar la informacion intrdoducido por el usuario.

    console.log(informacionPersonas);// es para mostrar la consola en el navegador .

    return informacionPersonas;
}
