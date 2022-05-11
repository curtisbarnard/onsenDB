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
  maxZoom: 14,
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

// get Json on page load
async function enableAutoComplete() {
  let data = await getJSONData();
  // event listener on input
  const search = document.querySelector('.container input');
  search.addEventListener('input', () => autoComplete(search.value, data));
}
enableAutoComplete();

// searching data for autocomplete matches
function autoComplete(string, data) {
  let matches = data.filter((spring) => {
    const regex = new RegExp(string, 'gi');
    return (
      // filtering the spring names
      spring.properties.name?.match(regex) ||
      // filter administrative division (aka state)
      spring.properties.location.adminDiv?.match(regex) ||
      // filter country
      spring.properties.location.country?.match(regex)
    );
  });
  if (string.length === 0) {
    matches = [];
    document.querySelector('.autocomplete-list').innerHTML = '';
  }
  writeToDOM(matches);
  autoCompleteListListeners(matches);
}

// write results to dom
function writeToDOM(matches) {
  document.querySelector('.autocomplete-list').innerHTML = '';
  if (matches.length > 0) {
    const html = matches.map((obj) => {
      return `
        <div class="autocomplete-item" data-id="${obj.properties.id}">
          <h2>${obj.properties.name}</h2>
          <span>${obj.properties.location.adminDiv}, ${obj.properties.location.country}</span>
        </div>
              `;
    });
    html.unshift(`
    <div class="autocomplete-header"></div>
    `);
    document.querySelector('.autocomplete-list').innerHTML = html.join('');
  }
}

// Add event listeners on autocomplete divs
function autoCompleteListListeners(autoCompMatches) {
  const listItems = document.querySelectorAll('.autocomplete-item');
  for (let item of listItems) {
    // user clicks on autocomplete div
    item.addEventListener('click', (e) => {
      // clear auto complete list
      document.querySelector('.autocomplete-list').innerHTML = '';
      // get coordinates from object
      const clickedSpring = autoCompMatches.filter(
        (item) => item.properties.id === e.currentTarget.getAttribute('data-id')
      );
      // plot point that was clicked onto map
      mapPoints(clickedSpring[0]);
      // move map to center on clicked spring
      setMapView(
        clickedSpring[0].properties.location.lat,
        clickedSpring[0].properties.location.long
      );
      // scroll down to map
      window.scrollBy(0, window.innerHeight);
    });
  }
}

// TODO Might need to limit results of autocomplete on mobile as it overlaps with the map in an odd way
