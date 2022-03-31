$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
        // autoplay: true,
        // autoplaySpeed: 2000
        
       
    });

});