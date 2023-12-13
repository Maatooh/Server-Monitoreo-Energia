<div id="file-container">
    <select id="file-select"></select>
</div>

<script>
    window.addEventListener('DOMContentLoaded', function() {
        var fileSelect = document.getElementById('file-select');
        var folderPath = 'https://medicionesmaltexco.com/bWVkaWNpb25lc21hbHRleGNv/';

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
        xhr.open('GET', folderPath);
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
                    fileNames.push(fileName);
                }
            });

            // Ordenar los nombres de archivo de forma descendente
            fileNames.sort().reverse();

            // Crear opciones de la lista desplegable y agregar los nombres de archivo
            fileNames.forEach(function(fileName) {
                var option = document.createElement('option');
                option.value = folderPath + fileName;
                option.textContent = fileName;
                fileSelect.appendChild(option);
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
    });
</script>








