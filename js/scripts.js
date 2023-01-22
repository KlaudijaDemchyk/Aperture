$(document).ready(function(){

    $('#open').click(function(){
        $('.model-container').css('transform','scale(1)');
    });
    $('#close').click(function(){
        $('.model-container').css('transform','scale(0)');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});

    //Navigation
    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();



