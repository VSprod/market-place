$(function(){


    $('.rate-star').rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px",
        spacing: "3px"

    });


    $('.product-slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        
    });


    var mixer = mixitup('.product__inner-box');

   
});