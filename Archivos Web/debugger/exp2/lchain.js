		var fechainicio = document.getElementById('fecha-inicio');
		var fechafin = document.getElementById('fecha-fin');
        var folderPath2 = '/bWVkaWNpb25lc21hbHRleGNv/';

        // Realizar una petición AJAX para obtener el contenido HTML de la página
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var htmlContent = xhr.responseText;
                    parseHTML(htmlContent);
                } else {
                    console.error('Error al obtener el contenido HTML');
                }
            }
        };
        xhr.open('GET', folderPath2);
        xhr.send();

        // Función para analizar el contenido HTML y extraer los enlaces
function parseHTML(htmlContent) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlContent, 'text/html');
    var links = doc.querySelectorAll('a');

    var fileNames = [];
    links.forEach(function(link) {
        var file = link.getAttribute('href');
        var fileName = extractFileName(file); // Obtener el nombre del archivo o carpeta

        // Ignorar los enlaces con los parámetros ?C=N;O=D, ?C=M;O=A, ?C=S;O=A y ?C=D;O=A
        if (fileName && !fileName.includes('?C=') && !fileName.includes('.')) {
            fileNames.push({
                name: fileName,
                date: getFileDate(fileName) // Obtener la fecha del archivo
            });
        }
    });

    // Ordenar los nombres de archivo por fecha de forma descendente
    fileNames.sort(function(a, b) {
        return b.date.localeCompare(a.date);
    });

    // Crear opciones de la lista desplegable y agregar los nombres de archivo
		fileNames.forEach(function(file) {
        var option = document.createElement('option');
        option.value = folderPath2 + file.name;
        option.textContent = file.name;
        //fileSelect.appendChild(option);
		fechainicio.appendChild(option);
	});
		fileNames.forEach(function(file) {
        var option = document.createElement('option');
        option.value = folderPath2 + file.name;
        option.textContent = file.name;
		fechafin.appendChild(option);
    });
}

// Función para extraer el nombre del archivo o carpeta
function extractFileName(filePath) {
    var match = filePath.match(/([^/]+)\/?$/); // Expresión regular para extraer el último segmento después de la última "/"

    if (match) {
        return match[1];
    }

    return null;
}

// Función para obtener la fecha del archivo
function getFileDate(fileName) {
    var dateParts = fileName.split('-');
    var year = parseInt(dateParts[2]);
    var month = parseInt(dateParts[1]) - 1; // Restamos 1 al mes porque en JavaScript los meses van de 0 a 11
    var day = parseInt(dateParts[0]);

    return year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function catfileCSV() {
	var fileBuff = '';
	var sFileSC;
  const fechaInicio = document.querySelector("#fecha-inicio").value;
  const fechaFin = document.querySelector("#fecha-fin").value;
  const fileCSV = CSVinRange(fechaInicio, fechaFin);
  
  if (fileCSV != null) {
	fileBuff = "Fecha;Hora;Energia Extracto (kWh);Energia Caldera (kWh);Energia Malta (kWh);Energia Limpia (kWh)" + "\r\n";
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

  for (let i = opcionesSelect.length-1; i >= 0; i--) {
    var fechaArchivo = opcionesSelect[i].value;
    if (fechaArchivo >= fechaInicio && fechaArchivo <= fechaFin) {
		fileCSV.push(fechaArchivo + "/TEnergias.csv");
    } else {
		if (fechaInicio > fechaFin){
			alert('Rango de fechas incorrecta.');
			fileCSV = [];
			return null;
		}
	}
  }

	return fileCSV;
}

function downloadCSV(contenidoCSV, FileCatName) {
  const blob = new Blob([contenidoCSV], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = FileCatName + ".csv";
  a.click();
}
