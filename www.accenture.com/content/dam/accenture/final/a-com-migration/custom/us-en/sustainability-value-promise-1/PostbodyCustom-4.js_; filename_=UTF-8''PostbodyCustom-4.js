var ww = $(window).width();
var platformStatus;
var browser = 'others';

var controller6 = new ScrollMagic.Controller();
var wipeAnimation6 = new TimelineMax()
    .fromTo(".section-container-6 .panel-1 .img-1", 2, {width: "60%"}, { width:"3000%", ease: Linear.easeIn})
    .fromTo(".section-container-6 .panel-2 .img-3", 0.1, {width: "45%"}, { width:"120%", ease: Linear.easeIn},"0.01")
    .call(addClassActive,[".section-container-6 .panel-1 .title-1"], this, 0.09)
    .call(addClassActive,[".section-container-6 .panel-1 .title-2"], this, 0.09)
    .call(addClassActive,[".section-container-6 .panel-1 .cta-scroll"], this, 0.09)
    .call(removeClassActive,[".section-container-6 .panel-1 .title-1"], this, 0.1)
    .call(removeClassActive,[".section-container-6 .panel-1 .title-2"], this, 0.1)
    .call(removeClassActive,[".section-container-6 .panel-1 .cta-scroll"], this, 0.1)
    .fromTo(".section-container-6 .panel-1", 0.001, {opacity: "1"}, { opacity:"0", ease: Linear.easeNone}, "1")
    .call(removeClassActive,[".section-container-6 .panel-2 .title-1"], this, 1.01)
    .call(removeClassActive,[".section-container-6 .panel-2"], this, 1.01)
    .call(addClassActive,[".section-container-6 .panel-2"], this, 1.02)
    .call(addClassActive,[".section-container-6 .panel-2 .title-1"], this, 1.02)
    .call(removeClassActive,[".section-container-6 .panel-2 .cta-more"], this, 1.01)
    .call(addClassActive,[".section-container-6 .panel-2 .cta-more"], this, 1.02);

var sc6 = new ScrollMagic.Scene({
        triggerElement: ".section-container-6",
        triggerHook: "onLeave",
        duration: "250%",
    })
    .setPin(".section-container-6")
    .setTween(wipeAnimation6)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller6)
    .on("enter leave", function (e) {
        if( e.type == "enter"){
            //pauseVideo(".impact-vid");
        }
    });

