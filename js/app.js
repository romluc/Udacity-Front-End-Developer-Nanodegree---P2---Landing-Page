/**
 * Define Global Variables
 *
 */

const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');
const menuLinks = ['home', 'profile', 'product', 'contact us'];
const sectionsArray = document.querySelectorAll('section');

let scrolling = true;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
var debounce = function(fn) {
  // Setup a timer
  var timeout;

  // Return a function to run debounced
  return function() {
    // Setup the arguments
    var context = this;
    var args = arguments;

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function() {
      fn.apply(context, args);
    });
  };
};

const scrollToSection = element => {
  element.scrollIntoView();
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav - based on the array of menu items (menuLinks)
const buildNavList = () => {
  menuLinks.forEach(link => {
    const newLi = document.createElement('li');
    const newHr = document.createElement('hr');
    newLi.textContent = `${link}`;
    newLi.setAttribute('data-nav', `${link}`);
    newLi.classList.add('menu__link');
    navBarList.appendChild(newLi);
    navBarList.appendChild(newHr);
  });
  navBarMenu.appendChild(navBarList);
};

// build search box with a input and a button inside
const buildSearchBox = () => {
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
};

const buildAnchorsInSections = () => {
  // each section in sectionsArray receives an anchor
  sectionsArray.forEach(element => {
    const newA = document.createElement('a');
    newA.setAttribute('href', `#${element.id}`);
    element.prepend(newA);
  });

  // build anchor in home section as well
  const element = document.querySelector('.page__header');
  const newA = document.createElement('a');
  newA.setAttribute('href', '#');
  element.prepend(newA);
};

// Add class 'active' to section when near top of viewport
const isInViewport = function(elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Scroll to anchor ID using scrollTO event

// const hideNavWhenNotScrolling = () => {
//   isScrolling = false;
//   if (isScrolling) {
//     document.querySelector('.page__header').classList.remove('hidden');
//     window.clearTimeout(timer);
//   }

//   timer = setTimeout(function() {
//     if (!isScrolling) {
//       document.querySelector('.page__header').classList.add('hidden');
//     }
//     console.log(isScrolling);
//   }, 2000);
// };

let scrollStop = function(callback) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function() {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {
        // Run the callback
        callback();
        console.log('asdf');
      }, 2000);
    },
    false
  );
};

const hidePageHeaderIfNotScrolling = () => {
  if (!document.querySelector('.page__header').classList.contains('hidden')) {
    document.querySelector('.page__header').classList.add('hidden');
  }
  console.log('chamada');
};

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener('DOMContentLoaded', function(event) {
  buildNavList();
  buildSearchBox();
  buildAnchorsInSections();
  scrollToLink();
});

window.onscroll = () => {
  //scrollStop(hidePageHeaderIfNotScrolling);
  // sectionsArray.forEach(element => {
  //   let isIt = isInViewport(element);
  //   console.log(isIt);
  //   console.log(element);
  // });
};
// Build menu

// Scroll to section on link click
const scrollToLink = () => {
  navBarList.addEventListener('click', e => {
    if (e.target && e.target.nodeName == 'LI') {
      const dataNavToScroll = menuLinks.indexOf(
        e.target.getAttribute('data-nav')
      );
      let targetSection = document.querySelector(
        `[data-nav="Section ${dataNavToScroll}"]`
      );
      // Managing scrolling to home, which is not a section
      if (dataNavToScroll === 0) {
        targetSection = document.querySelector('a[href="#"]').parentElement;
        console.log(targetSection);
        scrollToSection(targetSection);
      } else {
        setTargetSectionActive(targetSection);
        scrollToSection(targetSection);
      }
    }
  });
};

// Set sections as active
const setTargetSectionActive = element => {
  sectionsArray.forEach(section => {
    section.classList.remove('active');
  });
  element.classList.add('active');
};
