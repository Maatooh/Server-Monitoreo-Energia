document.getElementById('openPopup0').addEventListener('click', function() {
	loadCSV(0);
	document.querySelector("#Settitle").innerText = "Energia Fecha " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length).replaceAll("-","/")
  document.getElementById('popupContainer').style.display = 'block';
});
document.getElementById('openPopup1').addEventListener('click', function() {
	loadCSV(1);
	document.querySelector("#Settitle").innerText = "Extracto Fecha " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length).replaceAll("-","/")
  document.getElementById('popupContainer').style.display = 'block';
});
document.getElementById('openPopup2').addEventListener('click', function() {
	loadCSV(2);
	document.querySelector("#Settitle").innerText = "Caldera Fecha " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length).replaceAll("-","/")
  document.getElementById('popupContainer').style.display = 'block';
});
document.getElementById('openPopup3').addEventListener('click', function() {
	loadCSV(3);
	document.querySelector("#Settitle").innerText = "Limpia Fecha " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length).replaceAll("-","/")
  document.getElementById('popupContainer').style.display = 'block';
});
document.getElementById('openPopup4').addEventListener('click', function() {
	loadCSV(4);
	document.querySelector("#Settitle").innerText = "Malta Fecha " + document.querySelector("#file-select").value.substr(document.querySelector("#file-select").value.lastIndexOf("/")+1,document.querySelector("#file-select").value.length).replaceAll("-","/")
  document.getElementById('popupContainer').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popupContainer').style.display = 'none';
  
});

document.querySelector("#file-select").onchange = function(){readFileCSV("https://medicionesmaltexco.com" + document.querySelector("#file-select").value + "/TEnergias.csv");}

function waitForElementToLoad() {
  const fileSelectElement = document.querySelector("#file-select");
  if (fileSelectElement != null && fileSelectElement.value != "") {
	//console.log('Clear');
    clearInterval(interval);
    try {
      readFileCSV("https://medicionesmaltexco.com" + fileSelectElement.value + "/TEnergias.csv");
    } catch (error) {
      console.error("Error al ejecutar el código:", error);
    }
  }
}

const interval = setInterval(waitForElementToLoad, 1000);