$(function () {
  // Section 1
  // init
  var controller1a = new ScrollMagic.Controller();
  var controller2a = new ScrollMagic.Controller();
  var controller2a1 = new ScrollMagic.Controller();
  var controller2b = new ScrollMagic.Controller();
  var controller3 = new ScrollMagic.Controller();
  var controller3b = new ScrollMagic.Controller();
  var controller4a = new ScrollMagic.Controller();
  var controller4b = new ScrollMagic.Controller();
  var controller5a = new ScrollMagic.Controller();

  
  if (browser == 'others') {
    if (ww > 1024) {
      // marqueeCarousel();

// Careers Animation
sc6.enabled(true);

      new ScrollMagic.Scene({
        triggerElement: ".section-container-1c",
        triggerHook: 0.8,
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller2a1)
      .on("enter leave", function (e) {
        if( e.type == "enter"){
          //removeClassActive(".progress-nav-bar");
          addClassActive(".we-act-for-impact");
          addClassActive(".we-act-for-impact .cta-more");
          $(".bell-container").addClass("fixed");
          removeClassActive(".bell-container");
          $(".icon-bar-marquee .social-icon").addClass("isActive");
        }else{
          removeClassActive(".we-act-for-impact");
          removeClassActive(".we-act-for-impact .cta-more");
          $(".bell-container").removeClass("fixed");
          $(".icon-bar-marquee .social-icon").removeClass("isActive");
          //addClassActive(".progress-nav-bar");
        }
      });

      new ScrollMagic.Scene({
        triggerElement: '.section-container-1a',
        triggerHook: 0.6,
      })
        .addTo(controller1a)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            //removeClassActive(".progress-nav-bar");
            addClassActive('.section-container-1a .text-center');
            $('.section-container-1b .cta-more').addClass('isactive');
          } else {
            removeClassActive('.section-container-1a .text-center');
            $('.section-container-1b .cta-more').removeClass('isactive');
            //addClassActive(".progress-nav-bar");
          }
        });
      new ScrollMagic.Scene({
        triggerElement: '.section-container-promises-2a',
        triggerHook: 0.6,
      })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller2a)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            //removeClassActive(".progress-nav-bar");
            addClassActive('.section-container-promises-2a .text-center');
          } else {
            removeClassActive('.section-container-promises-2a .text-center');
            //addClassActive(".progress-nav-bar");
          }
        });
      new ScrollMagic.Scene({
        triggerElement: '.section-container-promises-2b',
        triggerHook: 0.7,
      })
        .addTo(controller2b)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            $('.section-container-promises-2b .cta-more').addClass('isactive');
            $('.section-container-promises-2b .img-container').addClass(
              'trigger'
            );
            addClassActive('.section-container-promises-2b .text-content');
          } else {
            $('.section-container-promises-2b .cta-more').removeClass(
              'isactive'
            );
            $('.section-container-promises-2b .img-container').removeClass(
              'trigger'
            );
            removeClassActive('.section-container-promises-2b .text-content');
          }
        });
      new ScrollMagic.Scene({
        triggerElement: '.section-container-3-julie',
        triggerHook: 0.4,
      })
        .addTo(controller3)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            addClassActive('.section-container-3-julie .panel-3');
            addClassActive('.section-container-3-julie .panel-3 .title-1');
            addClassActive('.section-container-3-julie .panel-3 .cta-more');
          } else {
            removeClassActive('.section-container-3-julie .panel-3');
            removeClassActive('.section-container-3-julie .panel-3 .title-1');
            removeClassActive('.section-container-3-julie .panel-3 .cta-more');
          }
        });
      var wipeAnimation9 = new TimelineMax()
        .fromTo(
          '.section-container-3-julie .panel-2 .img-1',
          0.01,
          {
            opacity: '0',
          },
          {
            opacity: '1',
            ease: Power1.easeIn,
          },
          '0.001'
        )
        .call(addClassActive, ['.section-container-3-julie .panel-1'], '0.3')
        .call(
          removeClassActive,
          ['.section-container-3-julie .panel-1'],
          '0.31'
        )
        .call(removeClassActive, ['.section-container-3-julie .panel-2'], '0.3')
        .call(addClassActive, ['.section-container-3-julie .panel-2'], '0.31')
        .fromTo(
          '.section-container-3-julie .panel-2 .img-1',
          1.2,
          {
            width: '2000%',
          },
          {
            width: '90%',
            ease: Linear.easeIn,
          }
        )
        .fromTo(
          '.section-container-3-julie .panel-1 .vid-1',
          1.2,
          {
            width: '140%',
          },
          {
            width: '80%',
            ease: Linear.easeIn,
          },
          '0.001'
        )
        .call(
          removeClassActive,
          ['.section-container-3-julie .panel-2 .title-1'],
          this,
          '1.4'
        )
        .call(
          addClassActive,
          ['.section-container-3-julie .panel-2 .title-1'],
          this,
          '1.41'
        )
        .call(
          addClassActive,
          ['.section-container-3-julie .panel-3 .title-1'],
          this,
          '1'
        )
        .call(
          addClassActive,
          ['.section-container-3-julie .panel-3 .cta-more'],
          this,
          '1'
        )
        .call(
          removeClassActive,
          ['.section-container-3-julie .panel-3 .title-1'],
          this,
          '1.01'
        )
        .call(
          removeClassActive,
          ['.section-container-3-julie .panel-3 .cta-more'],
          this,
          '1.01'
        );
      new ScrollMagic.Scene({
        triggerElement: '.section-container-3-julie',
        triggerHook: 'onLeave',
        duration: '150%',
      })
        .setPin('.section-container-3-julie')
        .setTween(wipeAnimation9)
        .addTo(controller3b);
      addClassActive('.progress-nav-bar');
      addClassActive('.bell-container');
      platformStatus = 'desktop';

      new ScrollMagic.Scene({
        triggerElement: '.section-container-case-studies-4a',
        triggerHook: 0.6,
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller4a)
      .on('enter leave', function (e) {
        if (e.type == 'enter') {
          //removeClassActive(".progress-nav-bar");
          addClassActive('.section-container-case-studies-4a .text-center');
        } else {
          removeClassActive('.section-container-case-studies-4a .text-center');
          //addClassActive(".progress-nav-bar");
        }
      });

      new ScrollMagic.Scene({
        triggerElement: '.section-container-case-studies-4b',
        triggerHook: 0.6,
      })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller4b)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            $('.section-container-case-studies-4a .cta-more').addClass('isactive');
            $('.section-container-case-studies-4b .img-container').addClass(
              'trigger'
            );
            addClassActive('.section-container-case-studies-4b .text-content');
          } else {
            $('.section-container-case-studies-4a .cta-more').removeClass(
              'isactive'
            );
            $('.section-container-case-studies-4b .img-container').removeClass(
              'trigger'
            );
            removeClassActive('.section-container-case-studies-4b .text-content');
          }
        });

      new ScrollMagic.Scene({
        triggerElement: '#block-section-5-awards',
        triggerHook: 0.6,
      })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller5a)
        .on('enter leave', function (e) {
          if (e.type == 'enter') {
            //removeClassActive(".progress-nav-bar");
            addClassActive('.section-container-awards a.awards-card');
            addClassActive('#block-section-5-awards .section-title');
            addClassActive('.section-container-awards .cta-more');
          } else {
            removeClassActive('.section-container-awards a.awards-card');
            removeClassActive('#block-section-5-awards .section-title');
            removeClassActive('.section-container-awards .cta-more');
            //addClassActive(".progress-nav-bar");
          }
        });
    } else {
      //ipad and mobile
      addClassActive(".we-act-for-impact");
      addClassActive(".we-act-for-impact .cta-more");
      addClassActive('.section-container-awards a.awards-card');
      addClassActive('#block-section-5-awards .section-title');
      addClassActive('.section-container-awards .cta-more');

      $('.section-container-case-studies-4a .cta-more').addClass('isactive');
      $('.section-container-case-studies-4b .img-container').addClass(
        'trigger'
      );
      addClassActive('.section-container-case-studies-4b .text-content');
      addClassActive('.section-container-case-studies-4a .text-center');
      $('.section-container-case-studies-4a .cta-more').addClass('isactive');
      $('.section-container-case-studies-4b .img-container').addClass(
        'trigger'
      );
      addClassActive('.section-container-case-studies-4b .text-content');

      addClassActive(".section-container-3-julie .title-1");
      addClassActive(".section-container-3-julie .title-2");
      addClassActive(".section-container-3-julie .panel-3 .title-1");
      addClassActive(".section-container-3-julie .panel-3 .cta-more");

      addClassActive('.section-container-promises-2a .text-center');
      $('.section-container-promises-2b .cta-more').addClass('isactive');
      $('.section-container-promises-2b .img-container').addClass(
        'trigger'
      );
      addClassActive('.section-container-promises-2b .text-content');

      addClassActive('.section-container-1a .text-center');
      $('.section-container-1b .cta-more').addClass('isactive');

      $(".section-container-6 .animate_title").addClass("isactive");
    $(".section-container-6 .cta-scroll").addClass("isactive")
    $(".section-container-6 .cta-more").addClass("isactive");
        
      // Careers Animation
        sc6.enabled(false);
    }
  }

  $('.img-boxes').on('click', function () {
    var kani = $(this);
    $(this).addClass('isactive');
    $('.sc6-cta-btn-1').css('opacity', '0');
    setTimeout(function () {
      kani.removeClass('isactive');
      $('.sc6-cta-btn-1').css('opacity', '1');
    }, 500);
  });
  $('.img-container').on('click', function () {
    var kani = $(this);
    $(this).addClass('isactive');
    $('.follow-cta-btn').removeClass('isactive');
    setTimeout(function () {
      kani.removeClass('isactive');
      $('.follow-cta-btn').addClass('isactive');
    }, 500);
  });
  $('.item .scroll-down').on('click', function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.section-container-1b').offset().top - 100,
      },
      500
    );
  });
  $('.item .arrow-i-down').on('click', function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.section-container-4a').offset().top - 100,
      },
      500
    );
  });

  /** Initiate Text Animation**/
  toggleClassActive('.section-container-1a .panel-1 .title-1');
  /** Mouse Cursor Movement**/
  $(window).on('mousemove', function (e) {
    if ($('.section-container-promises-2b .panel-1:hover').length != 0) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      if (
        $('.section-container-promises-2b .panel-1 .img-container:hover')
          .length != 0
      ) {
        $('.follow-cta-btn').addClass('isactive');
      } else {
        $('.follow-cta-btn').removeClass('isactive');
      }
      var ySc3 = $('.section-container-promises-2b .panel-1').offset().top;
      var xSc3 = $('.section-container-promises-2b .panel-1').offset().left;
      //console.log(xPos, yPos);
      $('.follow-cta-btn').css({
        top: yPos - ySc3,
        left: xPos - xSc3,
      });
    }
    if ($('.section-container-case-studies-4b .panel-1:hover').length != 0) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      if (
        $('.section-container-case-studies-4b .panel-1 .img-container:hover')
          .length != 0
      ) {
        $('.follow-cta-btn').addClass('isactive');
      } else {
        $('.follow-cta-btn').removeClass('isactive');
      }
      var ySc3 = $('.section-container-case-studies-4b .panel-1').offset().top;
      var xSc3 = $('.section-container-case-studies-4b .panel-1').offset().left;
      //console.log(xPos, yPos);
      $('.follow-cta-btn').css({
        top: yPos - ySc3,
        left: xPos - xSc3,
      });
    }
    if ($('.sc-6:hover').length != 0) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var ySc3 = $('.sc-6').offset().top;
      var xSc3 = $('.sc-6').offset().left;
      // console.log(xPos, yPos);
      $('.sc6-cta-btn-1').css({
        top: yPos - ySc3,
        left: xPos - xSc3,
      });
    }
    if ($('.cards:hover').length != 0) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var ySc3 = 0;
      var xSc3 = 0;
      if ($('.img-container-1:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(1)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(1)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-1').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-2:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(2)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(2)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-2').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-4b:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(3)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(3)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-3').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-4:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(4)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(4)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-4').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-5:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(5)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(5)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-5').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-6:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(6)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(6)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-6').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-7:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(7)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(7)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-7').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-8:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(8)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(8)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-8').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-9:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(9)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(9)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-9').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-10:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(10)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(10)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-10').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-11:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(11)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(11)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-11').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
      if ($('.img-container-12:hover').length != 0) {
        ySc3 = $('.cards .img-container:nth-child(12)').offset().top;
        xSc3 = $('.cards .img-container:nth-child(12)').offset().left;
        // console.log(xPos, yPos);
        $('.cards .cards-cta-btn-12').css({
          top: yPos - ySc3 - 10,
          left: xPos - xSc3 - 10,
        });
      }
    }
  });

  var lastScrollTop = 0;
  $(window).on('scroll', function () {
    var offset = 127; // main nav + top nav heights (px)
    var s = $(window).scrollTop() + offset,
      d = $(document).height(),
      c = $(window).height();
    scrollPercent = (s / (d - c)) * 100;
    var position = scrollPercent;
    if (ww <= 1199) {
      $('.progress-nav-bar-roller').css('width', position + '%');
    }
    var bs0 = $('#block-section-marquee').height();
    var bs1 = $('#block-section-1-sustainability').height();
    var bs2 = $('#block-section-2-promises').height();
    var bs3 = $('#block-section-3-julie').height();
    var bs4 = $('#block-section-4-case-studies').height();
    var bs5 = $('#block-section-5-awards').height();

    var bs6 = $('#block-section-6-join-us').height();

    if ($('#block-section-marquee').offset().top < s) {
      var p0 = (s / bs0) * 100;
      if (p0 > 100) {
        p0 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-0 .bar').css('width', p0 + '%');
      $('.nav-bar-menu.nav-bar-menu-1 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-2 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-3 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-4 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }
    if ($('#block-section-1-sustainability').offset().top < s) {
      var p1 = ((s - bs0) / bs1) * 100;
      if (p1 > 100) {
        p1 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-1 .bar').css('width', p1 + '%');
      $('.nav-bar-menu.nav-bar-menu-2 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-3 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-4 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }
    if ($('#block-section-2-promises').offset().top < s) {
      var p2 = ((s - bs0 - bs1) / bs2) * 100;
      if (p2 > 100) {
        p2 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-2 .bar').css('width', p2 + '%');
      $('.nav-bar-menu.nav-bar-menu-3 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-4 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }
    if ($('#block-section-3-julie').offset().top < s) {
      var p3 = ((s - bs0 - bs1 - bs2) / bs3) * 100;
      if (p3 > 100) {
        p3 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-3 .bar').css('width', p3 + '%');
      $('.nav-bar-menu.nav-bar-menu-4 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }
    if ($('#block-section-4-case-studies').offset().top < s) {
      var p4 = ((s - bs0 - bs1 - bs2 - bs3) / bs4) * 100;
      if (p4 > 100) {
        p4 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-4 .bar').css('width', p4 + '%');
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', '0%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }
    if ($('#block-section-5-awards').offset().top < s) {
      var p5 = ((s - bs0 - bs1 - bs2 - bs3 - bs4) / bs5) * 100;
      if (p5 > 100) {
        p5 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-5 .bar').css('width', p5 + '%');
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', '0%');
    }

    if ($('#block-section-6-join-us').offset().top < s) {
      var p6 = ((s - bs0 - bs1 - bs2 - bs3 - bs4 - bs5) / bs6) * 100;
      if (p6 > 100) {
        p6 = 0;
      }
      $('.nav-bar-menu.nav-bar-menu-6 .bar').css('width', p6 + '%');
    }
 
    //  $(".nav-bar-menu.nav-bar-menu-4 .bar").css('width', p5 + "%");
    //  $(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', "0%");
    // }
    // if ($('#block-section-5').offset().top < s) {
    //  var p6 = ((s - bs1 - bs2 - bs3 - bs4 - bs5) / bs6) * 100;
    //  $(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', (p6 + 20) + "%");
    // }
    if (position >= 1) {
      $('.nav-bar-menu-0').addClass('rotatesvg');
      //$(".icon-bar-marquee .social-icon").addClass("isActive");
    } else {
      $('.nav-bar-menu-0').removeClass('rotatesvg');
      //$(".icon-bar-marquee .social-icon").removeClass("isActive");
    }
    if (position >= 5) {
      $('.icon-bar-marquee .social-icon').addClass('isActive');
    } else {
      $('.icon-bar-marquee .social-icon').removeClass('isActive');
    }
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
    } else {
      // upscroll code
    }
    lastScrollTop = st;
    if (ww > 768) {
      $('.bell-container').removeClass('isactive');
    }
  });

  $('.cta-scroll-1').on('click', function () {
    var anchor = $('.section-container-4a').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 50,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-0').on('click', function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-1').on('click', function () {
    var anchor = $('#block-section-1-sustainability').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 150,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-2').on('click', function () {
    var anchor = $('#block-section-2-promises').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 70,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-3').on('click', function () {
    var anchor = $('#block-section-3-julie').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 70,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-4').on('click', function () {
    var anchor = $('#block-section-4-case-studies').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 100,
      },
      1500
    );
    return false;
  });
  $('.nav-bar-menu-5').on('click', function () {
    var anchor = $('#block-section-5-awards').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 100,
      },
      1500
    );
    return false;
  });

   $('.nav-bar-menu-6').on('click', function () {
    var anchor = $('#block-section-6-join-us').offset();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: anchor.top - 100,
      },
      1500
    );
    return false;
  });

});

  $(window).on('resize', function () {
    ww = $(window).width();
    if (ww <= 1024 && platformStatus == 'desktop') {
      location.reload();
    }
    if (ww > 1024 && platformStatus == 'mobile') {
      location.reload();
    }
  });

  function toggleClassActive(_target) {
    if ($(_target).hasClass('isactive')) {
      $(_target).removeClass('isactive');
    } else {
      $(_target).addClass('isactive');
    }
  }

  function addClassActive(_target) {
    $(_target).addClass('isactive');
  }

  function removeClassActive(_target) {
    $(_target).removeClass('isactive');
  }

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      // If Internet Explorer, return version number
      //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      browser = 'ie';
      $('#redesign-main').addClass('IE');
      $('.text-center').addClass('isactive');
      $('.text-content').addClass('isactive');
      $('.animate_title ').addClass('isactive');
      $('.cta-more').addClass('isactive');
      $('.cta-scroll').addClass('isactive');
      $('.audio-option').addClass('isactive');
      $('.img-container').addClass('trigger');
      addClassActive('.progress-nav-bar');
      //alter carousel
      // IEcarousel();
    } // If another browser, return 0
    else {
      //alert('otherbrowser');
      browser = 'others';
    }
    return false;
  }


$(window).on('load', function () {
  var stitle = $('.linkedin.social-icon-trigger').attr('data-title');
  var summary = $('.linkedin.social-icon-trigger').attr('data-summary');
  $('.icon-bar-section .social-icon').addClass('isActive');
  var dataURL = window.location.href;

  //set email data
  $('.share-icons-container-marquee .icon-bar-marquee a.mail').attr(
    'href',
    'mailto:?subject=' +
      encodeURI(stitle) +
      '&body=' +
      encodeURI(summary) +
      ' ' +
      dataURL
  );
  $('.mobile-social-media .mail').attr(
    'href',
    'mailto:?subject=' +
      encodeURI(stitle) +
      '&body=' +
      encodeURI(summary) +
      ' ' +
      dataURL
  );
  $('.btn-envelope a.mail.social-icon-trigger').attr(
    'href',
    'mailto:?subject=' +
      encodeURI(stitle) +
      '&body=' +
      encodeURI(summary) +
      ' ' +
      dataURL
  );

  //set socialmedia data
  $('.social-icon-trigger.twitter').attr('data-url', dataURL);
  $('.social-icon-trigger.linkedin').attr('data-url', dataURL);
  $('.social-icon-trigger.facebook').attr('data-url', dataURL);
  $('.social-icon-trigger').on('click', function (e) {
    var hashtag = $(this).attr('data-hashtags');
    var socialLink = $(this).attr('data-link');
    var socialUrl = $(this).attr('data-url');
    var socialTitle = $(this).attr('data-title');
    var socialSummary = $(this).attr('data-summary');

    //Social Sharing for Event9, Event13
    try {
      omni.LinkAnalysis.isSocialShareLink(this, e, e.target.dataset.network) &&
        _satellite.track('DCR_SocialShare_Executed');
      console.log(e);
    } catch (t) {}

    switch (socialLink) {
      case 'instagram':
        var socialInstagram = 'https://www.instagram.com/accenture/?hl=en';
        window.open(socialInstagram, 'newwindow', 'width=400,height=350');
        break;
      case 'twitter':
        e.preventDefault();
        var socialTwitter =
          'https://twitter.com/intent/tweet?hashtags=' +
          encodeURI(hashtag) +
          '&url=' +
          encodeURI(socialUrl) +
          '&text=' +
          encodeURI(socialTitle) +
          '%0A' +
          encodeURI(socialSummary) +
          '';
        window.open(socialTwitter, 'newwindow', 'width=400,height=350');
        //$('.ion-social-twitter.social-likes__widget.social-likes__widget_twitter').trigger("click");
        break;
      case 'facebook':
        e.preventDefault();
        var socialFacebook =
          'https://www.facebook.com/sharer/sharer.php?u=' +
          encodeURI(socialUrl) +
          '&linkcomponentname=&originalTitle=Opens%20Facebook%20share%20window.&rel=d7429409-d6da-46cd-91dd-8702781ae3c4&name=asset&linktype=share%20intent&analyticsContentType=share%20intent&analyticsLinkName=facebook&url=' +
          encodeURI(socialUrl) +
          '&network=facebook&bs.tooltip=';
        window.open(socialFacebook, 'newwindow', 'width=400,height=350');
        break;
      case 'linkedin':
        e.preventDefault();
        var socialLinkedIn =
          'https://www.linkedin.com/shareArticle?mini=true&url=' +
          encodeURI(socialUrl) +
          '&title=' +
          encodeURI(socialTitle) +
          '&summary=' +
          encodeURI(socialSummary) +
          '&source=' +
          encodeURI(socialTitle) +
          '';
        window.open(socialLinkedIn, 'newwindow', 'width=400,height=350');
        break;
      case 'mail':
        e.preventDefault();
        window.location.assign(
          'mailto:?subject=' +
            encodeURI(socialTitle) +
            '&body=' +
            encodeURI(socialSummary) +
            '%0A' +
            dataURL
        );
        break;
      default:
        return !0;
    }
  });

  $('.btn-twitter').on('click', function () {
    $('.social-icon-trigger.twitter').trigger('click');
  });

  $('.btn-linkedin').on('click', function () {
    $('.social-icon-trigger.linkedin').trigger('click');
  });

  $('.btn-facebook').on('click', function () {
    $('.social-icon-trigger.facebook').trigger('click');
  });

  $('.btn-envelope').on('click', function () {
    $('div.mail.social-icon-trigger.main').trigger('click');
  });
});
