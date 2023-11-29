import { recordSequence } from "../shortkey/stages/actions/record.js";
import { find_by_text_content } from "../helpers/find_by_text_content.js";

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

/*
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

*/


// MODAL //

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchModal = document.getElementById('search-modal');

searchInput.addEventListener('keyup', async function () {
  searchResults.innerHTML = '';
  try {
    const query = searchInput.value;
    if (query) {
      searchResults.style.display = 'block';
      let elements = await find_by_text_content(query);
      console.log(elements);
      elements.forEach(element => {
        const resultadoElemento = document.createElement('p');
        resultadoElemento.textContent = element.innerText; // Ajusta esto según la estructura de tus datos.
        // Agrega el elemento de resultado al elemento 'search-results'.
        searchResults.appendChild(resultadoElemento);
      });
    } else {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
    }
  } catch (error) {
    alert(error);
  }
});



export { grabando_cont, searchModal }


