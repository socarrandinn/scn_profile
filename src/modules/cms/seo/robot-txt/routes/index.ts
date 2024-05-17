import { RobotTxt } from 'modules/cms/seo/robot-txt/pages';
import { RouteConfig } from '@dfl/react-security';
import { ROBOT_TXT_PERMISSIONS } from 'modules/cms/seo/robot-txt/constants/robot-txt.permissions';

const routes: RouteConfig = {
  RobotTxt: {
    path: '/',
    permissions: ROBOT_TXT_PERMISSIONS.ROBOT_TXT_VIEW,
    component: RobotTxt,
  },
};

export default routes;
