
function soma(a, b){
  return a + b
}

function ehPar(num){
  return (num % 2 == 0) ? true : false
}

function inverterString(invertida){
  return invertida.split("").reverse().join("")
}


module.exports = { soma, ehPar, inverterString };