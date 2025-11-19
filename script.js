const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll('.toggle-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    // Find the card containing this button
    const card = e.target.closest('.card');
    if (!card) {
      console.error('Card not found for button:', e.target);
      return;
    }
    
    // Toggle the class and button text
    const description = card.querySelector('.description');
    const hiddenText = description.querySelector('.hidden-text');

    if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      hiddenText.style.display = 'none';
      button.textContent = 'Read More';
    } else {
      card.classList.add('expanded');
      hiddenText.style.display = 'inline';
      button.textContent = 'Read Less';
    }

    console.log(`Toggled card:`, card);
  });
});



