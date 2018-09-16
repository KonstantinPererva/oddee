var swiper = new Swiper('.page-container', {
    speed: 600,
    direction: 'vertical',
    slidesPerView: 1,
    resistance: false,
    observer: true,
    mousewheel: {
        sensitivity: .5
        // forceToAxis: false,
    }
    // scrollbar: {
    //     el: '.page-scrollbar',
    // },
});

var swiperClients = new Swiper('.clients', {
    speed: 600,
    slidesPerView: 1
});

var swiperNews = new Swiper('.news', {
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 6,
});