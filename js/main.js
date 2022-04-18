import { key } from './key.js';
import { idahoPublicSprings } from './publicSprings.js';
import { privateSpringsArray } from './privateSprings.js';

// initialize map and default view
const map = L.map('map').setView([44.250314546543244, -114.84177337198135], 13);

// Load tiles
const tileUrl = `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${key}`;
const layer = new L.TileLayer(tileUrl, {
  attribution:
    'Maps &copy; <a href="http://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> contributors',
  maxZoom: 18,
  id: 'thunderforest/outdoors',
});
map.addLayer(layer);

// Stuff to do to every geoJSON that get's added to the map
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

let publicSpringsLayer = L.geoJSON(idahoPublicSprings, {
  onEachFeature: onEachFeature,
}).addTo(map);

// publicSpringsLayer.addData(coveCreek);
