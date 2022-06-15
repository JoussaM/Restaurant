const navBar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
});

// *Slide - Home

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// *Slide - Food

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// *Slide - food ★★★★★

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preveiw => {
      let target = preveiw.getAttribute('data-target');
      if (name == target) {
        preveiw.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(close => {
    close.classList.remove('active');
  });
};

// *Slide - ★★★★★

// *Slide Menu

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// *Slide Blogs

var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});