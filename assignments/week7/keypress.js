$(document).ready(function () {
  //Keypress Function

  $('#target').keypress(function (event) {
    var keyPressed = event.which;

    console.log('The key pressed was: ' + keyPressed);

    if (keyPressed == 'h') {
      console.log('The h was pressed');
    }

    var currentMarginTop = $('#target').css('margin-top');

    currentMarginTop = parseInt(currentMarginTop);

    console.log(currentMarginTop);

    var newMargin = currentMarginTop + 10 + 'px';

    $('#target').css('margin-top', newMargin);

    //Send current text to server and get suggestions
    console.log('Keypress is used.');
  });
});
