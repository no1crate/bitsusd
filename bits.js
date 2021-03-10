let bits = getParameterByName('bits');
if(bits != ""){
    if(bits<1){
        console.log("No puedes poner un numero menor a 0!")
    } else {
        usd = valoresScript.bit * bits;
        document.getElementById('resultado').innerHTML = "$" + usd + " USD";
    }
}