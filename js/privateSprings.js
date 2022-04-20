// Mountain with popup
const mountainVillage = L.circle([44.2211255891824, -114.93138052041058], {
  color: '#7272ff',
  fillcolor: '#7272ff',
  fillOpacity: 1,
  radius: 50,
});
mountainVillage.bindPopup(`
<h4>Mountain Village Hot Spring</h4>
Private<br>
<a href="https://www.idahohotsprings.com/destinations/mtn_village_resort/index.htm" target="_blank">Read more</a>`);

export const privateSpringsArray = [mountainVillage];
