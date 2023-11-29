  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let selectedIndex = -1;


  // Función para actualizar la lista de resultados en el modal
  function updateSearchResults(query) {
    const results = getSearchResults(query);
    searchResults.innerHTML = '';

    if (results.length > 0) {
      results.forEach((result, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = result;
        listItem.addEventListener('click', () => {
          // Aquí puedes realizar la acción que desees al hacer clic en un resultado
          console.log('Acción al hacer clic en:', result);
          hideSearchResults();
        });

        searchResults.appendChild(listItem);
      });

      showSearchResults();
    } else {
      hideSearchResults();
    }
  }

  // Función para mostrar el modal de búsqueda
  function showSearchResults() {
    searchResults.style.display = 'block';
  }

  // Función para ocultar el modal de búsqueda
  function hideSearchResults() {
    searchResults.style.display = 'none';
  }

  // Evento de teclado para navegar por los resultados
  searchInput.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'ArrowUp' && selectedIndex > 0) {
      selectedIndex--;
    } else if (key === 'ArrowDown' && selectedIndex < searchResults.children.length - 1) {
      selectedIndex++;
    }

    // Actualiza la apariencia de la selección
    for (let i = 0; i < searchResults.children.length; i++) {
      searchResults.children[i].classList.toggle('selected', i === selectedIndex);
    }
  });

  // Evento de teclado para realizar la acción al presionar Enter
  searchInput.addEventListener('keyup', (event) => {
    const key = event.key;

    if (key === 'Enter' && selectedIndex !== -1) {
      const selectedResult = searchResults.children[selectedIndex];
      // Aquí puedes realizar la acción que desees al presionar Enter en un resultado
      console.log('Acción al presionar Enter en:', selectedResult.textContent);
      hideSearchResults();
    }
  });

  // Evento de enfoque para mostrar los resultados al hacer clic en el campo de búsqueda
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() !== '') {
      updateSearchResults(searchInput.value.trim());
    }
  });

  // Evento de entrada para actualizar los resultados mientras escribes
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    updateSearchResults(query);
  });

  // Oculta los resultados al hacer clic fuera del modal de búsqueda
  document.addEventListener('click', (event) => {
    if (!document.getElementById('search-modal').contains(event.target)) {
      hideSearchResults();
    }
  });
