$(document).ready(function() {
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#logo").css({
        "margin-top": "-5px",
        "height": "50px"
      });
      $("#header_nav").css({
        "background-color": "var(--to_black3)",
      });
    } else {
      $("#logo").css({
        "margin-top": "150px",
        "height": "200px"
      });
      $("#header_nav").css({
        "background-color": "transparent"
      });
    }
  });
});
