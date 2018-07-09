$(document).ready(function () {
  if ($.browser.mobile) {
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




  // Set nav item selected
  $('.nav-item').on("click", function (event) {
    $('.nav-item a').each(function (_, element) {
      $(element).removeClass("nav-item-selected");
      if (event.target === element) {
        $(element).addClass("nav-item-selected");
      }
    });
  });
});
