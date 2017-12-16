$(document).ready(function(){


    function slider(){
        var counter = 0;
        var slides = 3;

        $('.inner-slider').on('click', function(){
            counter++;
            if(counter == slides) {
                $(this).animate({left: '0'}, 1000, function(){
                    counter = 0;
                }); 
            }
            else {
                $(this).animate({left: '-=100%'}, 1000);
            }
        });

        setInterval(function(){
            counter++;
            if(counter == slides) {
                $('.inner-slider').animate({left: '0'}, 1000, function(){
                    counter = 0;
                });
            }
            else {
                $('.inner-slider').animate({left: '-=100%'}, 1000);
            }
        },6000);
    };
    slider();




    function nextSlide() {
        $('.inner-showcase-carousel').animate({
        'left': '-100%'
        },3000, function() {
        $('.inner-showcase-carousel>.case').appendTo('.inner-showcase-carousel');
        $('.inner-showcase-carousel').css('left', 0);
        });
    };

    $('.fa-angle-right').on('click',nextSlide);
        
});