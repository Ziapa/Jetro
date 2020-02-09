$(function () {


    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__inner-2'
      });
      $('.slider__inner-2').slick({
        slidesToShow: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3           
            }
          },
        ]
      });      
      $(".header__menu-btn").on("click", function(){
        $(".menu > ul") .slideToggle();
    });
});

