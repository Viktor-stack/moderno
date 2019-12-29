$(function(){
  $('input[type=file], select').styler({
    locale: 'en',
  });

  $('.product-slider__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".range__price-limit").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$",  
  });

  $('.reiteng-user').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $('.icon-th-list').on('click',function(){
    $('.addclass').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active'); 
  });

  $('.icon-th-large').on('click',function(){
    $('.addclass').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.product-one__tab .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tab').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tab .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.settings__wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.settings__wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.settings__wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
  
  $('.profile-details__inner .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $(".about__me-inner")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $('.profile-details__inner .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  })

  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  })

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('active');
  })

 var mixer = mixitup('.propducts__inner-box');

  // var offset = $(".header").offset();
  // // var sticky = document.getElementById("sticky-header");

  // $(window).scroll(function () {

  //   if ($('body').scrollTop() > offset.top) {
  //     $('.header').addClass('fixed');
  //   } else {
  //     $('.header').removeClass('fixed');
  //   }

  // });

});

document.body.onload = function () {

  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
}

