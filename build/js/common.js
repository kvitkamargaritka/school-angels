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

  // inputs
  var i = $('.form-group__input');
  i.on('focusout', function() {
    if ($(this).val() != '') {
      $(this).addClass('input-filled');
      //console.log('input не пустой');
    }
    else {
      $(this).removeClass('input-filled');
      //console.log('input пустой');
    }
  });

  i.on('focus', function() {
    $(this).parent().parent().find('.field__line').addClass('width-6');
  });

  i.on('focusout', function() {
    $(this).parent().parent().find('.field__line').removeClass('width-6');
  });

});
