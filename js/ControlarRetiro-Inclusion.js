/*
Responsabilidades del controlar en javaScript
    - Leer datos
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/
let botonGuardar = document.querySelector('#btnGuardar'); // un id para leer las informaciones
botonGuardar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let infoPersona =[];

    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputCedula = document.querySelector('#txtCedula');
    let sCedula = inputCedula.value;

    let inputTramite = document.querySelector('#txtTipo');
    let sTramite = inputTramite.value;

    let inputAsignatura = document.querySelector('#txtAsig');
    let sAsignatura = inputAsignatura.value;

    let inputFecha = document.querySelector('#txtFecha');
    let sFecha = inputFecha.value;

    let inputEmail = document.querySelector('#txtEmail');
    let sEmail = inputEmail.value;

    let inputFacultad = document.querySelector('#txtFacultad');
    let sFacultad = inputFacultad.value;

    infoPersona.push(sNombre, sCedula, sTramite, sAsignatura, sFecha, sEmail, sFacultad);

    registrarRetiroInclusion(infoPersona);
    imprimirRetiroInclusion();
};
function imprimirRetiroInclusion(){
    let informacionPersonas = obtenerListaPersonas();
    let tbody = document.querySelector('#tblPersonas tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < informacionPersonas.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cTramite = fila.insertCell();
        let cAsignatura = fila.insertCell();
        let cFecha = fila.insertCell();

        cNombre.innerHTML = informacionPersonas[i][0];
        cTramite.innerHTML = informacionPersonas[i][2];
        cAsignatura.innerHTML = informacionPersonas[i][3];
        cFecha.innerHTML = informacionPersonas[i][4 ];
    }

};
