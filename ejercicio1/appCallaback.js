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
/*

function suma(operando1, operando2, callback) {
  var operando1 = parseFloat(document.getElementById("numero1").value);
  var operando2 = parseFloat(document.getElementById("numero2").value);
  // Simulamos una operación asincrónica, como una solicitud AJAX o una tarea de temporización.
  setTimeout(function () {
    const resultado = operando1 + operando2;
    callback(resultado);
  }, 2000); // Espera 2 segundo antes de llamar al callback
}

function miCallback(resultado) {
  console.log("El resultado de la operación es: " + resultado);
}

suma(operando1, operando2, miCallback);  */
