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
