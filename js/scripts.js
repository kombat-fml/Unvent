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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
    },
  });
  const headerBurger = document.querySelector('.header-burger');
  const nav = document.querySelector('.nav');

  const openMenu = () => {
    headerBurger.classList.add('header-burger-active');
    nav.classList.add('nav-active');
    document.body.classList.add('no-scroll');
  };
  const closeMenu = () => {
    headerBurger.classList.remove('header-burger-active');
    nav.classList.remove('nav-active');
    document.body.classList.remove('no-scroll');
  };

  headerBurger.addEventListener('click', () => {
    if (!headerBurger.classList.contains('header-burger-active')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  document.body.addEventListener('click', (event) => {
    if (
      nav.classList.contains('nav-active') &&
      !event.target.closest('.nav') &&
      !event.target.closest('.header-burger')
    ) {
      closeMenu();
    }
  });
  document.body.addEventListener('keydown', (event) => {
    if (headerBurger.classList.contains('header-burger-active') && event.keyCode == '27') {
      closeMenu();
    }
  });
});
