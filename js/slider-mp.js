$(document).ready(function() {

  $('.filtering-mp').slick({
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: '<img src="./media/svg/verticali-slider-arrows.svg">',
    nextArrow: '<img src="./media/svg/verticali-slider-arrows.svg">'
  });


  $('.list-view-mp').click(function() {
    $('.filtering-mp').css("display", "block");
    $('.filtering-mp-cl').css("display", "none");
    $('.view-mp').css("display", "inline-block");
    $('.view-mp-cl').css("display", "none");
  });

  $('.card_view-mp').click(function() {
    $('.filtering-mp').css("display", "none");
    $('.filtering-mp-cl').css("display", "block");
    $('.view-mp-cl').css("display", "inline-block");
    $('.view-mp').css("display", "none");
  });

  var filtered = false;

  $('.all-filters-mp').on('click', function() {
    $('.active').removeClass('active');
    $('.all-filters-mp').addClass('active');
    $('.filtering-mp').slickUnfilter();
    filtered = false;
  });

  $('.mouses-filter').on('click', function() {
    $('.filtering-mp').slickFilter('.mouses');
    $('.active').removeClass('active');
    $('.mouses-filter').addClass('active');
    filtered = true;
  });

  $('.movies-filter-mp').on('click', function() {
    $('.filtering-mp').slickFilter('.movies-mp');
    $('.active').removeClass('active');
    $('.movies-filter-mp').addClass('active');
    filtered = true;
  });

  $('.tv-filter-mp').on('click', function() {
    $('.filtering-mp').slickFilter('.tv-mp');
    $('.active').removeClass('active');
    $('.tv-filter-mp').addClass('active');
    filtered = true;
  });

  $('.leds-filter').on('click', function() {
    $('.filtering-mp').slickFilter('.leds');
    $('.active').removeClass('active');
    $('.leds-filter').addClass('active');
    filtered = true;
  });

});