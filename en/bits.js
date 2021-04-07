let bits = getParameterByName('bits');
if(bits != ""){
    if(bits<1){
        console.log("You cant put a number less than 0.01!")
    } else {
        usd = valoresScript.bit * bits;
        document.getElementById('resultado').innerHTML = "$" + usd + " USD";
    }
}