const body = document.querySelector('body')
const navBtn = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.X-icon')
const frontNav = document.querySelector('.front-nav')
const insideNav = document.querySelector('.inside-nav')
const mainTag = document.querySelector("main");
const footer = document.querySelector('.footer')



//////////////////////////////////////////
//nav color changes & nav open close (mobile)
////////////////////////////////////////////
navBtn.addEventListener("click", function(){
    frontNav.classList.add('front-off')
    insideNav.classList.add('inside-on')
    body.classList.remove('change-bg')
    mainTag.classList.add('main-off')
    footer.classList.add('footer-off')

});

xIcon.addEventListener("click", () =>{
    insideNav.classList.remove('inside-on')
    frontNav.classList.remove('front-off')
    body.classList.add('change-bg')
    mainTag.classList.remove('main-off');
    footer.classList.remove('footer-off')

});

///////////////////////////////////////////////////////////
//changing hero imgs
//////////////////

const images = [ './pics/logo/hero2.png', './pics/logo/hero4.png', './pics/logo/hero3.png', './pics/logo/hero1.png'];

let currentIndex = 0;

function changeImage() {
    const heroImg = document.querySelector('.hero-image'); // Select the image element
    heroImg.src = images[currentIndex]; // Update the src attribute
    currentIndex = (currentIndex + 1) % images.length; // Update the index
}

// Change image every 4 seconds
setInterval(changeImage, 4000);
