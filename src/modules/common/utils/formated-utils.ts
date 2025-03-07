import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

export const formatedUtils = (value: string, position: number, newValue: string): string => {
  // Split the string by commas
  if (!value) value = ', , , , , CU';

  const valueSplit = value?.split(', ');

  // Verify if the position is valid
  if (position >= 0 && position < valueSplit?.length) {
    // Substitute the value in the specified position
    valueSplit[position] = newValue;
  } else {
    // If the position is not valid, throw an error or handle it accordingly
    throw new Error('La posición especificada no es válida.');
  }

  // Join the array back into a string separated by commas
  return valueSplit?.join(', ');
};

export const formatedAddressObjUtils = (address1: any, houseNumber: string, address2: any, city: any, state: any) => {
  const no = houseNumber?.includes('#') ? houseNumber : `#${houseNumber}`;
  return [
    address1?.name || address1,
    no,
    address2?.name || address2,
    city?.name || city,
    state?.name || state,
    ADDRESS_COUNTRY_CODE,
  ]
    .filter(Boolean)
    .join(', ');
};
