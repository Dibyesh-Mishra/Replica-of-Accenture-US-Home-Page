// Anchor Link Adjustment - Quick Fix - JPPL - 09/26/2022 - https://dev.azure.com/Daily-QA-List/IMBA/_boards/board/t/UI/Stories/?workitem=189774

$("body").append('<style>html {scroll-behavior: smooth;}</style>');
var w = window.location.href
$(window).on("load", function() {
    if (w.indexOf("#") > -1) {
        var u = $("#" + w.split("#")[1]);
        $("html, body").animate({
            scrollTop: u.offset().top - $(".cmp-global-header__navbar-container").outerHeight() - 10
        }, 500);
    }
})
