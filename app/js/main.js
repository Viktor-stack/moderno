$(function(){

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


  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  })
  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  })

 var mixer = mixitup('.propducts__inner-box');

});