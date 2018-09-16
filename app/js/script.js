var swiper = new Swiper('.page-container', {
    speed: 600,
    direction: 'vertical',
    slidesPerView: 1,
    freeMode: false,
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