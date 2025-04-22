// Google Maps function
function initMap() {
  const soldierfield = { lat: 41.8625, lng: -87.6166 };

  const map = new google.maps.Map(document.getElementById("googlemap"), {
    zoom: 15,
    center: soldierField,
  });

  
  const marker = new google.maps.Marker({
    position: soldierField,
    map,
    title: "Soldier Field",
  });

  
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>SOLDIER FIELD</h3>
	<p>I will be going to the Weeknd's concert on May 31st, FRONT ROW!</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  map.setOptions({
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "water",
        stylers: [{ color: "#0e1626" }],
      },
    ],
  });
}
