function marcarElementos(elementos) {
  elementos.forEach(elemento => {
    elemento.style.border = 'solid red';
  });
}

function desmarcarElementos(elementos) {
  elementos.forEach(elemento => {
    elemento.style.border = '';
  });
}

export { marcarElementos, desmarcarElementos }