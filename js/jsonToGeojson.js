const springsArray = [];

// geoJSON class
class Spring {
  constructor(
    id,
    country,
    adminDiv,
    lat,
    long,
    name,
    type,
    tempF,
    access,
    fee,
    externalLink
  ) {
    this.type = 'Feature';
    (this.properties = {
      id,
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
      externalLink,
      popupContent: `
      <h4>${name}</h4>
      Access: ${access ? access : 'Unknown'}<br>
      Fee: ${fee ? '$' + fee : 'Unknown'}<br>
      Temperature: ${tempF > 0 ? tempF + 'F' : 'Unknown'}<br>
      `,
    }),
      (this.geometry = {
        type: 'Point',
        coordinates: [long, lat],
      });
  }
}

// fetch json data from file
export async function getJSONData() {
  const response = await fetch('datasets/NCEI-USA-Dataset.json');
  const springsData = await response.json();
  addSpringsToArray(springsData);
  return springsArray;
}

// create spring objects and add to array
function addSpringsToArray(springsData) {
  for (let springItem of springsData) {
    const testSpring = new Spring(
      springItem.id,
      springItem.country,
      springItem.adminDiv,
      springItem.latitude,
      springItem.longitude,
      springItem.springName,
      springItem.type,
      springItem.tempF,
      springItem.access,
      springItem.fee,
      springItem.externalLink
    );
    springsArray.push(testSpring);
  }
}

// TODO filtering number of springs maybe only show x amount? only show what is in the window? Clusters? What is the most efficient way?
