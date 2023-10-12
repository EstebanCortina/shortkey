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




