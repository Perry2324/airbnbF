document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-detalles-plan');
    const botonesDetalles = document.querySelectorAll('.detalles-plan');
    const botonCerrar = document.querySelector('.cerrar');
    const descripcionPlan = document.getElementById('descripcion-plan');
    
    // Código del modal
    if (botonesDetalles.length > 0 && modal && descripcionPlan) {
        botonesDetalles.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const tipoPlan = e.target.closest('.plan').dataset.plan;
                mostrarDetallesPlan(tipoPlan);
                modal.style.display = 'block';
            });
        });
        
        if (botonCerrar) {
            botonCerrar.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    function mostrarDetallesPlan(tipoPlan) {
        let descripcion;
        switch (tipoPlan) {
            case 'Aventura':
                descripcion = 'El Plan Aventura incluye vuelos de ida y vuelta, hospedaje en hoteles 4 estrellas y tours guiados por la selva.';
                break;
            case 'Familiar':
                descripcion = 'El Plan Familiar ofrece paquetes de entretenimiento para todas las edades, con actividades grupales y excursiones.';
                break;
            case 'Relax':
                descripcion = 'Relájate con nuestro Plan Relax, que incluye estancias en resorts todo incluido y acceso a spas de lujo.';
                break;
            default:
                descripcion = 'Detalles no disponibles.';
        }
        descripcionPlan.textContent = descripcion;
    }

    // Código para el menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});
