function loadCSV(CallArea) {
	var csvUrl = document.querySelector("#file-select").value + "/"
	switch(CallArea){
		case 0:
		csvUrl = csvUrl + "TEnergias.csv"
		document.querySelector("#DownloadBotton").onclick = function(){dwfile(csvUrl,"Energias " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length));}
			break;
		case 1:
		csvUrl = csvUrl + "TExtracto.csv"
		document.querySelector("#DownloadBotton").onclick = function(){dwfile(csvUrl,"Extracto " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length));}
			break;
		case 2:
		csvUrl = csvUrl + "TCaldera.csv"
		document.querySelector("#DownloadBotton").onclick = function(){dwfile(csvUrl,"Caldera " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length));}
			break;
		case 3:
		csvUrl = csvUrl + "TMalta.csv"
		document.querySelector("#DownloadBotton").onclick = function(){dwfile(csvUrl,"Limpia " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length));}
			break;
		case 4:
		csvUrl = csvUrl + "TLimpia.csv"
		document.querySelector("#DownloadBotton").onclick = function(){dwfile(csvUrl,"Malta " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length));}
			break;
	}
    if (!csvUrl) {
        alert('Ingrese una URL válida');
        return;
    }

    fetch(csvUrl)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function(event) {
                const contents = event.target.result;
                const decoder = new TextDecoder('windows-1252');
                const decodedContents = decoder.decode(contents);
                const lines = decodedContents.split('\n');
                const table = document.createElement('table');

                // Create table header
                const header = document.createElement('tr');
                const headerCells = lines[0].split(';');
                headerCells.forEach(cell => {
                    const th = document.createElement('th');
                    th.textContent = cell;
                    header.appendChild(th);
                });
                table.appendChild(header);

                // Create table rows
                for (let i = 1; i < lines.length-1; i++) {
                    const row = document.createElement('tr');
                    const cells = lines[i].split(';');
                    cells.forEach(cell => {
                        const td = document.createElement('td');
                        const cellContent = document.createElement('div');
                        cellContent.textContent = cell;
                        td.appendChild(cellContent);
                        row.appendChild(td);
                    });
                    table.appendChild(row);
                }

                // Add table to the container
                const container = document.getElementById('tableContainer');
                container.innerHTML = '';
                container.appendChild(table);
            };

            reader.readAsArrayBuffer(blob);
        })
        .catch(error => {
            console.error('Error al cargar el archivo CSV:', error);
            alert('Ocurrió un error al cargar el archivo CSV. Verifique la URL e intente nuevamente.');
        });
}