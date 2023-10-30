import { recordSequence } from "../shortkey/stages/actions/record.js";


const btnGrabar = document.getElementById("btnGrabar");
const btnAlerta = document.getElementById("btnAlerta");
let grabando_cont = document.getElementById("grabando-cont");

btnGrabar.addEventListener("click", () => {
  recordSequence();
});

btnAlerta.addEventListener("click", () => {
  alert("alert");
});



function obtenerElementosButton() {
  return Array.from(document.querySelectorAll("button"));
}

/*
Mousetrap.bind("r f", function(){
  document.getElementById("grabando-cont").innerHTML="Finish";
});
*/

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.shiftKey) {
    e.preventDefault();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    confirm = !confirm;
  }
});

// Agrega un evento 'keydown' al documento
document.addEventListener('keydown', function (event) {
  // Obtiene el código de la tecla presionada
  const keyCode = event.key;

  // Crea un elemento de párrafo (p) para mostrar el código de la tecla
  const p = document.createElement('p');
  p.textContent = `Tecla presionada: ${keyCode}`;

  // Agrega el elemento de párrafo al cuerpo del documento (body)
  document.body.appendChild(p);
});

export { grabando_cont }


