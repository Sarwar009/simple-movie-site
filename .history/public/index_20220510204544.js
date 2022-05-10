$('.swiper-slide').on('mouseover', function() {
    swiper.autoplay.stop();
  });
  
  $('.swiper-slide').on('mouseout', function() {
    swiper.autoplay.start();
  });