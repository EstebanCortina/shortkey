import { recordSequence } from "./stages/actions/record.js";
import { grabando_cont } from "../js/index.js";

Mousetrap.bind("r s", function () {
  grabando_cont.innerHTML = "🔴 GRABANDO";
  recordSequence();
});