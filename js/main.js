 
document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#next-section').scrollIntoView({
    behavior: 'smooth'
  });
}); 


const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
  pagination: {
    el: ".testimonial-section .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".productSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

 
    AOS.init({
      duration: 650,
      once: false
    }); 