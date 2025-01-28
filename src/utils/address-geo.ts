export const geocodeAddress = async (address: string) => {
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
