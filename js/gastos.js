// Agregar funcionalidad al clic en el ícono de cierre de sesión
document.querySelector('.logout-icon').addEventListener('click', () => {
    // Muestra un mensaje de confirmación antes de cerrar sesión
    const confirmLogout = confirm('¿Estás seguro de que deseas cerrar sesión?');
    if (confirmLogout) {
        // Redirige al usuario a la página de inicio
        location.replace('index.html');
    }
});



// Detectar el enlace activo dinámicamente y mantenerlo activo
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        // Verifica si el enlace coincide con la página actual
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            // Si está en la raíz y la página es "Inicio"
            link.classList.add('active');
        } else if (link.getAttribute('href') === currentPage) {
            // Página coincide con el enlace
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.getElementById('gastoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const proyecto = document.getElementById('proyecto').value;
    const tipo = document.getElementById('tipo').value;
    const monto = document.getElementById('monto').value;

    // Verifica si todos los campos están llenos
    if (!proyecto || !tipo || !monto) {
        showAlert('Por favor, complete todos los campos.', 'error');
    } else {
        showAlert('Gasto registrado con éxito.', 'success');
        // Aquí puedes agregar lógica adicional, como enviar datos a un servidor
        document.getElementById('gastoForm').reset();
        
    }
});

// Función para mostrar la alerta
function showAlert(message, type) {
    const alert = document.getElementById('alert');
    alert.textContent = message;
    alert.className = `alert ${type}`; // Agrega clase de éxito o error
    alert.style.display = 'block';

    // Oculta la alerta después de 3 segundos
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}
