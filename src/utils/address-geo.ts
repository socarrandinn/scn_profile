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

export const getFormatterAddress = (address: IAddress, _country?: string) => {
  if (address?.formattedAddress) {
    return address?.formattedAddress;
  }

  const a = address as any;

  return [
    a?.address1?.name ?? a?.address1,
    a?.houseNumber && 'No. ' + (a?.houseNumber as string),
    a?.address2,
    a?.city,
    a?.state,
    _country ?? a?.country,
  ]
    ?.filter(Boolean)
    ?.join(', ');
};
