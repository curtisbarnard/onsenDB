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
