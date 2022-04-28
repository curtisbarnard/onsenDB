import { key } from './key.js';
import { idahoPublicSprings } from './publicSprings.js';
import { privateSpringsArray } from './privateSprings.js';

// initialize map and default view
const map = L.map('map').setView([44.250314546543244, -114.84177337198135], 13);

// Load tiles
const tileUrl = `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`;
const layer = new L.TileLayer(tileUrl, {
  attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',
  maxZoom: 18,
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

let publicSpringsLayer = L.geoJSON(idahoPublicSprings, {
  onEachFeature: onEachFeature,
}).addTo(map);

// publicSpringsLayer.addData(coveCreek);
