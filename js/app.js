/**
 * Define Global Variables
 *
 */

const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');
const menuLinks = ['home', 'profile', 'product', 'contact us'];

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
  const newHr = document.createElement('hr');
  newLi.textContent = `${link}`;
  newLi.classList.add('menu__link');
  navBarList.appendChild(newLi);
  navBarList.appendChild(newHr);
});
navBarMenu.appendChild(navBarList);

// build search box with a input and a button inside
const newSearchBox = document.createElement('div');
newSearchBox.classList.add('search-box');

const newSearchBoxInput = document.createElement('input');
newSearchBoxInput.setAttribute('type', 'Text');
newSearchBoxInput.classList.add('search-box__input');
newSearchBoxInput.setAttribute('placeholder', 'Search...');

const newSearchBoxButton = document.createElement('button');
newSearchBoxButton.setAttribute('type', 'submit');
newSearchBoxButton.classList.add('search-box__button');

const newSearchBoxButtonI = document.createElement('i');
newSearchBoxButtonI.classList.add('fas');
newSearchBoxButtonI.classList.add('fa-search');

newSearchBox.appendChild(newSearchBoxInput);
newSearchBox.appendChild(newSearchBoxButton);
newSearchBoxButton.appendChild(newSearchBoxButtonI);

navBarMenu.appendChild(newSearchBox);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
window.onscroll = function() {
  hideNavOnScroll();
};

function hideNavOnScroll() {
  let distanceToTop = window.pageYOffset;
  if (distanceToTop > 100) {
    document.querySelector('.page__header').classList.add('hidden');
  } else {
    document.querySelector('.page__header').classList.remove('hidden');
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
