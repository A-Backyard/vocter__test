$(document).ready(function() {

  $('.filtering-ls').slick({
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    dots: false,
    arrows: true,
    infinite: false,

  });



  var filtered = false;

  $('.all-filters').on('click', function() {
    $('.active').removeClass('active');
    $('.all-filters-ls').addClass('active');
    $('.filtering-ls').slickUnfilter();
    filtered = false;
  });

  $('.mouses-filter').on('click', function() {
    $('.filtering-mp').slickFilter('.mouses');
    $('.active').removeClass('active');
    $('.mouses-filter').addClass('active');
    filtered = true;
  });

  $('.movies-filter').on('click', function() {
    $('.filtering-ls').slickFilter('.movies-mp-ls');
    $('.active').removeClass('active');
    $('.movies-filter').addClass('active');
    filtered = true;
  });

  $('.tv-filter').on('click', function() {
    $('.filtering-ls').slickFilter('.tv-mp-ls');
    $('.active').removeClass('active');
    $('.tv-filter').addClass('active');
    filtered = true;
  });

  $('.leds-filter').on('click', function() {
    $('.filtering-ls').slickFilter('.leds');
    $('.active').removeClass('active');
    $('.leds-filter').addClass('active');
    filtered = true;
  });

});