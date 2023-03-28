
var tablaVacantes = localStorage.getItem("tablaVacantes");

tablaVacantes = JSON.parse(tablaVacantes);

if (tablaVacantes == null) {
    var tablaVacantes = [];
}

listarVacantes();

function listarVacantes() {

    var dataRow = '';

    if (tablaVacantes.length > 0) {
        for (const i in tablaVacantes) {
            var varVacante = JSON.parse(tablaVacantes[i]);
            dataRow += "<tr>";
            dataRow += "<td>"+ varVacante.id +"</td>";
            dataRow += "<td>"+ varVacante.jobPosition +"</td>";
            dataRow += "<td>"+ varVacante.tipo +"</td>";
            dataRow += "<td>"+ varVacante.ciudad +"</td>";
            dataRow += "<td>"+ varVacante.vacantes +"</td>";
            dataRow += "<td>"+ varVacante.descripcion+"</td>";
            dataRow += "</tr>";
        }
        document.getElementById("vacantes-tabla").innerHTML = dataRow;
    } else {
        document.getElementById("vacantes-tabla").innerHTML = "<tr> <td colspan='4' class='text-danger' > No hay datos <td> </tr>"
    }
}

