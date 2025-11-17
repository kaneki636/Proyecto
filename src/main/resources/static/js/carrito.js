document.addEventListener('DOMContentLoaded', function () {
  const btnCarrito = document.getElementById('btn-carrito');
  const carritoCompras = document.getElementById('carrito-compras');
  const itemsCarrito = document.getElementById('items-carrito');
  const contadorCarrito = document.getElementById('contador-carrito');
  const totalCarrito = document.getElementById('total-carrito');
  const btnVaciarCarrito = document.getElementById('vaciar-carrito');
  const btnComprarCarrito = document.getElementById('comprar-carrito');
  const botonesComprar = document.querySelectorAll('.btn.comprar');

  const modalPago = document.getElementById('modal-pago');
  const btnCerrarModal = document.querySelector('.cerrar-modal');
  const metodosPago = document.querySelectorAll('.metodo-pago');
  const formulariosPago = document.querySelectorAll('.formulario-pago');

  const btnEliminarSeleccionados = document.createElement('button');
  btnEliminarSeleccionados.className = 'btn eliminar-seleccionados';
  btnEliminarSeleccionados.textContent = 'Eliminar seleccionados';
  carritoCompras.appendChild(btnEliminarSeleccionados);

  let carrito = [];

  btnCarrito.addEventListener('click', function () {
    carritoCompras.classList.toggle('mostrar');
  });

  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    actualizarCarrito();
  }

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', function () {
      const producto = this.closest('.product');
      const nombre = producto.querySelector('h3').textContent;
      const precioTexto = producto.querySelector('.precio').textContent;
      const precio = parseInt(precioTexto.replace(/\D/g, ''));
      const imagen = producto.querySelector('img').src;

      const inputCantidad = producto.querySelector('.cantidad-input');
      const cantidad = parseInt(inputCantidad.value) || 1;

      agregarAlCarrito({ nombre, precio, imagen, cantidad });
    });
  });

  function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
    guardarCarrito();
    mostrarNotificacion(`${producto.cantidad} ${producto.nombre}(s) añadido(s)`);
  }

  function actualizarCarrito() {
    itemsCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
      total += producto.precio * producto.cantidad;

      const item = document.createElement('div');
      item.className = 'item-carrito';
      item.innerHTML = `
        <input type="checkbox" class="seleccionar-item" data-index="${index}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="info-item">
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio.toLocaleString()}</p>
          <div class="cantidad-control">
            <button class="cantidad-btn menos" data-index="${index}">-</button>
            <input type="number" min="1" value="${producto.cantidad}" class="cantidad-input" data-index="${index}">
            <button class="cantidad-btn mas" data-index="${index}">+</button>
          </div>
        </div>
        <button class="eliminar-item" data-index="${index}">×</button>
      `;
      itemsCarrito.appendChild(item);
    });

    totalCarrito.textContent = total.toLocaleString();
    contadorCarrito.textContent = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);

    document.querySelectorAll('.eliminar-item').forEach(btn => {
      btn.addEventListener('click', function () {
        const index = parseInt(this.dataset.index);
        eliminarDelCarrito(index);
      });
    });

    document.querySelectorAll('.cantidad-btn.menos').forEach(btn => {
      btn.addEventListener('click', function () {
        const index = parseInt(this.dataset.index);
        if (carrito[index].cantidad > 1) carrito[index].cantidad--;
        actualizarCarrito();
        guardarCarrito();
      });
    });

    document.querySelectorAll('.cantidad-btn.mas').forEach(btn => {
      btn.addEventListener('click', function () {
        const index = parseInt(this.dataset.index);
        carrito[index].cantidad++;
        actualizarCarrito();
        guardarCarrito();
      });
    });

    document.querySelectorAll('.cantidad-input').forEach(input => {
      input.addEventListener('change', function () {
        const index = parseInt(this.dataset.index);
        const nuevaCantidad = parseInt(this.value);
        if (nuevaCantidad > 0) carrito[index].cantidad = nuevaCantidad;
        actualizarCarrito();
        guardarCarrito();
      });
    });
  }

  function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    guardarCarrito();
  }

  btnEliminarSeleccionados.addEventListener('click', function () {
    const seleccionados = document.querySelectorAll('.seleccionar-item:checked');
    const indices = Array.from(seleccionados).map(chk => parseInt(chk.dataset.index));
    carrito = carrito.filter((_, index) => !indices.includes(index));
    actualizarCarrito();
    guardarCarrito();
    mostrarNotificacion('Productos seleccionados eliminados');
  });

  btnVaciarCarrito.addEventListener('click', function () {
    carrito = [];
    actualizarCarrito();
    guardarCarrito();
    mostrarNotificacion('Carrito vaciado');
  });

  // (tu modal de pago sigue igual)
  // ...

  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    setTimeout(() => notificacion.classList.add('mostrar'), 10);
    setTimeout(() => {
      notificacion.classList.remove('mostrar');
      setTimeout(() => notificacion.remove(), 300);
    }, 3000);
  }
});
