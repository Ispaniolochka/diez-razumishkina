$(document).ready(function () {
	$(".direction").selectize();
	$(".button_burger").on("click", function () {
		$(".button_burger").toggleClass("button_burger-open");
		$(".burger").slideToggle();
	})
})
ymaps.ready(init);

function init() {
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