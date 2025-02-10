import { IAddress } from 'modules/common/interfaces';

export const geocodeAddress = async (address: string, country?: string) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address,
  )}&format=json&addressdetails=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener las coordenadas.');

    const data = await response.json();
    if (data.length === 0) return null;

    const { lat, lon } = data[0];
    return { lat: parseFloat(lat), lng: parseFloat(lon) };
  } catch (error) {
    console.error('Error en la geocodificación:', error);
    return null;
  }
};

export const getFormatterAddress = (address: any, isFormatterAddress = false) => {
  const { houseNumber, address1, address2, city, state, country } = address;

  const fullAddress = [
    isFormatterAddress ? houseNumber : null,
    isFormatterAddress ? address2?.name || address2 : null,
    address1?.name || address1,
    city?.name || city,
    state?.name || state,
    country,
  ]
    .filter(Boolean)
    .join(', ');

  return fullAddress;
};

export const getFormatterInternacionalAddress = (address: IAddress, _country?: string) => {
  // const { address1, address2, city, state, country } = address;

  const fullAddress = [
    address?.houseNumber && 'No. ' + address?.houseNumber,
    address?.address2,
    address?.address1,
    address?.city,
    address?.state,
    _country ?? address?.country,
  ]
    ?.filter(Boolean)
    ?.join(', ');
  return fullAddress;
};
