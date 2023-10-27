import { marcarElementos, desmarcarElementos } from "../helpers/style_functions.js";

function buscarElementoHTMLByTextContent(textParam) {
  return new Promise((resolve) => {
    // Selecciona todos los elementos en el documento
    let todosLosElementos = document.querySelectorAll('*');

    // Filtra los elementos cuyo textContent coincide con el texto buscado
    let elementosCoincidentes = Array.from(todosLosElementos).filter(function (elemento) {
      return elemento.textContent.includes(textParam) && elemento.children.length === 0;
    });
    resolve(elementosCoincidentes);
  });
}
function buscarElementoHTMLByName(name) {
  return new Promise((resolve, reject) => {
    let element = document.getElementById(name);
    if (element === null) {
      reject(new Error("El elemento no existe"));
    } else {
      resolve(element);
    }
  });
}


function recordSequence() {
  Mousetrap.record(async function (sequence) {
    if (sequence.length !== 0) {
      let elementContent = prompt(`Asignar: ${sequence[0]}`, "Contenido del elemento:");
      try {
        let element = await buscarElementoHTMLByTextContent(elementContent);
        marcarElementos(element);
        setTimeout(() => {
          if (window.confirm("Esta seguro?")) {
            console.log(element);
            Mousetrap.bind(sequence, function () {
              console.log(sequence);
              element[0].click();
            });
            desmarcarElementos(element);
          } else {
            desmarcarElementos(element);
          }
        }, 2000);
        grabando_cont.innerHTML = "";
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Atajo vacio, cancelando");
    }

  });
}

console.log(await buscarElementoHTMLByTextContent('Facebook'))

export { recordSequence }