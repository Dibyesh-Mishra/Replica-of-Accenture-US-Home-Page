$(function(){
    var k = 1;
    $("#block-capabilities .capability-card .progressive-card").each(function(){
      $(this).attr("data-cardnumber", k++)
    })
  });