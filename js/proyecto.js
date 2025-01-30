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

// Función para abrir el modal
function openModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('userModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Mostrar alerta
document.getElementById('projectForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const cliente = document.getElementById('cliente').value.trim(); // Valor de Cliente
    const nombre = document.getElementById('nombre').value.trim(); // Valor de Nombre
    const localidad = document.getElementById('localidad').value.trim(); // Valor de Localidad
    const costo = document.getElementById('costo').value.trim(); // Valor de Costo

    // Verifica si todos los campos están llenos
    if (cliente === '' || nombre === '' || localidad === '' || costo === '') {
        showAlert('Por favor, complete todos los campos.', 'error');
    } else {
        showAlert('Proyecto agregado con éxito.', 'success');
        // Aquí puedes agregar lógica adicional, como enviar datos a un servidor

        // Limpia los campos después de agregar el proyecto
        document.getElementById('projectForm').reset();
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
