let num1 = 0;
let num2 = 0;

function obtenerValores() {
  num1 = parseFloat(document.getElementById("operando1").value);
  num2 = parseFloat(document.getElementById("operando2").value);
}

function sumar() {
  obtenerValores();
  document.getElementById("resultado").textContent = num1 + num2;
}

function restar() {
  obtenerValores();
  document.getElementById("resultado").textContent = num1 - num2;
}

function multiplicar() {
  obtenerValores();
  document.getElementById("resultado").textContent = num1 * num2;
}

function dividir() {
  obtenerValores();
  if (num2 !== 0) {
    document.getElementById("resultado").textContent = num1 / num2;
  } else {
    document.getElementById("resultado").textContent =
      "Error: No se puede dividir por cero.";
  }
}

function resetear() {
  document.getElementById("operando1").value = "";
  document.getElementById("operando2").value = "";
  document.getElementById("resultado").textContent = "0";
}
