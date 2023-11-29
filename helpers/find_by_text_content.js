function find_by_text_content(textParam) {
  return new Promise((resolve) => {
    // Selecciona todos los elementos dentro del cuerpo del documento
    let elementosEnBody = document.body.querySelectorAll('*');

    // Filtra los elementos cuyo textContent coincide con el texto buscado y que no son etiquetas script o meta
    let elementosCoincidentes = Array.from(elementosEnBody).filter(function (elemento) {
      return (
        elemento.textContent.includes(textParam) &&
        elemento.children.length === 0 &&
        elemento.tagName.toLowerCase() !== 'script' &&
        elemento.tagName.toLowerCase() !== 'meta'
      );
    });

    resolve(elementosCoincidentes);
  });
}

export { find_by_text_content };
