import { desmarcarElementos } from "../../../helpers/style_functions.js";
import { grabando_cont } from "../../../js/index.js";

function bind(sequence, elements) {
  Mousetrap.bind(sequence, function () {
    elements[0].click();
  });
  desmarcarElementos(elements);
  grabando_cont.innerHTML = ""
}

export { bind }
