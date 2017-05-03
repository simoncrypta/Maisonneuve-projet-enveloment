new WOW().init(); //Animation de la page d'accueil

// Variable pour la map
var vZoom = 4
var vBool = false

//Chercher le bouton
var el = document.getElementById("btnP");

//Si le bouton est clicker
el.addEventListener('click', function(){
  el.innerHTML = "Collège de Maisonneuve" //Change le texte du bouton
  vZoom = 14 //change la variable du zoom
  vBool = true //active le point de reperage
  init_map()
})

//function de l'API de Google Maps
function init_map() {

    var var_location = new google.maps.LatLng(45.550468, -73.553469);

    var var_mapoptions = {
        center: var_location,

        zoom: vZoom
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Maisonneuve"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    if (vBool) {
      var_marker.setMap(var_map);
    }

}
google.maps.event.addDomListener(window, 'load', init_map);
