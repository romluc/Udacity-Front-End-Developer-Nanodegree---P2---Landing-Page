/**
 * Define Global Variables
 *
 */

const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');

const menuLinks = ['home', 'profile', 'product', 'services', 'contact'];
const sections = ['section1', 'section2', 'section3', 'section4'];

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

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  // top elem edge is visible?
  let topVisible = coords.top > 0 && coords.top < windowHeight;

  // bottom elem edge is visible?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav - based on the array of menu items (menuLinks)
const buildNavList = () => {
  // button for the burger menu
  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-btn');

  menuLinks.forEach(link => {
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const newHr = document.createElement('hr');

    newLi.setAttribute('data-nav', `${link}`);
    newLi.classList.add('menu__link');

    newA.textContent = `${link}`;

    // Isolate home section, so that clicking it'll bring back to the top
    if (newA.textContent == 'home') {
      newA.setAttribute('href', `#`);
    } else {
      // setting anchors to sections in each link
      newA.setAttribute('href', `#section${menuLinks.indexOf(link)}`);
    }

    newLi.appendChild(newA);

    navBarList.appendChild(newLi);
    navBarList.appendChild(newHr);
  });
  navBarMenu.appendChild(menuButton);
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

const buildSections = () => {
  let idSection = 0;
  const main = document.querySelector('main');
  const newDivContainer = document.createElement('div');
  newDivContainer.classList.add('container');

  sections.forEach(element => {
    idSection = sections.indexOf(element) + 1;
    const newSection = document.createElement('section');
    const newDiv = document.createElement('div');
    const newH2 = document.createElement('h2');
    const newFirstPara = document.createElement('p');
    const newSecondPara = document.createElement('p');

    newSection.setAttribute('id', `section${idSection}`);
    newSection.setAttribute('data-nav', `Section ${idSection}`);

    // Extracting sections names from menuLinks array and capitalizing first letter
    const h2Title =
      menuLinks[idSection].charAt(0).toUpperCase() +
      menuLinks[idSection].slice(1);
    newH2.textContent = `${h2Title}`;

    newFirstPara.textContent = `Gathered by gravity prime number cosmic ocean how far away from which we spring white dwarf. The ash of stellar alchemy Orion's sword rich in heavy atoms the sky calls to us permanence of the stars courage of our questions? Not a sunrise but a galaxyrise rich in mystery courage of our questions network of wormholes inconspicuous motes of rock and gas dream of the mind's eye. Citizens of distant epochs encyclopaedia galactica vanquish the impossible sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem extraordinary claims require extraordinary evidence totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;
    newSecondPara.textContent = `Muse about Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium invent the universe dream of the mind's eye star stuff harvesting star light Apollonius of Perga? Billions upon billions Sea of Tranquility shores of the cosmic ocean kindling the energy hidden in matter not a sunrise but a galaxyrise radio telescope. Ut enim ad minima veniam the carbon in our apple pies how far away great turbulent clouds courage of our questions inconspicuous motes of rock and gas and billions upon billions upon billions upon billions upon billions upon billions upon billions.`;

    newDiv.classList.add('landing__container');
    newDiv.appendChild(newH2);
    newDiv.appendChild(newFirstPara);
    newDiv.appendChild(newSecondPara);

    newSection.appendChild(newDiv);

    newDivContainer.appendChild(newSection);
    main.appendChild(newDivContainer);
  });
};

// Add class 'active' to section when near top of viewport

const loadImage = () => {
  const newContainer = document.createElement('div');
  const newImg = document.createElement('div');

  const header = document.querySelector('header.main__hero');
  const mainHeroText = document.querySelector('header > h1');

  header.classList.remove('main__hero');

  newContainer.classList.add('main__hero');

  newImg.classList.add('main__image');

  mainHeroText.classList.add('main__text');
  newImg.appendChild(mainHeroText);
  newContainer.appendChild(newImg);
  header.appendChild(newContainer);
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
  let t0 = performance.now();

  buildNavList();
  loadImage();
  buildSections();
  buildSearchBox();
  showBackToTopButton();

  const sectionsArray = document.querySelectorAll('section');

  const setSectionActive = () => {
    sectionsArray.forEach(element => {
      element.classList.remove('active');
      if (isVisible(element)) {
        element.classList.add('active');
        console.log(element.firstChild.firstChild.textContent.toLowerCase());
      }
    });
  };

  let debouncedSetSectionActive = debounce(setSectionActive);
  let i = 0;
  window.addEventListener(
    'scroll',
    function() {
      i++;
      debouncedSetSectionActive();
      console.log(`called ${i} times`);
    },
    false
  );

  let t1 = performance.now();
  console.log(`Dynamic building took ${t1 - t0} milisseconds`);
});

// function showVisible() {
//   for (let img of document.querySelectorAll('img')) {
//     let realSrc = img.dataset.src;
//     if (!realSrc) continue;

//     if (isVisible(img)) {
//       console.log('came here');
//       img.src = realSrc;
//       img.dataset.src = '';
//     }
//   }
// }

// Set sections as active
const setTargetSectionActive = element => {
  sectionsArray.forEach(section => {
    section.classList.remove('active');
  });

  console.log(`${element} is active`);
};

// Show a back to top button when user reaches window height
const showBackToTopButton = () => {
  const buttonTop = document.createElement('button');
  const arrowI = document.createElement('i');

  buttonTop.classList.add('buttonTop');
  buttonTop.classList.add('hidden');

  arrowI.classList.add('fas');
  arrowI.classList.add('fa-chevron-up');

  buttonTop.appendChild(arrowI);
  document.body.appendChild(buttonTop);

  buttonTop.addEventListener('click', function() {
    window.scrollTo(pageYOffset, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
  });

  window.addEventListener('scroll', function() {
    if (pageYOffset > document.documentElement.clientHeight) {
      buttonTop.classList.remove('hidden');
    } else buttonTop.classList.add('hidden');
  });
};
