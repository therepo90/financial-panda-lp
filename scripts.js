/*
document.getElementById('insiders').onclick = function () {
    window.location.href = 'https://app.financialpanda.pl/app/insiders';
};
document.getElementById('stock-picker').onclick = function () {
    window.location.href = 'https://app.financialpanda.pl/app/candidates';
};
document.getElementById('long-reader').onclick = function () {
    window.location.href = 'https://app.financialpanda.pl/app/report-short';
};*/


wow = new WOW();
wow.init();
$(document).ready(function (e) {

    /* $('#video-icon').on('click',function(e){
         e.preventDefault();
         $('.video-popup').css('display','flex');
         $('.iframe-src').slideDown();
     });
     $('.video-popup').on('click',function(e){
         var $target = e.target.nodeName;
         var video_src = $(this).find('iframe').attr('src');
         if($target != 'IFRAME'){
             $('.video-popup').fadeOut();
             $('.iframe-src').slideUp();
             $('.video-popup iframe').attr('src'," ");
             $('.video-popup iframe').attr('src',video_src);
         }
     });*/

    $('.slider').bxSlider({
        pager: false
    });
});

/* $(window).on("scroll",function () {

var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo-black.png');
navbar.addClass("nav-scroll");

}else{
$('.navbar-logo img').attr('src','images/logo.png');
navbar.removeClass("nav-scroll");
}

})*/
;
$(window).on("load", function () {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

    /*if(bodyScroll > 50){
        $('.navbar-logo img').attr('src','images/logo-black.png');
        navbar.addClass("nav-scroll");
    }else{
        $('.navbar-logo img').attr('src','images/logo-white.png');
        navbar.removeClass("nav-scroll");
    }*/

    $.scrollIt({

        easing: 'swing',      // funkcja wygładzania animacji
        scrollTime: 900,       // jak długo (w ms) trwa animacja
        activeClass: 'active', // klasa przypisana do aktywnego elementu nawigacji
        onPageChange: null,    // funkcja(pageIndex) wywoływana po zmianie strony
        topOffset: -63
    });
});

