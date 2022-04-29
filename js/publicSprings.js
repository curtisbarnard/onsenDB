export const idahoPublicSprings = [];

class Spring {
  constructor(name, access, externalResource, coordinates) {
    this.type = 'Feature';
    (this.properties = {
      name: name,
      access: access,
      popupContent: `
      <h4>${name}</h4>
      ${access}<br>
      <a href="${externalResource}" target="_blank">Read more</a>
      `,
    }),
      (this.geometry = {
        type: 'Point',
        coordinates: coordinates,
      });
  }
}

const coveCreek = new Spring(
  'Cove Creek Hot Spring',
  'Public',
  'https://www.idahohotsprings.com/destinations/basin_creek/index.htm',
  [-114.811719, 44.26424]
);
idahoPublicSprings.push(coveCreek);

const valleyCreek = new Spring(
  'Valley Creek Hot Spring',
  'Public',
  'https://www.arboursabroad.com/stanley-idaho-hot-springs/',
  [-114.93117037396544, 44.221863750158704]
);
idahoPublicSprings.push(valleyCreek);

const boatBox = new Spring(
  'Boat Box Hot Spring',
  'Public',
  'https://www.idahohotsprings.com/destinations/elkhorn/index.htm',
  [-114.88604293759461, 44.24479071752023]
);
idahoPublicSprings.push(boatBox);

// Testing with CSV data
const spring1 = new Spring(
  'GIVENS HOT SPRINGS',
  'Public',
  'https://www.google.com',
  [-116.707, 43.414]
);
const spring2 = new Spring(
  'HIGHLAND LAND CO WARM SPRING',
  'Public',
  'https://www.google.com',
  [-116.396, 43.831]
);
const spring3 = new Spring(
  'ROYSTONE HOT SPRINGS',
  'Public',
  'https://www.google.com',
  [-116.353, 43.951]
);
const spring4 = new Spring(
  'SWEET WARM SPRING',
  'Public',
  'https://www.google.com',
  [-116.325, 43.972]
);
const spring5 = new Spring(
  'TERTELING HOT SPRINGS',
  'Public',
  'https://www.google.com',
  [-116.208, 43.677]
);
const spring6 = new Spring(
  'THOMAS FLATS WARM SPRING',
  'Public',
  'https://www.google.com',
  [-116.332, 43.161]
);
const spring7 = new Spring(
  'DEER BUTTE HOT SPRING',
  'Public',
  'https://www.google.com',
  [-117.178, 43.739]
);
const spring8 = new Spring(
  'HOT SPRING',
  'Public',
  'https://www.google.com',
  [-117.383, 43.302]
);
const spring9 = new Spring(
  'JONESBORO WARM SPRING',
  'Public',
  'https://www.google.com',
  [-117.958, 43.795]
);
const spring10 = new Spring(
  'MITCHELL BUTTE HOT SPRING',
  'Public',
  'https://www.google.com',
  [-117.156, 43.763]
);
const spring11 = new Spring(
  'SNIVELY HOT SPRING',
  'Public',
  'https://www.google.com',
  [-117.203, 43.727]
);
const spring12 = new Spring(
  'SOUTH BLACK WILLOW SPRING',
  'Public',
  'https://www.google.com',
  [-117.19, 43.703]
);
const spring13 = new Spring(
  'SPRINGS',
  'Public',
  'https://www.google.com',
  [-117.596, 43.893]
);
const spring14 = new Spring(
  'VALE HOT SPRINGS',
  'Public',
  'https://www.google.com',
  [-117.233, 43.982]
);
const spring15 = new Spring(
  'null',
  'Public',
  'https://www.google.com',
  [-117.697, 43.073]
);
const spring16 = new Spring(
  'null',
  'Public',
  'https://www.google.com',
  [-117.502, 43.215]
);
const spring17 = new Spring(
  'null',
  'Public',
  'https://www.google.com',
  [-117.326, 43.589]
);
const spring18 = new Spring(
  'null',
  'Public',
  'https://www.google.com',
  [-117.501, 43.893]
);
idahoPublicSprings.push(spring1);
idahoPublicSprings.push(spring2);
idahoPublicSprings.push(spring3);
idahoPublicSprings.push(spring4);
idahoPublicSprings.push(spring5);
idahoPublicSprings.push(spring6);
idahoPublicSprings.push(spring7);
idahoPublicSprings.push(spring8);
idahoPublicSprings.push(spring9);
idahoPublicSprings.push(spring10);
idahoPublicSprings.push(spring11);
idahoPublicSprings.push(spring12);
idahoPublicSprings.push(spring13);
idahoPublicSprings.push(spring14);
idahoPublicSprings.push(spring15);
idahoPublicSprings.push(spring16);
idahoPublicSprings.push(spring17);
idahoPublicSprings.push(spring18);
