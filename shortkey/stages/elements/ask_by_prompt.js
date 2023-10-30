function ask_by_prompt(sequence) {
  let elementContent = prompt(`Asignar: ${sequence[0]}`, "Contenido del elemento:");
  return elementContent;
}

export { ask_by_prompt }



