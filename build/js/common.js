$(document).ready(function() {

  // swiper settings
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  // hamburger-menu
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('#nav-mob').fadeToggle();
	});

});
