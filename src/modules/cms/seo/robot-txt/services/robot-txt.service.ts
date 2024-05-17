import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';

class RobotTxtService extends EntityApiService<IRobotTxt> {
  getRobotTxt = (config?: any) => {
    return this.handleResponse(ApiClientService.get(this.getPath('/robot.tx'), config));
  };
}

export default new RobotTxtService('/ms-cms/api/seo/robot-txt');
