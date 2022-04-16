import { key } from './key.js';

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

// Data Points
// Boat Box
44.24479071752023, -114.88604293759461;
const circle = L.circle([44.24479071752023, -114.88604293759461], {
  color: '#3030bd',
  fillcolor: '#3030bd',
  fillOpacity: 1,
  radius: 50,
}).addTo(map);
