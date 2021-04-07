let usd = getParameterByName('usd');
if(usd != ""){
    if(usd<1){
        console.log("You cant put a number less than 0!")
    } else {
        bits = valoresScript.usd * usd;
        document.getElementById('resultado').innerHTML = bits + " bit/s";
    }
}