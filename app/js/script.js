window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.page-container', {
        speed: 600,
        direction: 'vertical',
        slidesPerView: 1,
        preventClicks: true,
        resistance: false,
        observer: true,
        mousewheel: true,
        resistanceRatio: 0,
        pagination: {
            el: '.page-pagination__hold',
            type: 'bullets',
            clickable: true
        }
    });

    var swiperClients = new Swiper('.clients', {
        speed: 700,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.clients-slider-arrow__next',
            prevEl: '.clients-slider-arrow__prev',
        }
    });

    var swiperNews = new Swiper('.news', {
        speed: 700,
        loop:true,
        slidesPerView: 3,
        spaceBetween: 6,
        navigation: {
            nextEl: '.news-slider-arrow__next',
            prevEl: '.news-slider-arrow__prev'
        }
    });

    document.querySelector('#map').addEventListener('mouseenter', function () {
        swiper.mousewheel.disable();
    });

    document.querySelector('#map').addEventListener('mouseleave', function () {
        swiper.mousewheel.enable();
    });
    var paginationContainer = document.querySelector('.page-pagination__hold');
    var snakes = document.querySelectorAll('.snake');

    var snakeDescend = function () {
        Array.prototype.forEach.call(snakes, function (el) {
            snakes[0].classList.add('snake_descend-left');
            snakes[1].classList.add('snake_descend-right');
        });
    };

    var snakeUp = function () {
        Array.prototype.forEach.call(snakes, function (el) {
            snakes[0].classList.remove('snake_descend-left');
            snakes[1].classList.remove('snake_descend-right');
        });
    };

    var changeBgBlue = function () {
        paginationContainer.classList.add('page-pagination__hold_blue');
    };

    var changeBgWhite = function () {
        paginationContainer.classList.remove('page-pagination__hold_blue');
    };

    swiper.on('slideChange', function () {

        if (swiper.activeIndex === 1) {
            changeBgBlue();
            snakeUp();
        } else if (swiper.activeIndex === 2) {
            changeBgBlue();
            snakeDescend();
        } else if (swiper.activeIndex === 3) {
            changeBgBlue();
            snakeUp();
        } else {
            changeBgWhite();
            snakeUp();
        }

    });
});


function initMap() {
    var covering = '#afafaf';
    var colorText = '#333333';
    var colorWater = '#909090';
    var styleBlackAndWhite = [
        {elementType: "geometry", stylers: [{color: undefined}]},           // цвет покрытия карты
        {elementType: 'labels.text.fill', stylers: [{color: '#333333'}]},   // цвет текста
        {elementType: 'labels.text.stroke', stylers: [{color: undefined}]}, // цвет обводки текста
        {elementType: "geometry.stroke",stylers: [{color: colorText}]},     // цвет обводки элементов на карте
        {elementType: "labels.icon",stylers: [{visibility: "off"}]},        // включить или отключить иконки
        {elementType: "labels.text.fill",stylers: [{ visibility: "on"}]},   // включить или отключить пользовательские настроцки цвета текста
        {elementType: "labels.text.stroke",stylers: [{visibility: "on"}]},  // включить или отключить пользовательские настроцки обводки цвета текста

        // ландшафт
        {featureType: "landscape",
            elementType: "geometry",stylers: [{visibility: "on"}]},
        {featureType: "landscape",
            elementType: "geometry.fill",stylers: [{color: covering}]},
        {featureType: "landscape.man_made",
            elementType: "geometry.stroke",stylers: [{color: colorText}]},

        // достопримечательности
        {featureType: "poi",
            elementType: "geometry",stylers: [{visibility: "on"}],
            elementType: "geometry.fill",stylers: [{color: '#bfbfbf'}]},
        // дороги
        {featureType: "road.arterial",
            elementType: "labels.text.fill",stylers: [{color: colorText}],
            elementType: "geometry.fill",stylers: [{color: '#ffffff'}]},
        {featureType: "road.highway",
            elementType: "labels.text.fill",stylers: [{color: colorText}],
            elementType: "geometry.fill",stylers: [{color: '#ffffff'}]},
        {featureType: "road.local",
            elementType: "labels.text.fill",stylers: [{color: colorText}],
            elementType: "geometry.fill",stylers: [{color: '#ffffff'}]},

        // промежуточные остановки и маршруты общественного транспорта
        {featureType: "transit.line",
            elementType: "geometry",stylers: [{color: "#949496"}]},

        // водоемы
        {featureType: "water",
            elementType: "geometry",stylers: [{color: colorWater}]},
        {featureType: "water",
            elementType: "labels.text.fill",stylers: [{color: colorText}]}
    ];
    var center = {lat: 50.43856022, lng: 30.53900178};
    var titleString = 'ODDEE agency';
    var markerIcon = 'images/marker.svg';
    var mobMap = 'auto';

    if (window.innerWidth <= 768) {
        mobMap = 'cooperative';
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15,
        styles: styleBlackAndWhite,
        disableDefaultUI: true,
        gestureHandling: mobMap,
        mapTypeControl: false
    });

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: titleString,
        icon: markerIcon
    });

    var contentString = '<div style="font-size:14px;font-weight:bold;padding:0 0 10px">#ODDEE agency</div>' +
        '<div>Киев 02000</div>' +
        '<div>Кловский спуск, 7</div>' +
        '<div>044 339 9835</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });


    var openMap = function () {
        marker.setMap(map);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
            marker.setAnimation(null);

        },2120);
    };
}

