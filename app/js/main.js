$(function(){


  $('.reiteng-user').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  var mixer = mixitup('.propducts__inner-box');

  $('.product-slider__inner').slick({
      arrows: false,
      dots:true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });

});