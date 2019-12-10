$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.header-grid').toggleClass('open-grid')
    });
});


function myFunction(x) {
    x.classList.toggle("change");
}