async function ask_speach() {
  return Swal.fire({
    title: "¿Buscar por voz?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Si`,
    denyButtonText: `No`,
  });
}

export { ask_speach };

