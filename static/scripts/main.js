$(document).ready(function () {
  isMobile = $('html, body').width() < 600 ? true : false;
  if (isMobile) {
    $("#menu-close").hide();
    $("header").hide();

    $("#menu-hamberger").click(function () {
      $("header").animate({
        width: "toggle",
        right: "0px"
      }, function () {
        $("#menu-hamberger").hide();
        $("#menu-close").show();
      });
    });

    $("#menu-close").click(function () {
      $("header").animate({
        width: "toggle"
      }, function () {
        $("#menu-close").hide();
        $("#menu-hamberger").show();
      });
    });
  } else {

    // Make nav fixed or hide
    var scrollPos = 0;

    $(window).scroll(function () {
      var curScrollPos = $(this).scrollTop();

      if (curScrollPos > scrollPos) {
        //Scrolling Down
        $("header").fadeOut('slow');
      } else {
        //Scrolling Up
        $("header").fadeIn('slow');
      }
      scrollPos = curScrollPos;
    });
  }

  $('body').css("display", "block");

  // scroll body to center
  var bodyWidth = $("html, body").width();

  if (bodyWidth < 1600) {
    $("html, body").scrollLeft((1600 - bodyWidth) / 2)
  }
  
  // focus() to input without scrolling
  $.fn.focusWithoutScrolling = function() {
    var x = window.scrollX, y = window.scrollY;
    this.focus();
    window.scrollTo(x, y);
  };
  $('#about-form input').focusWithoutScrolling();
});
