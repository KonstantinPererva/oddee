var covering = null;
var colorText = null;

if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    covering = '#e6e6e8';
    colorText = '#333333';
} else if (window.innerWidth <= 768) {
    covering = '#ffffff';
    colorText = '#333333';
} else {
    covering = '#dbdbdd';
    colorText = '#656565';
}

function initMap() {
    var styleBlackAndWhite = [
        {elementType: "geometry", stylers: [{color: covering}]},            // цвет покрытия карты
        {elementType: 'labels.text.fill', stylers: [{color: '#333333'}]},   // цвет текста
        {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]}, // цвет обводки текста
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
            elementType: "geometry",stylers: [{visibility: "off"}]},

        // дороги
        {featureType: "road.arterial",
            elementType: "labels.text.fill",stylers: [{color: colorText}]},
        {featureType: "road.highway",
            elementType: "labels.text.fill",stylers: [{color: colorText}]},
        {featureType: "road.local",elementType: "labels.text.fill",stylers: [{color: colorText}]},

        // промежуточные остановки и маршруты общественного транспорта
        {featureType: "transit.line",elementType: "geometry",stylers: [{color: "#949496"}]},

        // водоемы
        {featureType: "water",
            elementType: "geometry",stylers: [{color: "#f6faff"}]},
        {featureType: "water",
            elementType: "labels.text.fill",stylers: [{color: colorText}]}
    ];

    var center = {lat: 50.440512, lng: 30.5370035};
    var titleString = 'ODDEE';
    // var markerIcon = '/img/mark.png';
    var mobMap = 'auto';

    if (window.innerWidth <= 768) {
        mobMap = 'cooperative';
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 14,
        styles: styleBlackAndWhite,
        disableDefaultUI: true,
        gestureHandling: mobMap
    });

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: titleString
    });

    var contentString = '<div style="font-size:14px;font-weight:bold;padding:0 0 10px">NOSTALGIE</div>' +
        '<div>Мы открыты для Вас</div>' +
        '<div>с понедельника по воскресенье</div>' +
        '<div>с 11:00 до 20:00</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}


// function initMap() {
//     var myLatLng = {lat: 50.440512, lng: 30.5370035};
//
//     // Create a map object and specify the DOM element
//     // for display.
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: myLatLng,
//         zoom: 14,
//         disableDefaultUI : true
//     });
//
//     // Create a marker and set its position.
//     var marker = new google.maps.Marker({
//         map: map,
//         position: myLatLng,
//         title: '#oddee agency'
//     });
//
//     console.log(marker)
// }