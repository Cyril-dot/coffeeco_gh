
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
// Get elements
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
closeMenuList.addEventListener('click', function() {
    mobileMenu.style.display = 'none'; // Hide the mobile menu
});