//Buscandome
function geoFindMe() {
  let output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>No encontramos tu ubicacion</p>";
    return;
  }
// Coordenadas del lugar donde me encuentro
  function success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    let lima = {lat: -12.0431800, lng: -77.0282400};
    map = new google.maps.Map(document.getElementById('map'), {
        center: lima,
        zoom: 11,
        disableDefaultUI: true,
        scrollwheel: true,
        });
  };
// Si no ubica mis coordenadas
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };


  navigator.geolocation.getCurrentPosition(success, error);
}

// Create the places service.
    let service = new google.maps.places.PlacesService(map);
    let getNextPage = null;
    let moreButton = document.getElementById('more');
    moreButton.onclick = function() {
      moreButton.disabled = true;
      if (getNextPage) getNextPage();
    };

// Perform a nearby search.
    service.nearbySearch(
        {location: lima, radius: 500, type: ['restaurant']},
        function(results, status, pagination) {
          if (status !== 'OK') return;

          createMarkers(results);
          moreButton.disabled = !pagination.hasNextPage;
          getNextPage = pagination.hasNextPage && function() {
          pagination.nextPage();
          };
    });
  

    function createMarkers(places) {
      let bounds = new google.maps.LatLngBounds();
      let placesList = document.getElementById('places');

      for (let i = 0, place; place = places[i]; i++) {
        let image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        let marker = new google.maps.Marker({
          map: map,
          icon: image,
          title: place.name,
          position: place.geometry.location
        });

        let li = document.createElement('li');
        li.textContent = place.name;
        placesList.appendChild(li);

        bounds.extend(place.geometry.location);
      }
      map.fitBounds(bounds);
    }

    // //Add marker
    //   addMarker(markers[i]);
      
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
   

   

    // Array of markers
      // let markers = [
      //   {
      //     coords: { lat: -12.046374, lng: -77.042793 },
      //     cotent: '<h1>Lima</h1>'
      //   },
      //   {
      //     coords: { lat: -12.046374, lng: -77.042793 },
      //     cotent: '<h1>Lima</h1>'
      //   },
      // ];
     
      //Loop through markers
      // for(let i=0;i<markers.length;i++){
        
      // }