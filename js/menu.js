
var menuOpened = false;

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('.rotate').click(function() {
    rotation += 5;
    $(this).rotate(rotation);
});

$(document).ready(function () {

  // to projects button

  $("#to-projects").on("click", function() {

    $(".projects-page").css("opacity", "1");
    $('.projects-page').css("display", "block");
    $(".main-page").css("opacity", "0");
    setTimeout(function() {$('.main-page').css("display", "none");}, 300);

  });

  // menu button
  $("#menu-button").on("click", function() {

    if (menuOpened === false) {
      $(".page").css("opacity", "0");
      $("#menu-button").rotate(60);
      $("#menu-button").css("background-image", "url('src/menu-button-opened.svg')");
      setTimeout(function() {$('.page').css("display", "none");}, 300);

      menuOpened = true
    } else {
      $('.main-page').css("display", "block");
      setTimeout(function() {$(".main-page").css("opacity", "1");}, 20);
      $("#menu-button").rotate(0);
      $("#menu-button").css("background-image", "url('src/menu-button.svg')");

      menuOpened = false
    }

  });

  // going to page
  $(".page-button").on("click", function() {
    console.log($(this).text())
    if ($(this).text() === "PROJECTS") {

      $('.projects-page').css("display", "block");
      setTimeout(function() {$(".projects-page").css("opacity", "1");}, 20);
      $("#menu-button").rotate(0);
      $("#menu-button").css("background-image", "url('src/menu-button.svg')");

      menuOpened = false

    } else if ($(this).text() === "ABOUT US") {

      $('.aboutus-page').css("display", "block");
      setTimeout(function() {$(".aboutus-page").css("opacity", "1");}, 20);
      $("#menu-button").rotate(0);
      $("#menu-button").css("background-image", "url('src/menu-button.svg')");

      menuOpened = false

    } else {

      $('.news-page').css("display", "block");
      setTimeout(function() {$(".news-page").css("opacity", "1");}, 20);
      $("#menu-button").rotate(0);
      $("#menu-button").css("background-image", "url('src/menu-button.svg')");

      menuOpened = false

    }
  });

});
