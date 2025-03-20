export interface IProvider {
  name: 'string';
  code: 'string';
  active: true;
  avatar: {
    thumb: 'string';
    url: 'string';
    width: 0;
    height: 0;
  };
  contacts: {
    phones: [
      {
        label: 'string';
        principal: true;
        value: 'string';
      },
    ];
    emails: [
      {
        label: 'string';
        principal: true;
        value: 'string';
      },
    ];
  };
  address: {
    address: 'string';
    municipality: 'string';
    state: 'string';
    country: 'string';
    zipCode: 'string';
    location: {
      coordinates: [-73.9667, 40.78];
    };
  };
  commission: 0;
}
