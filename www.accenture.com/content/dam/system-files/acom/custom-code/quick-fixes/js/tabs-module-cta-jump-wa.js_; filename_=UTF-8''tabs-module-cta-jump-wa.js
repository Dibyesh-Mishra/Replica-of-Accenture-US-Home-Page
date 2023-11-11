//tab module anchor link - workaround - fjpc - 01.27.2023 

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('ol.cmp-acn-tab-nav li').click(function (e) {
       e.preventDefault();
       jQuery('html,body').stop().animate({scrollTop: scroll}, 50);
    })
})