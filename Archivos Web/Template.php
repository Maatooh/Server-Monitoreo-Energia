<html>
  <head>
  <title>Maltexco Mediciones</title>
  <link rel="icon" type="image/x-icon" href="/icon.gif">
  <link rel="stylesheet" href="home.css">
  <link rel="stylesheet" href="popup.css">
  <style>
        .container {
            width: 400px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
			background-color: white;
        }

        h2 {
            margin-top: 0;
        }

        table {
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
    </style>
  </head>
  
    <div class="container2">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
				<div class="Logo"></div>
                <div class="col-lg-12 login-title">MEDICIONES</div>

                <div class="col-lg-12 lect-form">
                        <form>
								<h1 class="wcaptions svn" >Planta Temuco</h1>
								<h2 class="wcaptions svn" >Valores expresados en kWh</h2>
							<div class="datatable">
								<div class="valuegroup">
									<div class="container">
        <h2>Energia Extracto</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Tensión (V)</th>
                <th>Corriente (A)</th>
            </tr>
            <tr>
                <td>Fase A</td>
                <td id="ETvoltageA">0</td>
                <td id="ETcurrentA">0</td>
            </tr>
            <tr>
                <td>Fase B</td>
                <td id="ETvoltageB">0</td>
                <td id="ETcurrentB">0</td>
            </tr>
            <tr>
                <td>Fase C</td>
                <td id="ETvoltageC">0</td>
                <td id="ETcurrentC">0</td>
            </tr>
        </table>
        <h2>Potencia y Energía Acumulada</h2>
        <p><strong>Potencia Total:</strong> <span id="ETpower">0</span> kW</p>
        <p><strong>Energía Acumulada:</strong> <span id="ETenergy">0</span> kWh</p>
    </div>
								</div>
								<div class="valuegroup">
									<div class="container">
        <h2>Energia Caldera</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Tensión (V)</th>
                <th>Corriente (A)</th>
            </tr>
            <tr>
                <td>Fase A</td>
                <td id="CTvoltageA">0</td>
                <td id="CTcurrentA">0</td>
            </tr>
            <tr>
                <td>Fase B</td>
                <td id="CTvoltageB">0</td>
                <td id="CTcurrentB">0</td>
            </tr>
            <tr>
                <td>Fase C</td>
                <td id="CTvoltageC">0</td>
                <td id="CTcurrentC">0</td>
            </tr>
        </table>
        <h2>Potencia y Energía Acumulada</h2>
        <p><strong>Potencia Total:</strong> <span id="CTpower">0</span> kW</p>
        <p><strong>Energía Acumulada:</strong> <span id="CTenergy">0</span> kWh</p>
    </div>
								</div>
								<div class="valuegroup">
									<div class="container">
        <h2>Energia Limpia</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Tensión (V)</th>
                <th>Corriente (A)</th>
            </tr>
            <tr>
                <td>Fase A</td>
                <td id="MTvoltageA">0</td>
                <td id="MTcurrentA">0</td>
            </tr>
            <tr>
                <td>Fase B</td>
                <td id="MTvoltageB">0</td>
                <td id="MTcurrentB">0</td>
            </tr>
            <tr>
                <td>Fase C</td>
                <td id="MTvoltageC">0</td>
                <td id="MTcurrentC">0</td>
            </tr>
        </table>
        <h2>Potencia y Energía Acumulada</h2>
        <p><strong>Potencia Total:</strong> <span id="MTpower">0</span> kW</p>
        <p><strong>Energía Acumulada:</strong> <span id="MTenergy">0</span> kWh</p>
    </div>
								</div>
								<div class="valuegroup">
									<div class="container">
        <h2>Energia Malta</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Tensión (V)</th>
                <th>Corriente (A)</th>
            </tr>
            <tr>
                <td>Fase A</td>
                <td id="LTvoltageA">0</td>
                <td id="LTcurrentA">0</td>
            </tr>
            <tr>
                <td>Fase B</td>
                <td id="LTvoltageB">0</td>
                <td id="LTcurrentB">0</td>
            </tr>
            <tr>
                <td>Fase C</td>
                <td id="LTvoltageC">0</td>
                <td id="LTcurrentC">0</td>
            </tr>
        </table>
        <h2>Potencia y Energía Acumulada</h2>
        <p><strong>Potencia Total:</strong> <span id="LTpower">0</span> kW</p>
        <p><strong>Energía Acumulada:</strong> <span id="LTenergy">0</span> kWh</p>
    </div>
								</div>
							</div>
							<div id="DatasheetTools">
								<div id="file-container">
								<p><span style="color: rgb(239, 239, 239);">Fecha</span></p>
								<select id="file-select"></select>
								</div>
								
								<button type="button" id="openPopup0">Registro Energia</button>
								<button type="button" id="openPopup1">Registro Extracto</button>
								<button type="button" id="openPopup2">Registro Caldera</button>
								<button type="button" id="openPopup3">Registro Limpia</button>
								<button type="button" id="openPopup4">Registro Malta</button>
								
								<div id="file-container">
								<p><span style="color: rgb(239, 239, 239);">Resumen desde</span></p>
								<select id="fecha-inicio"></select>
								<p><span style="color: rgb(239, 239, 239);">hasta</span></p>
								<select id="fecha-fin"></select>
								<button type="button" onclick="catfileCSV()">Descargar Energia</button>
								</div>
								<div id="popupContainer">
								<div id="popupContent">
								<button type="button"  id="closePopup">X</button>
								<h1 id="Settitle">Mediciones Maltexco</h1>
								<div id="DownloadBotton">Descargar</div>
								<div id="tableContainer"></div>
								</div>
								</div>
								
							</div>
							<canvas id="PlantaTemuco"></canvas>
						</form>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
	</div>	
  </body>
  <footer><p class="copyr"> Maltexco Mediciones, Developed by Maatooh-Software 2023 ©</p></footer>
</html>

