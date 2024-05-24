const body = document.querySelector('body')
const navBtn = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.X-icon')
const frontNav = document.querySelector('.front-nav')
const insideNav = document.querySelector('.inside-nav')


navBtn.addEventListener("click", function(){
    frontNav.classList.add('front-off')
    insideNav.classList.add('inside-on')
    body.classList.remove('change-bg')
});

xIcon.addEventListener("click", () =>{
    insideNav.classList.remove('inside-on')
    frontNav.classList.remove('front-off')
    body.classList.add('change-bg')
});