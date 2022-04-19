let icon = document.querySelector('#icon-menu');
let menu = document.querySelector('#menus');
let span = $('.icon span');

icon.addEventListener('click', function () {
    $(menu).toggleClass('menu-active');
    $(span).toggleClass('span-active');
})



// Funcion para barra de Menu
$(window).scroll(function () {
    let headerDos = $("#menuDos");
    let logoDos = $('.logo_dos');
    let infoDos = $('.info_dos a')    
    if ($("#menuDos").offset().top > 300) {
        $(headerDos).css("background", "#fff");
        $(infoDos).css("color", "#635196");
        $(logoDos).attr('src', 'images/Logo_Footer.png');
        $(span).css('background','rgb(99, 81, 150)');
            if ($(window).width() < 960) {            
            $(logoDos).css('width','70px');            
            } else {            
                 $(logoDos).css('width','80px');
            }        
    }else{
        $(headerDos).css("background", "#635196");
        $(logoDos).attr('src', 'images/Logo.png');
        $(infoDos).css("color", "#fff");
        $(span).css('background','#fff')
        if ($(window).width() < 960) {            
            $(logoDos).css('width','100px');            
            } else {            
                 $(logoDos).css('width','100px');
            }  
    }    
});
