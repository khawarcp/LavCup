$(document).ready(function(){
    $('.stadium-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

    //   remove slick arrows
    $('.slick-arrow').remove();
})