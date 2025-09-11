function initResponsiveSlider() {
  const $slider = $('.slider_lighting');

  function getSlidesToShow() {
    const containerWidth = $slider.width();
    const minSlideWidth = 237;
    const gap = 24;

    let slidesToShow = Math.floor((containerWidth + gap) / (minSlideWidth + gap));

    if (slidesToShow < 1) slidesToShow = 1;

    if (containerWidth < 480) slidesToShow = 1.3;

    return slidesToShow;
  }

  $slider.slick({
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
  });

  $(window).on('resize', function () {
    const newSlidesToShow = getSlidesToShow();
    $slider.slick('slickSetOption', 'slidesToShow', newSlidesToShow, true);
  });
}


initResponsiveSlider();

function refreshSlider() {
  const $slider = $('.slider_lighting');
  if ($slider.hasClass('slick-initialized')) {
    $slider.slick('unslick');
  }
  initResponsiveSlider();
}
