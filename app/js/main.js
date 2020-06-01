$(function(){


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });


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

    $('.icon-th-list').on('click', function(){
        $('.item-page').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function(){
        $('.item-page').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });
    
    


  let mixer = mixitup('.product__inner-box');

   
});