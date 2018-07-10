$(document).ready(function () {
  if (isMobile.any) {
    // load css
    $('head').append('<link rel="stylesheet" type="text/css" href="/static/stylesheets/mobile.css">');
    
    $("#menu-close").hide();
    $("header").hide();
    
    $("#menu-hamberger").click(function () {
      $("header").animate({ width: "toggle" }, function () {
        $("#menu-hamberger").hide();
        $("#menu-close").show();
      });
    });

    $("#menu-close").click(function () {
      $("header").animate({ width: "toggle" }, function () {
        $("#menu-close").hide();
        $("#menu-hamberger").show();
      });
    });
  } else {
    // load css
    $('head').append('<link rel="stylesheet" type="text/css" href="/static/stylesheets/desktop.css">');
    
    // Make nav fixed or hide 
    var scrollPos = 0;

    $(window).scroll(function () {
      var curScrollPos = $(this).scrollTop();

      if (curScrollPos > scrollPos) {
        //Scrolling Down
        $("header").css("display", "none");
      } else {
        //Scrolling Up
        $("header").css("display", "block");
      }
      scrollPos = curScrollPos;
    });
  }
  $('body').css("display", "block");
});
