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

  $('.level-1').click(function(e) {
    console.log("On click level-1");
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
  });

  $('.service-block').hover(function(e) {
    $(this).find('.service-cover').slideToggle();
  }, function(e) {
    $(this).find('.service-cover').slideToggle();
  });

  $('#url-submit').click(function(e) {
    $('#log-text').empty()
    $('#log-text').hide()
    $('#ajax-waiter').show()
    $('#url-submit').attr('disabled', 'disabled');
    $.ajax({
      url: "/test",
      method: "POST",
      data: {"url": $('#url-area').val()}
    }).done(function(data, status) {
      $('#log-text').addClass('log-text').html(data);
      $('#log-text').show()
      $('#ajax-waiter').hide()
      $('#url-submit').removeAttr('disabled');
    });
  });
});

