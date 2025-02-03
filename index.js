// Ensure the hamburger, mobile menu, and close buttons are defined first
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const closeMenuList = document.getElementById('closeMenuList');

// Open the mobile menu when the hamburger is clicked
hamburger.addEventListener('click', function() {
    mobileMenu.style.display = 'block'; // Show the mobile menu
});

// Close the mobile menu when the close button (inside the menu) is clicked
closeMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'none'; // Hide the mobile menu
});

// Close the mobile menu when the close menu link (inside the menu) is clicked
    
// Carousel functionality
let currentSlide = 0;

function moveSlide(direction) {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.cs-todays-main1');
    const totalSlides = slides.length;

    // Update the current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Calculate the new transform value based on the slide width
    const transformValue = -currentSlide * slides[0].offsetWidth;

    // Apply the transform to the gallery
    gallery.style.transform = `translateX(${transformValue}px)`;
}

// Initialize the carousel
function initCarousel() {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.cs-todays-main1');

    // Set the width of the gallery to accommodate all slides
    gallery.style.width = `${slides.length * slides[0].offsetWidth}px`;
}

// Modal and form toggling logic
function closeModal() {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'none'; // Hide the modal
}

// Toggle between Login and Sign Up forms
const toggleFormLink = document.getElementById('toggleFormLink');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

toggleFormLink.addEventListener('click', function() {
    if (loginForm.style.display !== 'none') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleFormLink.innerHTML = "Already have an account? <span>Login here.</span>";
    } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleFormLink.innerHTML = "Don't have an account? <span>Sign up here.</span>";
    }
});

// Show modal on page load
window.onload = function() {
    // Show the modal on page load
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block'; // Ensure modal is visible on load

    // Initialize the carousel
    initCarousel();

    // Add event listeners for closing modal
    const closeModalButton = document.getElementById('closeModal');
    const closeLoginFormButton = document.getElementById('closeLoginForm');
    const closeSignUpFormButton = document.getElementById('closeSignUpForm');

    closeModalButton.addEventListener('click', closeModal);
    closeLoginFormButton.addEventListener('click', closeModal);
    closeSignUpFormButton.addEventListener('click', closeModal);
};

// Scroll event for adding class to body
document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
});

// Mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
dropDowns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('cs-active');
    });
});
