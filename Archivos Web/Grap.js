if (typeof chart === 'undefined') {
  let chart;
}
// Obtener una referencia al canvas y crear el gráfico
  function Loadchart() {
  try {
    const canvas = document.getElementById('PlantaTemuco');
  const ctx = canvas.getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Extracto',
          data: [],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension: 0.1
        },
        {
          label: 'Caldera',
          data: [],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          tension: 0.1
        },
        {
          label: 'Malta',
          data: [],
          borderColor: 'rgb(255, 206, 86)',
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          tension: 0.1
        },
        {
          label: 'Limpia',
          data: [],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
      x: {
      title: {
        display: true,
        text: 'Fecha de sensado'
      }
    },
      y: {
		min:0,
        title: {
          display: true,
          text: 'Energia consumida kWh'
        }
      }
    }
	}
  });
  } catch (error) {
    console.error('El script ha fallado. Volviendo a cargar desde el inicio...', error);
    //Loadchart();
  }
}

	Loadchart();
  // Agregar un nuevo valor a cada gráfica cada segundo

	
	
  function setvalues(Index,V1,V2,V3,A1,A2,A3,Pw,Pac){
	  switch (Index) {
	  case 0:
	  document.querySelector("#ETvoltageA").innerText=V1;
	  document.querySelector("#ETvoltageB").innerText=V2;
	  document.querySelector("#ETvoltageC").innerText=V2;
	  document.querySelector("#ETcurrentA").innerText=A1;
	  document.querySelector("#ETcurrentB").innerText=A2;
	  document.querySelector("#ETcurrentC").innerText=A3;
	  document.querySelector("#ETpower").innerText=Pw;
	  document.querySelector("#ETenergy").innerText=Pac;
		break;
	  case 1:
	  document.querySelector("#CTvoltageA").innerText=V1;
	  document.querySelector("#CTvoltageB").innerText=V2;
	  document.querySelector("#CTvoltageC").innerText=V2;
	  document.querySelector("#CTcurrentA").innerText=A1;
	  document.querySelector("#CTcurrentB").innerText=A2;
	  document.querySelector("#CTcurrentC").innerText=A3;
	  document.querySelector("#CTpower").innerText=Pw;
	  document.querySelector("#CTenergy").innerText=Pac;
		break;
	  case 2:
	  document.querySelector("#MTvoltageA").innerText=V1;
	  document.querySelector("#MTvoltageB").innerText=V2;
	  document.querySelector("#MTvoltageC").innerText=V2;
	  document.querySelector("#MTcurrentA").innerText=A1;
	  document.querySelector("#MTcurrentB").innerText=A2;
	  document.querySelector("#MTcurrentC").innerText=A3;
	  document.querySelector("#MTpower").innerText=Pw;
	  document.querySelector("#MTenergy").innerText=Pac;
		break;
	  case 3:
	  document.querySelector("#LTvoltageA").innerText=V1;
	  document.querySelector("#LTvoltageB").innerText=V2;
	  document.querySelector("#LTvoltageC").innerText=V2;
	  document.querySelector("#LTcurrentA").innerText=A1;
	  document.querySelector("#LTcurrentB").innerText=A2;
	  document.querySelector("#LTcurrentC").innerText=A3;
	  document.querySelector("#LTpower").innerText=Pw;
	  document.querySelector("#LTenergy").innerText=Pac;
		break;
	  }
  }
  

  function addInData(Lbl,Sv1,Sv2,Sv3,Sv4){
	chart.data.labels.push(Lbl);
    chart.data.datasets[0].data.push(Sv1);
    chart.data.datasets[1].data.push(Sv2);
    chart.data.datasets[2].data.push(Sv3);
    chart.data.datasets[3].data.push(Sv4);
    chart.update();
  };
  
  function resetChartData() {
  chart.data.labels = [];
  chart.data.datasets.forEach(dataset => {
    dataset.data = [];
  });
  chart.update();
} 
  
  function LoadInData(dataString){
	chart.data = JSON.parse(dataString);
	chart.update();
  };
  
  
  function readFileCSV(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // Aquí tienes el contenido del archivo CSV
      //console.log(data);

      // Aquí procesas los datos CSV y los conviertes en el formato JSON requerido
      var jsonData = procesarDatosCSV(data);

      // Cargas los datos en el gráfico utilizando la función LoadInData
      LoadInData(JSON.stringify(jsonData));
    })
    .catch(error => {
      console.error('Error al leer el archivo CSV:', error);
    });
}

function procesarDatosCSV(csvData) {
  var lines = csvData.split('\n');
  var columnTitles = lines[0].split(';');
  var jsonData = {
    labels: [],
    datasets: [
      {
        label: 'Extracto',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      },
      {
        label: 'Caldera',
        data: [],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.1
      },
      {
        label: 'Malta',
        data: [],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        tension: 0.1
      },
      {
        label: 'Limpia',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1
      }
    ]
  };

  for (var i = 1; i < lines.length-1; i++) {
    var line = lines[i].split(';');
    var label = line[0];
    jsonData.labels.push(label);

    for (var j = 1; j < line.length; j++) {
      var value = line[j];
      jsonData.datasets[j - 1].data.push(value);
    }
  }

  return jsonData;
}



