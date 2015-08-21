$(document).ready(function () {
  $("#back-top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $(window).height()/2) {
        $("#back-top").fadeIn(1500);
      }
      else {
        $("#back-top").fadeOut(1000);
      }
    });
    $("#back-top").click(function () {
      $('body,html').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  //$("div[id^='section-']").height($(window).height());
});

