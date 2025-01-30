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


// Abrir el modal
function openModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'flex';
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};


