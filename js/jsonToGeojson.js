export const springs = [];

// geoJSON class
class Spring {
  constructor(country, adminDiv, lat, long, name, type, tempF, access, fee) {
    this.type = 'Feature';
    (this.properties = {
      location: {
        country,
        adminDiv,
        lat,
        long,
      },
      name,
      type,
      tempF,
      access,
      fee,
      popupContent: `
      <h4>${name}</h4>
      ${access ? access : ''}<br>
      Fee: $${fee ? fee : 'Unknown'}<br>
      Temperature: ${tempF}F<br>
      `,
    }),
      (this.geometry = {
        type: 'Point',
        coordinates: [lat, long],
      });
  }
}

// fetch json data from file
export async function getJSONData() {
  const response = await fetch('datasets/NCEI-USA-Dataset.json');
  const springs = response.json();
  console.log(springs);
}
