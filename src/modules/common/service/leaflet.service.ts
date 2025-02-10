import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IAddress, IGeocode } from '../interfaces';

class LeafletService extends EntityApiService<IAddress> {
  getOneLocation = (address: string, countryCode?: string): Promise<any> => {
    let path = '/search?format=json&addressdetails=1';
    if (address) {
      path += `&q=${encodeURIComponent(address)}`;
    }
    if (countryCode) {
      path += `&countrycodes=${countryCode}`;
    }
    return this.handleResponse(ApiClientService.get(this.getPath(path)))
      .then((data) => {
        if (data?.length === 0) return null;
        const { lat, lon, address } = data[0];
        return { lat: parseFloat(lat), lng: parseFloat(lon), address };
      })
      .catch((error) => {
        console.error('Error en la geocodificación:', error);
        return null;
      });
  };

  searchLocation = (address: string, countryCode?: string): Promise<IGeocode[] | []> => {
    let path = '/search?format=json&addressdetails=1';
    if (address) {
      path += `&q=${encodeURIComponent(address)}`;
    }
    if (countryCode) {
      path += `&countrycodes=${countryCode}`;
    }
    return this.handleResponse(ApiClientService.get(this.getPath(path)))
      .then((data) => {
        if (data?.length === 0) return [];
        return data;
      })
      .catch((error) => {
        console.error('Error en la geocodificación:', error);
        return [];
      });
  };

  reverseGeoCode = (lat: number, lng: number): Promise<IGeocode | null> => {
    const path = `/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`;

    return this.handleResponse(ApiClientService.get(this.getPath(path)))
      .then((data) => ({
        display_name: data.display_name,
        address: data.address,
        lat: data.lat,
        lng: data.lon,
      }))
      .catch((error) => {
        console.error('Error en geocodificación inversa:', error);
        return null;
      });
  };
}

export default new LeafletService('https://nominatim.openstreetmap.org');
