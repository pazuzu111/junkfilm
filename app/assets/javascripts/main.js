$(document).ready(function() {

		$('.menu').click(function(e) {
			e.stopPropagation();
			$('#main_nav').toggleClass('active');
		});

		$(document).click(function() {
			$('#main_nav').removeClass('active');
		});
});

// show navbar when scrolling down

(function ($) {
  $(document).ready(function(){

    // hide .navbar first


    // fade in .navbar
    $(function () {
      $(window).scroll(function () {
        if($(document).scrollTop()<100){
          $('#top_header').css('background-color', 'transparent');
        }
        else {
          $('#top_header').css('background-color', 'black');
        }
      });
    })

});
  }(jQuery));


// smooth scroll for links

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});










