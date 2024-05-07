import { ask_by_prompt } from "../elements/ask_by_prompt.js";
import { find_by_text_content } from "../../../helpers/find_by_text_content.js";
import { listen_element } from "../../../helpers/listen_element.js";
import {
  marcarElementos,
  desmarcarElementos,
} from "../../../helpers/style_functions.js";
import { yes_or_no } from "../confirmations/yes_or_no.js";
import { bind } from "../associate/bind.js";
import { ask_speach } from "../elements/ask_method.js";

function recordSequence() {
  Mousetrap.record(async function (sequence) {
    if (sequence.length !== 0) {
      ask_speach().then(async (answer) => {
        if (answer.isConfirmed) {
          console.log("si");
          listen_element(sequence)
            .then(async (element_name) => {
              console.log(element_name);
              try {
                let elements = await find_by_text_content(element_name);
                marcarElementos(elements);
                setTimeout(() => {
                  if (yes_or_no()) {
                    bind(sequence, elements);
                    desmarcarElementos(elements);
                  } else {
                    desmarcarElementos(elements);
                  }
                }, 2000);
              } catch (error) {
                alert(error);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("si");
          let param = ask_by_prompt(sequence);
          try {
            let elements = await find_by_text_content(param);
            marcarElementos(elements);
            setTimeout(() => {
              if (yes_or_no()) {
                bind(sequence, elements);
                desmarcarElementos(elements);
              } else {
                desmarcarElementos(elements);
              }
            }, 2000);
          } catch (error) {
            alert(error);
          }
        }
      });
    }
  });
}

export { recordSequence };
