import {
  findMunicipalityByStateAndMunicipality,
  findProvinceByStateCode,
  ILocationMunicipality,
  ILocationProvince,
} from '@dfl/location';
import { AddressField } from 'modules/common/components/Address';
import { IAddress, ICoordinate } from 'modules/common/interfaces';
import { IRegion } from 'modules/inventory/product/interfaces/IProductCreate';

export function getUserLocation(): Promise<ICoordinate> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          reject(error.message);
        },
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
        coordinates: [place.geometry.location?.lng(), place.geometry.location?.lat()],
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
    location,
  };
};

export const extractLocationDetails = (place: google.maps.places.PlaceResult | null) => {
  let location: any;

  if (place?.geometry?.location) {
    location = {
      type: 'Point',
      coordinates: [place.geometry.location?.lng(), place.geometry.location?.lat()],
    };
  }
  return location;
};

export const addressFieldPath = (fieldName: string, prefix?: string) =>
  [prefix, fieldName].filter((el) => !!el).join('.');

const hasField = (field?: string, inFields?: AddressField[]) => {
  return inFields?.includes(field as AddressField);
};

export const toAddressString = (address?: IAddress, excludedFields?: AddressField[], separator: string = ', ') => {
  const { street, number, city, state, zipCode, country } = address as IAddress;

  return [
    hasField('street', excludedFields) ? null : street,
    hasField('number', excludedFields) ? null : number,
    hasField('city', excludedFields) ? null : city,
    hasField('state', excludedFields) ? null : state,
    hasField('zipCode', excludedFields) ? null : zipCode,
    hasField('country', excludedFields) ? null : country,
  ]
    .filter((el) => !!el)
    .join(separator);
};

export const toRegion = (region: ILocationMunicipality | ILocationProvince): IRegion => {
  return {
    code: region?.code,
    // @ts-ignore
    city: region?.municipality || '',
    state: region?.state,
    country: region?.country,
  };
};

export const toAddressStringByCodes = (
  address?: IAddress,
  excludedFields?: AddressField[],
  separator: string = ', ',
) => {
  const { street, number, city, state, zipCode, country } = address as IAddress;

  return [
    hasField('street', excludedFields) ? null : street,
    hasField('number', excludedFields) ? null : number,
    hasField('city', excludedFields) ? null : findMunicipalityByStateAndMunicipality(state, city)?.name,
    hasField('state', excludedFields) ? null : findProvinceByStateCode(state)?.name,
    hasField('zipCode', excludedFields) ? null : zipCode,
    hasField('country', excludedFields) ? null : country,
  ]
    .filter((el) => !!el)
    .join(separator);
};
