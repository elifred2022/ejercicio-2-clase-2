function suma(a, b, callback) {
  operando1 = parseFloat(document.getElementById("numero1").value);
  var a = operando1;
  operando2 = parseFloat(document.getElementById("numero2").value);
  var b = operando2;
  let c = a + b;
  callback(c);
}

function miCallback(c) {
  console.log("El resultado de la operación es: " + c);
}

suma(a, b, miCallback);

// solo hay que llamar en el callback variable c
