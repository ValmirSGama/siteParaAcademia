let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
})
