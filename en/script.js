let valoresScript = {
  bit: 0.01,
  usd: 100
}
function submitBITS(){
  bits = document.getElementById('bits').value;
  if(bits<0){
  console.log("You cant put a number less than 0!")
  } else {
  bits = bits.replace('.', '');
  usd = valoresScript.bit * bits;
  document.getElementById('resultado').innerHTML = "$" + usd + " USD";
  }
}
function submitUSD(){
  usd = document.getElementById('usd').value;
  if(usd<0.01){
  console.log("You cant put a number less than 0.01!")
  } else {
  usd = usd.replace('.', '')
  bits = valoresScript.usd * usd;
  document.getElementById('resultado').innerHTML = bits + " bit/s";
  }
}