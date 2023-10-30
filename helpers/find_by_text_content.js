function find_by_text_content(textParam) {
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
export { find_by_text_content }
