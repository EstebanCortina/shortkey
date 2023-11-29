import { recordSequence } from "./stages/actions/record.js";
import { grabando_cont, searchModal } from "../js/index.js";

Mousetrap.bind("r s", function () {
  grabando_cont.innerHTML = "🔴 GRABANDO";
  recordSequence();
});

Mousetrap.bind("s m", function () {
  searchModal.style.display = 'block';
  console.log("Se");
});

Mousetrap.bind("h m", function () {
  searchModal.style.display = 'none';
  console.log("Se");
});