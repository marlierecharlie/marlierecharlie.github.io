let titreHome = document.getElementById('titreHome')

window.addEventListener('scroll', function () {
    let value = window.scrollY
    if (value * 2 >= 400) {
        titreHome.style.display = 'none';

    } else {
        titreHome.style.top = value * 2 + 'px';
        titreHome.style.display = 'block';
    }
    console.log(value * 2)

})


const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

    // If we need pagination
    pagination: {
    el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});