    ymaps.ready(init);
    function init(){ 
            
        let myMap = new ymaps.Map("map", {
            center: [59.945451, 30.276131],
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([59.945451, 30.276131], {
            hintContent: 'Содержимое всплывающей подсказки',
            balloonContent: 'Содержимое балуна'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/geotag.png',
            iconImageSize: [38, 49]
        });

        myMap.geoObjects.add(myPlacemark);

    }