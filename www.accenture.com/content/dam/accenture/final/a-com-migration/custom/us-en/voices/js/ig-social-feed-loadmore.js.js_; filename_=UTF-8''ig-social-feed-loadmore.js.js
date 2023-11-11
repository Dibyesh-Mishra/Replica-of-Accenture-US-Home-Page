window.onload = function () {           $(".social-feed-ig").each(function () {
    var $this = $(this);
    var currentPost = $(this).find(".ig-current-post-count").text();
    var loadmore = $(".load-more-ig-post");
    if (currentPost > 6) {
$(this).find(loadmore).removeAttr("style"); 
}

}); }