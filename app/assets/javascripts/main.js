$(document).ready(function() {

		$('.menu').click(function(e) {
			e.stopPropagation();
			$('#main_nav').toggleClass('active');
		});

		$(document).click(function() {
			$('#main_nav').removeClass('active');
		});
});

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
		  $('#top_header').animate({backgroundColor: '#00000'}, 'slow');
        }
      });
    })

});
  }(jQuery));