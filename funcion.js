function ocultar() {
    var elemento = document.getElementById("contenedor");
    console.log(elemento)
    elemento.classList.toggle("oculto");
   elemento.style.transition="2s"
  }