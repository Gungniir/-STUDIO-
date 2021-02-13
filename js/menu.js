
var menuOpened = false;
var alreadyOpening = false;
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
    if (alreadyOpening === false) {
      if (menuOpened === false) {
        alreadyOpening = true;
        $(".page").css("opacity", "0");
        $("#menu-button").rotate(60);
        $("#menu-button").css("background-image", "url('src/menu-button-opened.svg')");
        setTimeout(function() {
          $('.page').css("display", "none");
          alreadyOpening = false;
        }, 300);

        menuOpened = true;
      } else {
        alreadyOpening = true;
        $('.main-page').css("display", "block");
        setTimeout(function() {$(".main-page").css("opacity", "1");}, 20);
        $("#menu-button").rotate(0);
        $("#menu-button").css("background-image", "url('src/menu-button.svg')");

        menuOpened = false;
        setTimeout(function() {alreadyOpening = false;}, 300)
      }
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

  $(".socials").on("mouseover", function() {
    $(this).css("opacity", "0.7");
  });

  $(".socials").on("mouseout", function() {
    $(this).css("opacity", "0");
  });

  $("#to-project-1").css("background", "#FBFBFB");

  $("#to-project-1").on("click", function() {
    $(".controls-button").css("background", "transparent");
    $(this).css("background", "#FBFBFB");
    $(".project").css("opacity", "0");
    setTimeout(function() {
      $(".project").css("display", "none");
      $("#project-1").css("display", "flex");
      $("#project-1").css("opacity", "1");
    }, 200);
  });

  $("#to-project-2").on("click", function() {
    $(".controls-button").css("background", "transparent");
    $(this).css("background", "#FBFBFB");
    $(".project").css("opacity", "0");
    setTimeout(function() {
      $(".project").css("display", "none");
      $("#project-2").css("display", "flex");
      $("#project-2").css("opacity", "1");
    }, 200);
  });

  $("#to-project-3").on("click", function() {
    $(".controls-button").css("background", "transparent");
    $(this).css("background", "#FBFBFB");
    $(".project").css("opacity", "0");
    setTimeout(function() {
      $(".project").css("display", "none");
      $("#project-3").css("display", "flex");
      $("#project-3").css("opacity", "1");
    }, 200);
  });

});
