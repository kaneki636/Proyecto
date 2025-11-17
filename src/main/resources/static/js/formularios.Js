// Función genérica para manejar envíos de formularios
function manejarEnvio(formId, modulo) {
  document.getElementById(formId).addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`${modulo} registrado correctamente.`);
    this.reset();
  });
}

manejarEnvio('form-compra', 'Orden de Compra');
manejarEnvio('form-inventario', 'Inventario');
manejarEnvio('form-venta', 'Venta');
