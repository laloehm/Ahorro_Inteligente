let icon = document.querySelector('#icon-menu');
let menu = document.querySelector('#menus');
let span = $('.icon span');

icon.addEventListener('click', function () {
    $(menu).toggleClass('menu-active');
    $(span).toggleClass('span-active');
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin:20,
        responsive:{
            0:{
               items:1
            },
            600:{
                items:2
            },
            991:{
                items: 3
            }
        }
    })   
  });

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 200 + "px",
            },
            1000
        );
        $(menu).toggleClass('menu-active');
        $(span).toggleClass('span-active');
});

/* Smooth scrolling para anclas */
$("a.smooths").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 200 + "px",
            },
            1000
        );
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $("#menu");
    let logo = $('.logo');
    let info = $('.info a')    
    if ($("#menu").offset().top > 300) {
        $(header).css("background", "#fff");
        $(info).css("color", "#635196");
        $(logo).attr('src', 'images/Logo_Footer.png');
        $(span).css('background','rgb(99, 81, 150)');
            if ($(window).width() < 960) {            
            $(logo).css('width','70px');            
            } else {            
                 $(logo).css('width','80px');
            }        
    }else{
        $(header).css("background", "transparent");
        $(logo).attr('src', 'images/Logo.png');
        $(info).css("color", "#fff");
        $(span).css('background','#fff')
        if ($(window).width() < 960) {            
            $(logo).css('width','100px');            
            } else {            
                 $(logo).css('width','100px');
            }  
    }    
});
