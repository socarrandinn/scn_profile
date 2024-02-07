import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IAuditLog } from '../interfaces';

class AuditLogService extends EntityApiService<IAuditLog> {
  /*  searchByEntity = (entityId: string, payload: any) => {
     if (entityId) {
       return this.handleResponse(ApiClientService.post(this.getPath(`/entity/${entityId}/search`), undefined));
     }
     return Promise.reject(new Error('You must need a entityId'));
   }; */

  searchByEntity = (entityId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/entity/${entityId}/search`), params, config));
  };
}

export default new AuditLogService('/ms-auth/api/audit-logs');
