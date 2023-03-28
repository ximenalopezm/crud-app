
var tablaVacantes = localStorage.getItem("tablaVacantes");

tablaVacantes = JSON.parse(tablaVacantes);

if (tablaVacantes == null) {
    var tablaVacantes = [];
}

var idVacante = localStorage.getItem("idVacante");
idVacante = JSON.parse(idVacante);

if (idVacante == null) {
    var idVacante = 0;
}

cargar();

function enviar() {
    var objVacante = JSON.stringify({
        id: (idVacante > 0) ? idVacante : (tablaVacantes.length + 1),
        jobPosition: document.getElementById("jobPosition").value,
        tipo: document.getElementById("tipo").value,
        ciudad: document.getElementById("ciudad").value,
        vacantes: document.getElementById("vacantes").value,
        descripcion: document.getElementById("descripcion").value,

    });

    console.log(objVacante);

    if (idVacante > 0) {
        for (const i in tablaVacantes) {
            var varVacante = JSON.parse(tablaVacantes[i]);
            if (varVacante.id == idVacante ) {
                tablaVacantes[i] = objVacante;
                break;
            }
        }
    } else {
        tablaVacantes.push(objVacante);
    }

    localStorage.setItem("tablaVacantes", JSON.stringify(tablaVacantes));
}

function cargar() {
    if (idVacante > 0) {
        for (const i in tablaVacantes) {
            var varVacante = JSON.parse(tablaVacantes[i]);
            if (varVacante.id == idVacante) {
                document.getElementById("id").value = varVacante.id;
                document.getElementById("jobPosition").value = varVacante.jobPosition;
                document.getElementById("tipo").value = varVacante.tipo;
                document.getElementById("ciudad").value = varVacante.ciudad;
                document.getElementById("vacantes").value = varVacante.vacantes;
                document.getElementById("descripcion").value = varVacante.descripcion;
                break;
            }
        }
    }
}