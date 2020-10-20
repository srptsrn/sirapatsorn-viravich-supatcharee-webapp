let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 16.4321,
            lng: 102.8236
        },
        zoom: 8,
    });
}