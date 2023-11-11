// BP Carousel Fix - initial display of CTA - JPPL - 01-16-2023
$(window).on("load",function(){
    var first_m = $("#bptm1 .button.cmp-button--text-brand-link.cmp-button--animation").first();
    setTimeout(first_m.addClass("cmp-button--animation-active"), 2000);
    setTimeout(first_m.addClass("cmp-button--animation-active-text"), 3000);
})
    