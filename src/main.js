//Duration Splash
let loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.height = "100px";
  loader.style.width = "100px";
  loader.style.borderRadius = "50%";
  loader.style.visibility = "hidden";
  loader.style.transitionDuration="2s";
});

//Find Me
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

    // //Coordenadas del mapa
    // function initMap() {
    //   let options = {
    //     zoom: 8,
    //     center: { lat: -12.046374, lng: -77.042793 }
    //   }

    // //Mapa
    //   let map = new
    //     google.maps.Map(document.getElementById('map'), options);
      
    // //Listen for click on map
    //   google.maps.event.addListener(map,'click',
    //   function(event){
    //     //Add marker
    //     addMarker({coords:event.latLng});
    //   });

    // //Array of markers
    //   let markers = [
    //     {
    //       coords: { lat: -12.046374, lng: -77.042793 },
    //       cotent: '<h1>Lima</h1>'
    //     }
    //   ];
    //   //Loop through markers
    //   for(let i=0;i<markers.length;i++){
    //     //Add marker
    //     addMarker(markers[i]);
    //   }
    //   //Add Marker Function
    //   function addMarker(props){
    //     let marker=new google.maps.Marker({
    //       position:props.coords,
    //       map:map,
    //     });
    //     //Check for customicon
    //     if(props.iconImage){
    //       //Set icon image
    //       marker.setIcon(props.iconImage);
    //     }
    //   }
    // }