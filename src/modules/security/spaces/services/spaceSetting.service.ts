import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ISpaceSetting } from 'modules/security/spaces/interfaces';

class SpaceSettingService extends EntityApiService<ISpaceSetting> {
  getProperty = (id: any) => ApiClientService.get(this.getPath(`/property/${id as string}`));

  updateProperty = (params: any) => ApiClientService.patch(this.getPath(`/property/${params?.typo as string}`), params);
}

export default new SpaceSettingService('/ms-auth/api/space-settings');
