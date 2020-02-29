$(document).ready(function() {
  $('.filtering-mp-cl').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    dots: false,
    arrows: false,
    slide: 'div'
  });


  var filtered = false;

  $('.all-filters').on('click', function() {
    $('.active').removeClass('active');
    $('.all-filters').addClass('active');
    $('.filtering').slickUnfilter();
    filtered = false;
  });

  $('.mouses-filter').on('click', function() {
    $('.filtering').slickFilter('.mouses');
    $('.active').removeClass('active');
    $('.mouses-filter').addClass('active');
    filtered = true;
  });

  $('.movies-filter').on('click', function() {
    $('.filtering').slickFilter('.movies');
    $('.active').removeClass('active');
    $('.movies-filter').addClass('active');
    filtered = true;
  });

  $('.tv-filter').on('click', function() {
    $('.filtering').slickFilter('.tv');
    $('.active').removeClass('active');
    $('.tv-filter').addClass('active');
    filtered = true;
  });

  $('.leds-filter').on('click', function() {
    $('.filtering').slickFilter('.leds');
    $('.active').removeClass('active');
    $('.leds-filter').addClass('active');
    filtered = true;
  });

});