var swiper = new Swiper('.page-container', {
    speed: 600,
    direction: 'vertical',
    slidesPerView: 1,
    // resistance: false,
    // observer: true,
    mousewheel: {
        sensitivity: .5
        // forceToAxis: false,
    }
});

var swiperClients = new Swiper('.clients', {
    speed: 600,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

var swiperNews = new Swiper('.news', {
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 6,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

// document.querySelector('.slider-projects').addEventListener('mouseenter', function () {
//     swiper.mousewheel.disable();
// });
//
// document.querySelector('.slider-projects').addEventListener('mouseleave', function () {
//     swiper.mousewheel.enable();
// });
//
// swiper.on('slideChange', function () {
//     var cont = document.querySelector('.b24-widget-button-position-bottom-right');
//     if (swiper.activeIndex === 1) {
//         cont.style.bottom = "130px";
//     } else {
//         cont.style.bottom = "30px";
//     }
// });
//
// swiper.on('resize', function () {
//     this.init();
// });
