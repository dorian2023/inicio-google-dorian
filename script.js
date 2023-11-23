// Obtener los elementos del DOM
var query = document.getElementById("query"); // El campo de texto
var suggestions = document.getElementById("suggestions"); // El elemento que muestra las sugerencias
var searchButton = document.getElementById("search-button"); // El botón de buscar

// Crear un array con algunas sugerencias de búsqueda
var data = ["Realizando projecto en EDTecnica", "Realizar inicio de google, asignacion de EDTecnica", "Programacion  Full-Stack Developers EDTecnica"];

// Crear una función que muestre las sugerencias basadas en el texto ingresado
function showSuggestions() {
  // Obtener el valor del campo de texto
  var value = query.value.toLowerCase();
  // Vaciar el elemento de sugerencias
  suggestions.innerHTML = "";
  // Si el valor no está vacío
  if (value) {
    // Mostrar el elemento de sugerencias
    suggestions.style.display = "block";
    // Recorrer el array de datos
    for (var i = 0; i < data.length; i++) {
      // Si el dato contiene el valor
      if (data[i].toLowerCase().includes(value)) {
        // Crear un elemento li con el dato
        var li = document.createElement("li");
        li.textContent = data[i];
        // Añadir un evento click al li
        li.addEventListener("click", function() {
          // Asignar el texto del li al campo de texto
          query.value = this.textContent;
          // Ocultar el elemento de sugerencias
          suggestions.style.display = "none";
          // Simular un click en el botón de buscar
          searchButton.click();
        });
        // Añadir el li al elemento de sugerencias
        suggestions.appendChild(li);
      }
    }
  } else {
    // Si el valor está vacío, ocultar el elemento de sugerencias
    suggestions.style.display = "none";
  }
}

// Añadir un evento input al campo de texto
query.addEventListener("input", showSuggestions);
