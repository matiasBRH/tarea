let numeroAleatorio = "";
function comenzarJuego() {
  document.getElementById("comenzarJuego").disabled = true;
  document.getElementById("botonEnviar").disabled = false;
  numeroAleatorio = Math.ceil(Math.random() * 10);
  // console.log(numeroAleatorio);
}

function terminarJuego() {
  document.getElementById("comenzarJuego").disabled = false;
  document.getElementById("botonEnviar").disabled = true;
  document.getElementById("campoNumero").value = "";
}

function capturarNumeroInput(e) {
  // console.log(e.value);
  switch (true) {
    case e.value == numeroAleatorio:
      alert(`El numero magico es ${numeroAleatorio}. Has ganado!`);
      terminarJuego();
      break;
    case e.value > numeroAleatorio && e.value <= 10:
      alert("El numero ingresado es mayor al numero magico");
      break;
    case e.value < numeroAleatorio && e.value >= 1:
      alert("El numero ingresado es menor al numero magico");
      break;
    default:
      alert("Ingresar un numero del 1 al 10");
      break;
  }
  
}

document.getElementById("botonEnviar").disabled = true;
document.getElementById("botonEnviar").addEventListener("click", function () {
  // console.log(document.getElementById("campoNumero").value);
  capturarNumeroInput(document.getElementById("campoNumero"));
});
// document.getElementById("campoNumero").addEventListener("keypress", function (evt) {
//   if (evt.which < 48 || evt.which > 57)
//   {
//       evt.preventDefault();
//   }
// });