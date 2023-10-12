import { recordSequence } from "./custom_binds.js";
Mousetrap.bind("r s", function () {
  grabando_cont.innerHTML = "🔴 GRABANDO";
  recordSequence();
});