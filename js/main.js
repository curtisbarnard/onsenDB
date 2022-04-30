import { getJSONData } from './jsonToGeojson.js';

// initialize map object
const map = L.map('map');

// set map view
function setMapView(lat, long) {
  map.setView([lat, long], 10);
}

function getUserLocation() {
  const success = (position) => {
    setMapView(position.coords.latitude, position.coords.longitude);
  };
  const error = () => {
    // default view if no location access
    setMapView(38.63426085586347, -105.9848419384307);
    alert('You will have to manually search for a spring');
  };
  navigator.geolocation.getCurrentPosition(success, error);
}

getUserLocation();

// Load tiles
const tileUrl = `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`;
const layer = new L.TileLayer(tileUrl, {
  attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',
  maxZoom: 15,
  id: 'stamen/terrain',
});
map.addLayer(layer);

// Stuff to do to every geoJSON that get's added to the map
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

// Mapping data points
function mapPoints(data) {
  let springsLayer = L.geoJSON(data, {
    onEachFeature: onEachFeature,
  }).addTo(map);
}

// Clear points on map
function clearPoints() {
  map.removeLayer(springsLayer);
}

// searching data for autocomplete matches
async function autoComplete(string) {
  const data = await getJSONData();
  let matches = [];
  const regex = new RegExp(string, 'gi');
  for (let item of data) {
    if (regex.test(item.properties.name)) {
      matches.push(item);
    }
    if (matches.length > 9) {
      break;
    }
  }
  console.log(matches);
  mapPoints(matches);
}

// event listener on input
const search = document.querySelector('.container input');
search.addEventListener('input', () => autoComplete(search.value));
// write results to dom
