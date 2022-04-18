export const publicSpringsArray = [boatBox, coveCreek, valleyCreek];

// Data Points
// Boat Box with popup
const boatBox = L.circle([44.24479071752023, -114.88604293759461], {
  color: '#3030bd',
  fillcolor: '#3030bd',
  fillOpacity: 1,
  radius: 50,
});
boatBox.bindPopup(`
<h4>Boat Box Hot Spring</h4>
Public<br>
<a href="https://www.idahohotsprings.com/destinations/elkhorn/index.htm" target="_blank">Read more</a>`);

// Cove Creek with popup
const coveCreek = L.circle([44.26424, -114.811719], {
  color: '#3030bd',
  fillcolor: '#3030bd',
  fillOpacity: 1,
  radius: 50,
});
coveCreek.bindPopup(`
<h4>Cove Creek Hot Spring</h4>
Public<br>
<a href="https://www.idahohotsprings.com/destinations/basin_creek/index.htm" target="_blank">Read more</a>`);

// Valley Creek with popup
const valleyCreek = L.circle([44.221863750158704, -114.93117037396544], {
  color: '#3030bd',
  fillcolor: '#3030bd',
  fillOpacity: 1,
  radius: 50,
});
valleyCreek.bindPopup(`
<h4>Valley Creek Hot Spring</h4>
Public<br>
<a href="https://www.arboursabroad.com/stanley-idaho-hot-springs/" target="_blank">Read more</a>`);
