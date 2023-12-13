<link rel="stylesheet" href="popup.css">
<button id="openPopup">Abrir ventana emergente</button>

<div id="popupContainer">
  <div id="popupContent">
    <button id="closePopup">X</button>
    <h1 id="Settitle">Mediciones Maltexco</h1>
    <input type="text" id="csvUrl" placeholder="Ingrese la URL del archivo CSV">
    <button onclick="loadCSV(0)">Cargar</button>
    <div id="tableContainer"></div>
    <script src="script.js"></script>
  </div>
</div>

<script src="popup.js"></script>