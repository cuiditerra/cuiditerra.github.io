$(document).ready(function () {
  var sections = $('section'),
    nav = $('nav'),
    header_height = isMobile.any ? 0 : 66;
  
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('#nav-items a').removeClass('nav-item-selected');
        sections.removeClass('active');

        $(this).addClass('nav-item-selected');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-item-selected');
      }
    });
  });


  nav.find('#nav-items a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 500);
    
    if (isMobile.any) {
      $("header").animate({ width: "toggle" }, function () {
        $("#menu-close").hide();
        $("#menu-hamberger").show();
      });
    }

    return false;
  });
});
