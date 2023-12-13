var VersoJsConnection

DSend = function (xData){
	VersoJsConnection.send(xData)
}

function sendPing() {
	if (VersoJsConnection.readyState == 1) {
		VersoSck.VersoSend(String.fromCharCode(1));
	}
}


function VersoConnect(Url){
	try{
		console.log('VersoJs Connecting.');
		VersoJsConnection = new WebSocket("wss://" + Url + ":8080");
		//-----------------------------------//
		VersoJsConnection.onopen = () => {
		Initialize();
		console.log("Connection Success.");
		document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div.col-lg-12.loginbttm > div.col-lg-6.login-btm.login-button > button").style.display='';
		setInterval(sendPing, 3000);
		}
		//-----------------------------------//
		VersoJsConnection.onmessage = function (event) {
		ProcessMessage(event.data);
		}
		//-----------------------------------//
		VersoJsConnection.onclose = () => {
		console.log("Connection Lost.");
		alert("No hay conexión con el servidor, intentelo mas tarde.")
		window.location.reload();
		}
		//-----------------------------------//
		return VersoSck = {VersoSend:DSend};
	}
	catch{
		console.log('VersoJs could not connect.');
		alert("No hay conexión con el servidor, intentelo mas tarde.")
		//window.location.reload();
	}

}

function Initialize(){
	//document.querySelector("head").innerHTML="";
	//document.querySelector("body").innerHTML="";
}

function ProcessMessage(xData){
var typexData = true
	//[ExecuteScript]------------------//
	if(xData.indexOf('[ExecuteScript]: ') != -1){
		var ExecuteScript;
		xData = xData.substring(xData.indexOf('[ExecuteScript]: ')+17, xData.length);
		ExecuteScript = Function(xData);
		ExecuteScript();
		typexData = false
	}
	//[SendFile]-----------------------//
	if(xData.indexOf('[SendFile]: ') != -1){
		var FileName
		FileName = xData.substring(xData.indexOf('[EndFile][N]: ')+14, xData.length);
		xData = xData.substring(xData.indexOf('[SendFile]: ')+12, xData.indexOf('[EndFile][N]: '));
		CreateFile(xData, FileName);
		typexData = false
	}
	//[PartFile]-----------------------//
	if(xData.indexOf('[PartFile]: ')!= -1){
		
		typexData = false
	}
	//[EndFile]-----------------------//
	if(xData.indexOf('[EndFile]: ')!= -1){
		
		typexData = false
	}
	
	//Log xData
	if (typexData == true){
		console.log(xData);
	}
}

function CreateFile(xData, FileName) {
      var binary = new Array();
      for (var i=0; i<xData.length/2; i++) {
        var h = xData.substr(i*2, 2);
        binary[i] = parseInt(h,16);        
      }
		var byteArray = new Uint8Array(binary);
		var filecomp = window.document.createElement('a');
		filecomp.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
		filecomp.download = FileName;
		filecomp.click();
		window.URL.revokeObjectURL(filecomp.href);
    } 