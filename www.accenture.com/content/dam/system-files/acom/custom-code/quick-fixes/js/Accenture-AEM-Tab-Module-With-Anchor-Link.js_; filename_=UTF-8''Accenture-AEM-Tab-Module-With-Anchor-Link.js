//Tab Module issue with anchor link - JPPL 1/31/2023
function update_anch(){
    $(".cmp-acn-tab-nav-trigger").on("click", function(e) {
        $("html, body").animate({
            scrollTop: window.scrollY
        });
        console.log(window.scrollY)
    })
}
$(function(){
    update_anch();
})