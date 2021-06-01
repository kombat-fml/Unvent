document.addEventListener('DOMContentLoaded', () => {
  const heroSlider = new Swiper('.hero-slider-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    // centeredSlides: true,
    navigation: {
      nextEl: '.hero-slider-button-next',
      prevEl: '.hero-slider-button-prev',
    },
  });
});
