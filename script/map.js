function init() {
  let map = new ymaps.Map("map__yandex", {
    center: [59.96840039489274, 30.31739297103687],
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(
    [59.96840039489274, 30.31739297103687],
    {
      balloonContentHeader: "NЁRDS DESIGN STUDIO",
      balloonContentBody: "От главного входа налево",
      balloonContentFooter: "Код от калитки #1299",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "/images/map-marker 1.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-50, -180],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
