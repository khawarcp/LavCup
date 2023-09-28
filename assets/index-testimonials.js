$(document).ready(function(){
    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //   remove slick arrows
    $('.slick-arrow').remove();
})