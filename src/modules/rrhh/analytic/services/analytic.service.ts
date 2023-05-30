import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IGeneralSummary } from 'modules/rrhh/analytic/interfaces';

class AnalyticService extends EntityApiService<IGeneralSummary> {
  summary = (params: any): Promise<IGeneralSummary> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/summary'), params));
  };

  categoryDistribution = (params: any): Promise<any[]> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/category-distribution'), params));
  };

  teamDistribution = (params: any): Promise<any[]> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/team-distribution'), params));
  };

  locationDistribution = (params: any): Promise<any[]> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/team-distribution'), params));
  };

  positionDistribution = (params: any): Promise<any[]> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/position-distribution'), params));
  };

  ageDistribution = (params: any): Promise<any[]> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/age-distribution'), params));
  };
}

export default new AnalyticService('/ms-rrhh/api/analytics');
