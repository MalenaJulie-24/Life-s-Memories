 // Función que simula el registro del usuario
        function registerUser() {
            alert("¡Registro exitoso!");
            // Redirige a la página de inicio
            window.location.href = "index.html";
        }
// Selecciona el botón y el cuerpo del documento
const botonModoOscuro = document.getElementById('modoOscuroBoton');
const cuerpo = document.body;

// Evento para alternar entre modos
botonModoOscuro.addEventListener('click', () => {
    // Alterna la clase del cuerpo
    cuerpo.classList.toggle('oscuro');
    cuerpo.classList.toggle('claro');

    // Cambia el texto del botón según el modo actual
    if (cuerpo.classList.contains('oscuro')) {
        botonModoOscuro.textContent = 'Modo Claro';
    } else {
        botonModoOscuro.textContent = 'Modo Oscuro';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const carruseles = document.querySelectorAll(".carrusel");
  
    carruseles.forEach((carrusel) => {
      const imagenes = carrusel.querySelector(".imagenes");
      const totalImagenes = imagenes.querySelectorAll("img").length;
      let indice = 0;
  
      const btnPrev = carrusel.querySelector(".prev");
      const btnNext = carrusel.querySelector(".next");
  
      // Función para actualizar la posición del carrusel
      const actualizarCarrusel = () => {
        imagenes.style.transform = `translateX(-${indice * 100}%)`;
      };
  
      // Botón para retroceder
      btnPrev.addEventListener("click", () => {
        indice = (indice - 1 + totalImagenes) % totalImagenes;
        actualizarCarrusel();
      });
  
      // Botón para avanzar
      btnNext.addEventListener("click", () => {
        indice = (indice + 1) % totalImagenes;
        actualizarCarrusel();
      });
  
      // Movimiento automático (opcional)
      setInterval(() => {
        indice = (indice + 1) % totalImagenes;
        actualizarCarrusel();
      }, 5000); // Cambia la imagen cada 5 segundos
    });
  });
  
