import { ApiClientService, EntityApiService } from '@dfl/react-security';

class GoogleMapsService extends EntityApiService<any> {
  googleGeoCodeService = async (apiKey: string, lat?: number, lng?: number): Promise<any> => {
    if (!lat || !lng) {
      return await new Promise(() => {});
    }

    return await this.handleResponse(
      ApiClientService.get(this.getPath(`/geocode/json?latlng=${lat},${lng}&key=${apiKey}`), {
        ignoreSpace: true,
        ignoreToken: true,
      }),
    );
  };
}

export default new GoogleMapsService('https://maps.googleapis.com/maps/api');
