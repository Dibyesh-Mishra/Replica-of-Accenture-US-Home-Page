var windowwidth;
if ((windowwidth = $(window).width()) <= 1040) {
    var n = $(".cards li").length;
    rotate = 0, number = 40 * -n, slide = 0
}
if ((windowwidth = $(window).width()) >= 1025) {
    n = $(".cards li").length;
    rotate = 0, number = 58 * -n, slide = 0
}
var stateManager = function() {
    var t = null,
        a = function() {
            $("body").width() < 768 ? ("mobile" !== t && e(), i()) : ("desktop" !== t && n(), r())
        },
        e = function() {
            t = "mobile"
        },
        n = function() {
            t = "desktop"
        },
        i = function() {},
        r = function() {};
    return {
        init: function() {
            a(), $(window).on("resize", a)
        }
    }
}();

function move(t) {
    slide += t, $(".cards").css("transform", "translateZ(" + -number + "px) rotateY(" + 360 * slide / n + "deg)")
}
stateManager.init(), $(".cards").css("transform", "translateZ(" + -number + "px)"), $(".cards li").each(function(t) {
    $(this).css("transform", "rotateY(" + 360 * -t / n + "deg) translateZ(" + number + "px)"), $(this).find(".corner").html(t + 1)
}), $(".slide-left").on("click", function() {
    move(-1), deductCarouselProgress()
}), $(".slide-right").on("click", function() {
    move(1), addCarouselProgress()
});
var pbVal = 1,
    prevpbVal = 0,
    nextpbVal = 0;

function addCarouselProgress() {
    $(".cards-cta-btn").removeClass("onactive"), (pbVal += 1) > 6 && (pbVal = 1), pbVal < 1 && (pbVal = 6), (prevpbVal = pbVal - 1) >= 6 && (prevpbVal = 1), prevpbVal <= 0 && (prevpbVal = 6), (nextpbVal = pbVal + 1) > 6 && (nextpbVal = 1), nextpbVal <= 0 && (nextpbVal = 6), $(".cards-cta-btn-" + prevpbVal).addClass("onactive"), $(".cards-cta-btn-" + pbVal).addClass("onactive"), $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
    var t = $(".img-container-" + pbVal).attr("data-case"),
        a = $(".img-container-" + pbVal).attr("data-sub-title"),
        e = $(".img-container-" + pbVal).attr("data-sub-title-link"),
        e2 = $(".img-container-" + pbVal).find('a:first').attr('href'),
        n = $(".img-container-" + pbVal).attr("data-description");
    $(".section-container-8 .text-content .categoryTitle").html(t), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("aria-label", a), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", a), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("href", e2 ? e2 : e), $(".section-container-8 .text-content .SubsectionTitle").html(a), $(".section-container-8 .text-content .Subsectiondescription").html(n), $(".progress-bar").css("width", 16.6 * pbVal + "%"), $(".progress-bar-label").html(pbVal + "/6")
}

function deductCarouselProgress() {
    $(".cards-cta-btn").removeClass("onactive"), (pbVal -= 1) > 6 && (pbVal = 1), pbVal < 1 && (pbVal = 6), (prevpbVal = pbVal - 1) >= 6 && (prevpbVal = 1), prevpbVal <= 0 && (prevpbVal = 6), (nextpbVal = pbVal + 1) >= 6 && (nextpbVal = 1), nextpbVal <= 0 && (nextpbVal = 6), $(".cards-cta-btn-" + prevpbVal).addClass("onactive"), $(".cards-cta-btn-" + pbVal).addClass("onactive"), $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
    var t = $(".img-container-" + pbVal).attr("data-case"),
        a = $(".img-container-" + pbVal).attr("data-sub-title"),
        e = $(".img-container-" + pbVal).attr("data-sub-title-link"),
        e2 = $(".img-container-" + pbVal).find('a:first').attr('href'),
        n = $(".img-container-" + pbVal).attr("data-description");
    $(".section-container-8 .text-content .categoryTitle").html(t), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("aria-label", a), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", a), $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("href", e2 ? e2 : e), $(".section-container-8 .text-content .SubsectionTitle").html(a), $(".section-container-8 .text-content .Subsectiondescription").html(n), $(".progress-bar").css("width", 16.6 * pbVal + "%"), $(".progress-bar-label").html(pbVal + "/6")
}
