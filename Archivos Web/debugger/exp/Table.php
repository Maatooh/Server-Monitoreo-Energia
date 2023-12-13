<!DOCTYPE html>
<html>
<head>
    <title>Visualizador de CSV desde URL</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <input type="text" id="csvUrl" placeholder="Ingrese la URL del archivo CSV">
    <button onclick="loadCSV()">Cargar</button>
    <div id="tableContainer"></div>
    <script src="script.js"></script>
</body>
</html>








