'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const selectorAll = document.querySelectorAll('.section');
const classAll = document.getElementsByClassName('section');
// console.log(selectorAll);
// console.log(classAll);

///////////////////////////////////////
// Learn More button

const sec1 = document.querySelector('#section--1');
const btnLearnMore = document.querySelector('.btn--scroll-to');
btnLearnMore.addEventListener('click', function() {
    sec1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Navigation

const navContainer = document.querySelector('.nav__links');
navContainer.addEventListener('click', function(e) {
    e.preventDefault();
    if (
        e.target.classList.contains('nav__link') &&
        !e.target.classList.contains('nav__link--btn')
    ) {
        document
            .querySelector(e.target.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    }
});

///////////////////////////////////////
// Operations

// Tab components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Event handling
tabsContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    if (clicked) {
        tabs.forEach(el => el.classList.remove('operations__tab--active'));
        clicked.classList.add('operations__tab--active');
        tabsContent.forEach(el =>
            el.classList.remove('operations__content--active')
        );
        document
            .querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add('operations__content--active');
    }
});
///////////////////////////////////////
// Navigation Hover

const handlingHover = function(e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = document.querySelector('.nav__logo');
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
            }
            logo.style.opacity = this;
        });
    }
};

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', handlingHover.bind('0.5'));
nav.addEventListener('mouseout', handlingHover.bind('1'));

///////////////////////////////////////
// Sticky Navigation

const header = document.querySelector('.header');
const heightNav = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${heightNav}px`,
};
const observer = new IntersectionObserver(stickyNav, options);
observer.observe(header);

///////////////////////////////////////
// Revealing section

const sectionReveal = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionReveal, {
    root: null,
    threshold: 0.15,
});
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy Image

const imgs = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer) {
    // console.log(entries);
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // console.log(entry);
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});
imgs.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider

const slider = function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const btnSliderRight = document.querySelector('.slider__btn--right');
    const btnSliderLeft = document.querySelector('.slider__btn--left');
    const dotContainer = document.querySelector('.dots');
    let activeSlide = 0;
    let maxSlide = slides.length - 1;

    // Functions
    const init = function() {
        goToSlide(0);
        creatDots();
        activateDot(0);
    };
    const creatDots = function() {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></buton>`
            );
        });
    };

    const activateDot = function(slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => {
            dot.classList.remove('dots__dot--active');
        });
        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };
    const goToSlide = function(slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${(i - slide) * 100}%)`;
        });
    };

    const nextSlide = function() {
        activeSlide === maxSlide ? (activeSlide = 0) : activeSlide++;
        goToSlide(activeSlide);
        activateDot(activeSlide);
    };

    const prevSlide = function() {
        activeSlide === 0 ? (activeSlide = maxSlide) : activeSlide--;
        goToSlide(activeSlide);
        activateDot(activeSlide);
    };
    init();

    // Event Handlers
    btnSliderRight.addEventListener('click', nextSlide);
    btnSliderLeft.addEventListener('click', prevSlide);
    document.addEventListener('keydown', e => {
        e.key === 'ArrowRight' && nextSlide();
        e.key === 'ArrowLeft' && prevSlide();
    });
    dotContainer.addEventListener('click', e => {
        if (!e.target.classList.contains('dots__dot')) return;
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide);
    });
};
slider();