import { key } from './key.js';
import { publicSpringsArray } from './publicSprings.js';
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

// add groups to map for public and private
const publicSprings = L.layerGroup(publicSpringsArray).addTo(map);
const privateSprings = L.layerGroup(privateSpringsArray);

//prettier-ignore
const overlayMaps = {
  "Public": publicSprings,
  "Private": privateSprings,
};
const layerControl = L.control
  .layers(null, overlayMaps, { collapsed: false })
  .addTo(map);
