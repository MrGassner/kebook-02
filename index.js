const openNav = document.querySelector('.mobile-btn')
const mobileNav = document.querySelector('.mobile-nav')
const closeNav = document.querySelector('.mobile-close')
const background= document.querySelector('#background')

openNav.addEventListener('click', () => {
    mobileNav.style.width = '100%'
    disableScroll()
})

closeNav.addEventListener('click', () => {
    mobileNav.style.width = '0'
    enableScroll()
})

function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
    background.classList.add('darken')
}

function enableScroll() {
    window.onscroll = function() {};

    background.classList.remove('darken')
}