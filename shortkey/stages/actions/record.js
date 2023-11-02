import { ask_by_prompt } from "../elements/ask_by_prompt.js";
import { find_by_text_content } from "../../../helpers/find_by_text_content.js";
import { marcarElementos, desmarcarElementos } from "../../../helpers/style_functions.js";
import { yes_or_no } from "../confirmations/yes_or_no.js"
import { bind } from "../associate/bind.js"

function recordSequence() {
  Mousetrap.record(async function (sequence) {
    if (sequence.length !== 0) {
      let param = ask_by_prompt(sequence);
      try {
        let elements = await find_by_text_content(param);
        marcarElementos(elements);
        setTimeout(() => {
          if (yes_or_no()) {
            bind(sequence, elements)
            desmarcarElementos(elements)
          } else {
            desmarcarElementos(elements)
          }
        }, 2000);
      } catch (error) {
        alert(error);
      }
    }
  });
}

export { recordSequence }

