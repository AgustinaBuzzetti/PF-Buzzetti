function mostrarOcultar(id, boton) {
  const div = document.getElementById(id);
  const style = window.getComputedStyle(div);

  if (style.display === 'none') {
      div.style.display = 'flex';
      boton.textContent = 'Ver menos';
  } else {
      div.style.display = 'none';
      boton.textContent = 'Ver más';
  }
}
