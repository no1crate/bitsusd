let usd = getParameterByName('usd');
if(usd != ""){
    if(usd<1){
        console.log("No puedes poner un numero menor a 0!")
    } else {
        bits = valoresScript.usd * usd;
        document.getElementById('resultado').innerHTML = bits + " bit/s";
    }
}