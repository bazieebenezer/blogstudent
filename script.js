const menuBtn = document.querySelector('.button')
const menuLinks = document.querySelector('.links')
const links = document.querySelectorAll('.links ul')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
const prev = document.querySelector('.prev_btn')
const next = document.querySelector('.next_btn')
const portfolios = document.querySelector('.portfolios')
const cards = document.querySelectorAll('.student_box')
const returnUpBtn = document.querySelector('.return_up')

// Open/Close menu links
menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('hidden')
    menuBtn.classList.toggle('showMenu')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.add('hidden')
        menuBtn.classList.remove('showMenu')
    })
});

// Make shadow to border for desktop version and show return up button for mobile version
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('borderNavbar')
        returnUpBtn.classList.add('show')
    } else {
        navbar.classList.remove('borderNavbar')
        returnUpBtn.classList.remove('show')
    }
})

// Initialize the active index and card position
let activeIndex = 0;
let cardWidth = cards[0].offsetWidth;
let gap = 43; // This is the gap you defined in your CSS

// Set the first card as active initially
cards[activeIndex].classList.add('active');

// Function to update the slider position
function updateSliderPosition() {
    const position = -activeIndex * (cardWidth + gap);
    portfolios.style.transform = `translateX(${position}px)`;
    portfolios.style.transition = 'transform 0.5s ease-in-out';
}

// Next button click event
next.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > (cards.length - 1)) {
        activeIndex = 0;
    }
    updateSliderPosition();
    
    // Update active class
    document.querySelector('.student_box.active').classList.remove('active');
    cards[activeIndex].classList.add('active');
})

// Previous button click event
prev.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 0) {
        activeIndex = cards.length - 1;
    }
    updateSliderPosition();
    
    // Update active class
    document.querySelector('.student_box.active').classList.remove('active');
    cards[activeIndex].classList.add('active');
})

// Update card width on window resize
window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth;
    updateSliderPosition();
});

// Initial position update
updateSliderPosition();

let time = new Date();
let hour = time.getHours();

if (hour < 6 || hour > 18) {
    body.classList.add('darkmode')
} else {
    body.classList.remove('darkmode')
}