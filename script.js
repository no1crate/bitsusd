let valoresScript = {
  bit: 0.01,
  usd: 100
}
function submitBITS(){
  bits = document.getElementById('bits').value;
  if(bits<0){
  console.log("No puedes poner un numero menor a 0!")
  } else {
  bits = bits.replace('.', '');
  usd = valoresScript.bit * bits;
  document.getElementById('resultado').innerHTML = "$" + usd + " USD";
  }
}
function submitUSD(){
  usd = document.getElementById('usd').value;
  if(usd<0.01){
  console.log("No puedes poner un numero menor a 0.01!")
  } else {
  bits = valoresScript.usd * usd;
  document.getElementById('resultado').innerHTML = bits + " bit/s";
  }
}