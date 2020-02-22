/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');
const menuLinks = ['home', 'profile', 'contact us'];
console.log(navBarList);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav - based on the array of menu items (menuLinks)
menuLinks.forEach(link => {
  const newLi = document.createElement('li');
  newLi.innerHTML = `${link}`;
  newLi.classList.add('menu__link');
  navBarList.appendChild(newLi);
});
nnavBarMenu.appendChild(navBarList);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
