//----------------------Creating App Module-------------------------
portfolio = angular.module('portfolio', []);

//-------------------Navigation Functions----------------------------
$(function() {
  $('.non-active').click(function() {
      //Remove active class and and non-active to old nav
      $('.active').addClass('non-active');
      $('.active').removeClass('active');
      
      //Remove non-active and add active to current nav
      $(this).removeClass('non-active');
      $(this).addClass('active');
  });
});

$(function() {
  window.onbeforeunload = function() {
    window.scrollTo(0,0);
  }
});

function ScrollTo(id, height) {
    if (!height) {
        height = 30;
    }
    $('html,body').animate({
        scrollTop: $(id).offset().top - height
    }, 800);
};


//-----------------------Load Controllers-------------------------