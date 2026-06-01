/* ==================== SWIPER - CARRUSEL DE PROYECTOS ==================== */
/* Swiper es la librería que gestiona el carrusel de la sección de proyectos */

var swiper = new Swiper(".slide-content", {
    /* Número de tarjetas visibles a la vez (por defecto, en pantallas grandes) */
    slidesPerView: 3,

    /* Espacio en píxeles entre tarjetas */
    spaceBetween: 25,

    /* loop: cuando llegas al final, vuelves al principio automáticamente */
    loop: true,

    /* grabCursor: muestra el cursor de "agarrar" al pasar por encima */
    grabCursor: true,

    /* Puntos de paginación (los circulitos de abajo) */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,      /* se puede hacer clic en ellos para navegar */
        dynamicBullets: true, /* el punto activo es más grande que los demás */
    },

    /* Botones de flecha para navegar (siguiente / anterior) */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    /* Breakpoints: cuántas tarjetas mostrar según el ancho de pantalla */
    breakpoints: {
        0: {
            slidesPerView: 1, /* móvil: 1 tarjeta */
        },
        520: {
            slidesPerView: 2, /* tablet: 2 tarjetas */
        },
        950: {
            slidesPerView: 3, /* escritorio: 3 tarjetas */
        },
    },
});
