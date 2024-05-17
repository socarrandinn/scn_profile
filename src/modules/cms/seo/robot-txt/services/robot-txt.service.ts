import { EntityApiService } from '@dfl/react-security';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';

class RobotTxtService extends EntityApiService<IRobotTxt> {}

export default new RobotTxtService('seo/robot-txt');
