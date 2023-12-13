///////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function catfileCSV() {
	var fileBuff = '';
	var sFileSC;
  const fechaInicio = document.querySelector("#fecha-inicio").value;
  const fechaFin = document.querySelector("#fecha-fin").value;
  const fileCSV = CSVinRange(fechaInicio, fechaFin);
  
  if (fileCSV != null) {
	fileBuff = "Fecha;Hora;Energia Extracto (kWh);Energia Caldera (kWh);Energia Limpia (kWh);Energia Malta (kWh)" + "\r\n";
    for (let i = 0; i < fileCSV.length; i++) {
	  const data = await readFile(fileCSV[i]);
      const buffArray = data.split("\r\n")
		for (let j = 1; j < buffArray.length-1; j++) {
			buffArray[j] = fileCSV[i].substr(fileCSV[i].indexOf('/',1)+1, fileCSV[i].substr(fileCSV[i].indexOf('/',1)+1).lastIndexOf('/')) + ";" + buffArray[j];
			fileBuff = fileBuff + buffArray[j] + "\r\n";
		}
    }
	downloadCSV(fileBuff, "Energia desde " + document.querySelector("#fecha-inicio").value.substr(document.querySelector("#fecha-inicio").value.lastIndexOf("/")+1,document.querySelector("#fecha-inicio").value.length) + " a " + document.querySelector("#fecha-fin").value.substr(document.querySelector("#fecha-fin").value.lastIndexOf("/")+1,document.querySelector("#fecha-fin").value.length));
  } 
}

function readFile(url) {
  return fetch(url)
    .then(response => response.text())
    .catch(error => {
      console.error('Error al leer el archivo:', error);
      throw error;
    });
}

function CSVinRange(fechaInicio, fechaFin) {
  var fileCSV = [];
  const opcionesSelect = document.querySelector("#fecha-inicio").options;
  var fechaInicioIndex = -1;
  var fechaFinIndex = -1;

  for (let i = 0; i < opcionesSelect.length; i++) {
	  
    if (opcionesSelect[i].value === fechaInicio) {
      fechaInicioIndex = i;
    }

    if (opcionesSelect[i].value === fechaFin) {
      fechaFinIndex = i;
    }
  }

  if (fechaInicioIndex === -1 || fechaFinIndex === -1) {
    alert('Fechas de inicio o fin no encontradas en la lista.');
    fileCSV = [];
	return null;
  }

  if (fechaInicioIndex < fechaFinIndex) {
    alert('Rango de fechas incorrecto.');
    fileCSV = [];
	return null;
  }

  for (let i = fechaInicioIndex; i >= fechaFinIndex; i--) {
    fileCSV.push(opcionesSelect[i].value + "/TEnergias.csv");
  }

  return fileCSV;
}

//function CSVinRange(fechaInicio, fechaFin) {
//  var fileCSV = [];
//  const opcionesSelect = document.querySelector("#fecha-inicio").options;

//  for (let i = opcionesSelect.length-1; i >= 0; i--) {
//    var fechaArchivo = opcionesSelect[i].value;
//    if (fechaArchivo >= fechaInicio && fechaArchivo <= fechaFin) {
//		fileCSV.push(fechaArchivo + "/TEnergias.csv");
//    } else {
//		if (fechaInicio > fechaFin){
//			alert('Rango de fechas incorrecta.');
//			fileCSV = [];
//			return null;
//		}
//	}
//}
//	return fileCSV;
//}

function downloadCSV(contenidoCSV, FileCatName) {
  const blob = new Blob([contenidoCSV], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = FileCatName + ".csv";
  a.click();
}
