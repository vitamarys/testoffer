$('.par').paroller({ factor: -0.1, factorXs: -0.1, type: 'foreground', direction: 'vertical', transition: 'transform 0.1s ease-in-out' });
$('.par2').paroller({ factor: -0.07, factorXs: 0.2, type: 'foreground', direction: 'vertical', transition: 'transform 0.1s ease-in-out' });
/*-----------------header----------------------*/
const navItem = $('.nav__list__item');
const mobBtn = $('.mob-btn');
const navList = $('.nav__list');
const linkFoot = $('.link-foot');
const navLink = $('.link');
let prevScroll;
let lastShowPos;

navLink.click(function(){
  
    navLink.removeClass('active')
    $(this).addClass('active')
    navList.toggleClass('active')
});
linkFoot.click(function(){
  
    linkFoot.removeClass('active')
    $(this).addClass('active')
   
});


mobBtn.click(function(){
  navList.toggleClass('active')
  
//   navLink.click(function(){
//     navList.removeClass('active')
// })
    
})



$(window).on("scroll", function() {
  const scrolled = $(window).scrollTop()

  if (scrolled > 100 && scrolled > prevScroll) {
    $(".header").fadeOut(300)
    lastShowPos = scrolled
  } else if (scrolled <= Math.max(lastShowPos - 100, 0)) {
    $(".header").fadeIn(300)
  }
  prevScroll = scrolled
})

$(function(){
    $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });
let isCounter = true;
 $(window).scroll(()=>{
     if(isCounter){
        if($('.counter')[0].getBoundingClientRect().top < 1000){
            $({ countNum: $('.counter').html() }).animate({ countNum: 500000 }, {
                duration: 4000,
                easing: 'linear',
                step: function () {
                $('.counter').html(Math.floor(this.countNum));
            },
            complete: function () {
                $('.counter').html(this.countNum);
                
            }
            });
            isCounter=false;
         }
         
     }

 })


 
