//Variables para usar la geolocalización
let map, infoWindow;

//Geolocalizándome y ubicando mis coordenadas
  window.initMap=()=>{
    // navigator.geolocation.getCurrentPosition((position)=> {
    //   let lat: position.coords.latitude;
    //   let lng: position.coords.longitude;
    //   let myPosition=new google.maps.LtLg(lat,lng);
    //   let ubication={
    //     center: myPosition,
    //     zoom: 8,
    //   };
    map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 8
      });
    };
  }

//Para usar: https://developers.google.com/maps/documentation/javascript/places
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

//Para usar https://developers.google.com/maps/documentation/javascript/places#place_search_requests
//Para usar https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
// Para revisar https://developers.google.com/maps/documentation/javascript/importing_data
// https://developers.google.com/maps/documentation/javascript/geolocation
//https://developers.google.com/maps/documentation/javascript/geolocation


//Find Me
// function geoFindMe() {
//   var output = document.getElementById("out");

//   if (!navigator.geolocation){
//     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//     return;
//   }

//   function success(position) {
//     var latitude  = position.coords.latitude;
//     var longitude = position.coords.longitude;

//     output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

//     var img = new Image();
//     img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

//     output.appendChild(img);
//   };

//   function error() {
//     output.innerHTML = "Unable to retrieve your location";
//   };

//   output.innerHTML = "<p>Locating…</p>";

//   navigator.geolocation.getCurrentPosition(success, error);
// }

    // 

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