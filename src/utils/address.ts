import { IAddress, ICoordinate } from 'modules/common/interfaces';

export function getUserLocation (): Promise<ICoordinate> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject('Geolocation is not supported by your browser.');
    }
  });
}

export const extractPlaceDetails = (place: google.maps.places.PlaceResult | null): IAddress => {
  let city;
  let country;
  let state;
  let zipCode;
  let streetName;
  let streetNumber = '';

  let location: any;

  if (place) {
    if (place?.geometry?.location) {
      location = {
        type: 'Point',
        coordinates: [place.geometry.location?.lng(), place.geometry.location?.lat()]
      };
    }
    place.address_components?.forEach((component: any) => {
      const types = component.types;

      if (types.includes('locality')) {
        city = component.long_name;
      } else if (types && types.includes('country')) {
        country = component.long_name;
      } else if (types && types.includes('route')) {
        streetName = component.long_name;
      } else if (types && types.includes('street_number')) {
        streetNumber = component.long_name;
      } else if (types && types.includes('administrative_area_level_1')) {
        state = component.long_name;
      } else if (types && types.includes('postal_code')) {
        zipCode = component.long_name;
      }
    });
  }

  return {
    city: city || '',
    street: streetName || '',
    number: streetNumber || '',
    country: country || '',
    state: state || '',
    zipCode: zipCode || '',
    location
  };
}

export const extractLocationDetails = (place: google.maps.places.PlaceResult | null) => {
  let location: any;

  if (place?.geometry?.location) {
    location = {
      type: 'Point',
      coordinates: [place.geometry.location?.lng(), place.geometry.location?.lat()]
    };
  }
  return location;
}

export const addressFieldPath = (fieldName: string, prefix?: string) => [prefix, fieldName].filter(el => !!el).join('.');
