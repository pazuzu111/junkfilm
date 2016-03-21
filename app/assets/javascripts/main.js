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



// <script>
// // Get the modal
// var modal = document.getElementById('id');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//     modal.style.display = "none";
// }
// </script>


// $('a').click(function (e) {
//     $('#myModal img').attr('src', $(this).attr('data-img-url'));
// });




