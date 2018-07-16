$(document).ready(function () {
  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $('#persons li.person').length;
  var leftpos = itemCount;
  var resetCount = itemCount;
  
  $('#pagination span').text(startItem + '/' + itemCount);
  
  //unused: gather text inside items class
  $('li.person').each(function (index) {
    items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == 'counter-clockwise') {
      var leftitem = $('.left-pos').attr('id') - 1;
      if (leftitem == 0) {
        leftitem = itemCount;
      }

      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

      startItem--;
      if (startItem < 1) {
        startItem = itemCount;
      }
    }

    //moving carousel forward
    if (direction == 'clockwise' || direction == '' || direction == null) {
      function pos(positionvalue) {
        if (positionvalue != 'leftposition') {
          //increment image list id
          position++;

          //if final result is greater than image count, reset position.
          if ((startItem + position) > resetCount) {
            position = 1 - startItem;
          }
        }

        //setting the left positioned item
        if (positionvalue == 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;

          //reset last image in list to left position if first image is in main position
          if (position < 1) {
            position = itemCount;
          }
        }

        return position;
      }

      $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
      $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
      $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
      $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');

      startItem++;
      position = 0;
      if (startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $('#next').click(function () {
    swap('clockwise');
    $('#pagination span').text(startItem + '/' + itemCount);
  });

  //prev button click function
  $('#prev').click(function () {
    swap('counter-clockwise');
    $('#pagination span').text(startItem + '/' + itemCount);
  });

  //if any visible items are clicked
  $('persons li.person').click(function () {
    if ($(this).attr('class') == 'person left-pos') {
      swap('counter-clockwise');
    } else {
      swap('clockwise');
    }
  });
  
  if (isMobile) {
    $("#team #persons").on( "swipeleft", swipeleftHandler);
    function swipeleftHandler(event){
      swap('clockwise');
      $('#pagination span').text(startItem + '/' + itemCount);
    }
    $("#team #persons").on( "swiperight", swiperightHandler);
    function swiperightHandler(event){
      swap('counter-clockwise');
      $('#pagination span').text(startItem + '/' + itemCount);
    }
  }
});
