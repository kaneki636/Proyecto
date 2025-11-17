// Función para cambiar pestañas
function openTab(tabButton, tabName) {
    // Ocultar todos los contenidos
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Quitar la clase active a todos los botones
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostrar la pestaña seleccionada y marcar botón activo
    document.getElementById(tabName).classList.add('active');
    tabButton.classList.add('active');
}


// Gráficos y validación de formularios
document.addEventListener('DOMContentLoaded', function () {
    // === GRÁFICOS ===
    const ventasCtx = document.getElementById('ventasChart')?.getContext('2d');
    if (ventasCtx) {
        new Chart(ventasCtx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ventas en $',
                    data: [12000, 15000, 18000, 9000, 22000, 25000],
                    borderColor: '#ff6b6b',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(255, 107, 107, 0.1)'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const productosCtx = document.getElementById('productosChart')?.getContext('2d');
    if (productosCtx) {
        new Chart(productosCtx, {
            type: 'bar',
            data: {
                labels: ['Unicornio', 'Spiderman', 'Frozen', 'Sorpresa'],
                datasets: [{
                    label: 'Unidades Vendidas',
                    data: [45, 30, 25, 20],
                    backgroundColor: [
                        'rgba(255, 107, 107, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ]
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const pagosCtx = document.getElementById('pagosChart')?.getContext('2d');
    if (pagosCtx) {
        new Chart(pagosCtx, {
            type: 'doughnut',
            data: {
                labels: ['Efectivo', 'Tarjeta', 'Transferencia'],
                datasets: [{ data: [60, 30, 10], backgroundColor: ['#ff6b6b', '#4bc0c0', '#ffce56'] }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const inventarioCtx = document.getElementById('inventarioChart')?.getContext('2d');
    if (inventarioCtx) {
        new Chart(inventarioCtx, {
            type: 'radar',
            data: {
                labels: ['Piñatas', 'Dulces', 'Accesorios', 'Decoración'],
                datasets: [{
                    label: 'Nivel de Stock',
                    data: [70, 90, 50, 30],
                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    borderColor: '#ff6b6b'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const ventasDiaCtx = document.getElementById('ventasDiaChart')?.getContext('2d');
    if (ventasDiaCtx) {
        new Chart(ventasDiaCtx, {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                datasets: [{
                    label: 'Ventas en $',
                    data: [1200, 1900, 1500, 2000, 2500, 1800],
                    backgroundColor: 'rgba(255, 107, 107, 0.7)'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const empleadosCtx = document.getElementById('empleadosChart')?.getContext('2d');
    if (empleadosCtx) {
        new Chart(empleadosCtx, {
            type: 'polarArea',
            data: {
                labels: ['Ana', 'Luis', 'María', 'Carlos'],
                datasets: [{
                    data: [12000, 8000, 15000, 7000],
                    backgroundColor: [
                        'rgba(255, 107, 107, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ]
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // === VALIDACIÓN FORMULARIOS ===
    const formularioInv = document.getElementById("formulario-inventario");
    const mensajeInv = document.getElementById("mensaje");
    if (formularioInv) {
        formularioInv.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombre")?.value.trim();
            const cantidad = document.getElementById("cantidad")?.value.trim();
            const precio = document.getElementById("precio")?.value.trim();
            if (!nombre || !cantidad || !precio) {
                mensajeInv.textContent = "⚠️ Por favor, rellene todos los campos.";
                mensajeInv.style.color = "#d32f2f";
            } else {
                mensajeInv.textContent = "✅ ¡Producto registrado correctamente!";
                mensajeInv.style.color = "green";
                formularioInv.reset();
            }
        });
    }

    const formularioEmp = document.getElementById("formulario-empleado");
    const mensajeEmp = document.getElementById("mensaje-empleado");
    if (formularioEmp) {
        formularioEmp.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombreemp")?.value.trim();
            const cedula = document.getElementById("cedula")?.value.trim();
            const direccion = document.getElementById("direccion")?.value.trim();
            const telefono = document.getElementById("telefono")?.value.trim();
            if (!nombre || !cedula || !direccion || !telefono) {
                mensajeEmp.textContent = "⚠️ Por favor, rellene todos los campos.";
                mensajeEmp.style.color = "#d32f2f";
            } else {
                mensajeEmp.textContent = "✅ ¡Empleado registrado correctamente!";
                mensajeEmp.style.color = "green";
                formularioEmp.reset();
            }
        });
    }

    const formulariocom = document.getElementById("formulario-compra");
    const mensajecom = document.getElementById("mensaje-compra");
    if (formulariocom) {
        formulariocom.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombreprove = document.getElementById("nombreprove")?.value.trim();
            const Fecha_Orden = document.getElementById("Fechaorden")?.value.trim();
            const Fecha_llegada = document.getElementById("Fechallegada")?.value.trim();
            const Descripción = document.getElementById("Descripción")?.value.trim();
            if (!nombreprove || !Fecha_Orden || !Fecha_llegada || !Descripción) {
                mensajecom.textContent = "⚠️ Por favor, rellene todos los campos.";
                mensajecom.style.color = "#d32f2f";
            } else {
                mensajecom.textContent = "✅ ¡Orden registrada correctamente!";
                mensajecom.style.color = "green";
                formulariocom.reset();
            }
        });
    }

    const formularioped = document.getElementById("formulario-pedido");
    const mensajeped = document.getElementById("mensaje-pedido");
    if (formularioped) {
        formularioped.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nomclient")?.value.trim();
            const direccion = document.getElementById("direccionclient")?.value.trim();
            const fechaPedido = document.getElementById("Fechapedido")?.value.trim();
            const fechaEntrega = document.getElementById("Fecha_llegadap")?.value.trim();
            const descripcion = document.getElementById("Descripciónp")?.value.trim();
            const total = document.getElementById("Totalpe")?.value.trim();
            if (!nombre || !direccion || !fechaPedido || !fechaEntrega || !descripcion || !total) {
                mensajeped.textContent = "⚠️ Por favor, rellene todos los campos.";
                mensajeped.style.color = "#d32f2f";
            } else {
                mensajeped.textContent = "✅ ¡Pedido registrado correctamente!";
                mensajeped.style.color = "green";
                formularioped.reset();
            }
        });
    }
});
