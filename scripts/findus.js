function initMap() {
  var ruas = { lat: 13.0183642, lng: 77.5078933 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: ruas
  });
  var marker = new google.maps.Marker({
    position: ruas,
    map: map
  });
}
AOS.init({
  duration: 800,
  easing: "slide",
  once: true
});
