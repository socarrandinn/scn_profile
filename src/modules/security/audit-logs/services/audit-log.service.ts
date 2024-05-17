import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IAuditLog } from '../interfaces';

class AuditLogService extends EntityApiService<IAuditLog> {
  searchByEntity = (entityId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/entity/${entityId}/search`), params, config));
  };

  searchByModuleEntity = (entityId: string, module: string, params: any, config?: any) => {
    if (entityId && module) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/module/${module}/entity/${entityId}/search`), params, config),
      );
    }
    return Promise.reject(new Error('You must need a entityId and module'));
  };

  searchByModule = (module: string, params: any, config?: any) => {
    if (module) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/module/${module}/search`), params, config));
    }
    return Promise.reject(new Error('You must need a module'));
  };
}

export default new AuditLogService('/ms-auth/api/audit-logs');
