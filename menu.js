document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuLista = document.querySelector('.menu');

    menuHamburguer.addEventListener('click', function () {
        menuLista.classList.toggle('menu-visivel');
        menuHamburguer.classList.toggle('menu-visivel');
    });
});